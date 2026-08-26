/* eslint-disable @typescript-eslint/no-explicit-any */
import { IInputs } from "../generated/ManifestTypes";

export interface AccountSummary {
  name?: string;
}

export interface ContactSummary {
  firstname?: string;
  lastname?: string;
}

export class DataverseService {
  webApi: ComponentFramework.WebApi;
  context: ComponentFramework.Context<IInputs>;

  constructor(webApi: ComponentFramework.WebApi, context: ComponentFramework.Context<IInputs>) {
    this.webApi = webApi;
    this.context = context;
  }

  loadData(): Promise<AccountSummary[]> {
    return this.webApi
      .retrieveMultipleRecords("account", "?$select=name&$top=5")
      .then((response) => (response?.entities ?? []) as AccountSummary[]);
  }

  loadContacts(): Promise<ContactSummary[]> {
    return this.webApi
      .retrieveMultipleRecords("contact", "?$select=firstname,lastname&$top=10")
      .then((response) => (response?.entities ?? []) as ContactSummary[]);
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
            reject(error.message);
          }
        }
      };
      req.send(JSON.stringify(params));
    });
  }
}
