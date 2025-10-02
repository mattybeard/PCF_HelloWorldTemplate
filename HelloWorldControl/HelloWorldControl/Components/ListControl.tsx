import React = require("react");
import { Text } from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { ServiceProviderContext } from "../Models/ServiceProvider";
import { ViewModel } from "../Models/ViewModel";

export interface ListControlProps {}

export const ListControl = observer((props: ListControlProps): React.JSX.Element => {
  const serviceProvider = React.useContext(ServiceProviderContext);
  const vm = serviceProvider.get<ViewModel>("vm");

  return (
    <>
      {vm.displayValues.length > 0 && (
        <>
          {vm.displayValues.map((displayVal, index) => {
            return (
              <Text variant={"medium"} block style={{ textAlign: "center" }} key={index}>
                {displayVal}
              </Text>
            );
          })}
        </>
      )}
    </>
  );
});
