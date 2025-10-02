import * as React from "react";
import { Text } from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { ServiceProviderContext } from "../Models/ServiceProvider";
import { ViewModel } from "../Models/ViewModel";

export interface FieldControlProps {}

export const FieldControl = observer((props: FieldControlProps): React.JSX.Element => {
  const serviceProvider = React.useContext(ServiceProviderContext);
  const vm = serviceProvider.get<ViewModel>("vm");

  return (
    <>
      <Text variant={"medium"} block style={{ textAlign: "center" }}>
        Bound: {vm.boundValue}
      </Text>
      <Text variant={"medium"} block style={{ textAlign: "center" }}>
        Input: {vm.inputValue}
      </Text>
    </>
  );
});
