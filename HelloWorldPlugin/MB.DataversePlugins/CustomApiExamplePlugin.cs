using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Newtonsoft.Json;
using System;
using System.Linq;

namespace MB.DataversePlugins
{
    public class CustomApiExamplePlugin : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var orgFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            var tracing = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            var systemOrg = orgFactory.CreateOrganizationService(null);
            var response = new CustomApiExamplePluginResponse();

            tracing.Trace("CustomApiExamplePlugin plugin started");

            var inputText = (string)context.InputParameters["InputText"];
            response.HelperText = Reverse(inputText);

            var accounts = systemOrg.RetrieveMultiple(new QueryExpression("account") { ColumnSet = new ColumnSet("accountid"), TopCount = 5 });
            response.AccountIds = accounts.Entities.Select(a => a.Id).ToArray();

            context.OutputParameters["JsonResponse"] = JsonConvert.SerializeObject(response);
        }

        public string Reverse(string s)
        {
            var charArray = s.ToCharArray();
            Array.Reverse(charArray);
            return new string(charArray);
        }

    }

    public class CustomApiExamplePluginResponse
    {
        public string HelperText { get; set; }
        public Guid[] AccountIds { get; set; }
    }
}
