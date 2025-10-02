/* eslint-disable @typescript-eslint/no-explicit-any */
import { IInputs } from "../generated/ManifestTypes";

export class DataverseService {
  webApi: ComponentFramework.WebApi;
  context: ComponentFramework.Context<IInputs>;

  constructor(webApi: ComponentFramework.WebApi, context: ComponentFramework.Context<IInputs>) {
    this.webApi = webApi;
    this.context = context;
  }

  loadData(): Promise<any[]> {
    const webApi = this.webApi;
    return new Promise(function (resolve, reject) {
      webApi.retrieveMultipleRecords("account", "?$select=name").then(
        function (response: any) {
          if (response == null) resolve([]);
          resolve(response.entities);
        },
        function (error: any) {
          console.log(error.message);
          reject(error.message);
        },
      );
    });
  }

  callUnboundCustomApi(input: string): Promise<string> {
    //const context = this.context;
    return new Promise(function (resolve, reject) {
      const webUrl = "api/data/v9.2/mb_HelloWorldCustomApiExample";
      const params = {} as any;
      params.InputText = input;
      /*
      Keep this in for reference as always forget this syntax
      params.Record = {};
      ((params.Record["@odata.type"] = "Microsoft.Dynamics.CRM." + (<any>context).page.entityTypeName),
        (params.Record[(<any>context).page.entityTypeName + "id"] = (<any>context).page.entityId));
      */

      const req = new XMLHttpRequest();
      req.open("POST", webUrl, true);
      req.setRequestHeader("Accept", "application/json");
      req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      req.setRequestHeader("OData-MaxVersion", "4.0");
      req.setRequestHeader("OData-Version", "4.0");
      req.onreadystatechange = () => {
        if (req.readyState == 4) {
          req.onreadystatechange = null;

          if (req.status == 200) {
            const resp = JSON.parse(req.response);
            resolve(resp.JsonResponse);
          } else {
            const error = JSON.parse(req.response).error;
            console.log(error.message);
            reject(error.message);
          }
        }
      };
      req.send(JSON.stringify(params));
    });
  }
}
