import React = require("react");
import { Stack, Text } from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { ServiceProvider, ServiceProviderContext } from "../Models/ServiceProvider";
import { ViewModel } from "../Models/ViewModel";
import { FieldControl } from "./FieldControl";
import { BoundButtonControl } from "./BoundButtonControl";
import { ListControl } from "./ListControl";

export interface StartingTemplateControlMainProps {
  serviceProvider: ServiceProvider;
}

export const StartingTemplateControlMain = observer((props: StartingTemplateControlMainProps): React.JSX.Element => {
  const vm = props.serviceProvider.get<ViewModel>("vm");

  return (
    <>
      <ServiceProviderContext.Provider value={props.serviceProvider}>
        <Stack horizontal={false} verticalAlign={"center"} style={{ width: "100%" }}>
          <Stack.Item>
            <Text variant={"xLarge"} block style={{ textAlign: "center" }}>
              Welcome to PCF Hello World
            </Text>
          </Stack.Item>
          <Stack.Item>
            <FieldControl />
          </Stack.Item>
          <Stack.Item>
            <BoundButtonControl />
          </Stack.Item>
          {vm.loading && (
            <Stack.Item>
              <Text variant={"medium"} block style={{ textAlign: "center" }}>
                Loading accounts...
              </Text>
            </Stack.Item>
          )}
          {vm.displayValues.length > 0 && (
            <Stack.Item>
              <Text variant={"medium"} block style={{ textAlign: "center", marginTop: "20px", fontWeight: "bold" }}>
                Loaded Accounts:
              </Text>
              <ListControl />
            </Stack.Item>
          )}
        </Stack>
      </ServiceProviderContext.Provider>
    </>
  );
});
