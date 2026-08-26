import * as React from "react";
import { PrimaryButton, Spinner, Text, TextField } from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { ServiceProviderContext } from "../Models/ServiceProvider";
import { ViewModel } from "../Models/ViewModel";
import { DataverseService } from "../Models/DataverseService";

export interface ButtonCustomApiControlProps {
  apiName: string;
}

export const ButtonCustomApiControl = observer((props: ButtonCustomApiControlProps): React.JSX.Element => {
  const serviceProvider = React.useContext(ServiceProviderContext);
  const vm = serviceProvider.get<ViewModel>("vm");
  const dv = serviceProvider.get<DataverseService>("dv");
  const [input, setInput] = React.useState<string>("");

  return (
    <>
      {vm.loading && <Spinner label="Loading..." ariaLive="assertive" labelPosition="top" />}
      {!vm.loading && (
        <>
          <TextField label="Value For PCF" value={input} onChange={(e, newValue) => setInput(newValue || "")} />
          <PrimaryButton
            styles={{ root: { marginTop: 8 } }}
            onClick={() => {
              vm.set("loading", true);
              dv.callUnboundCustomApi(input)
                .then((response) => {
                  vm.setCustomApiResponse(response);
                })
                .catch((error) => {
                  console.error("Error calling custom API:", error);
                  vm.set("apiResponse", "");
                  vm.set("apiGuids", []);
                  vm.set(
                    "apiError",
                    `Error calling Custom API: ${error instanceof Error ? error.message : String(error)}`,
                  );
                })
                .finally(() => {
                  vm.set("loading", false);
                });
            }}
          >
            Call Custom API
          </PrimaryButton>
          {vm.apiResponse && vm.apiResponse.length > 0 && <Text>Last Response was: {vm.apiResponse}</Text>}
          {vm.apiError && <Text style={{ color: "#a4262c" }}>{vm.apiError}</Text>}
        </>
      )}
    </>
  );
});
