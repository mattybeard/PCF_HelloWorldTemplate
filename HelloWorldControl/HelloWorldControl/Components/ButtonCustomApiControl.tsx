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
            onClick={() => {
              vm.set("loading", true);
              dv.callUnboundCustomApi(input).then((response) => {
                vm.setCustomApiResponse(response);
              }).finally(() => {
                vm.set("loading", false);
              });
            }}
          >
            Call Custom API
          </PrimaryButton>
          {vm.apiResponse && vm.apiResponse.length > 0 && <Text>Last Response was: {vm.apiResponse}</Text>}
        </>
      )}
    </>
  );
});
