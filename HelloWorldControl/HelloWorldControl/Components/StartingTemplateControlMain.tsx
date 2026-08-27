import React = require("react");
import { Stack, Text } from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { ServiceProvider, ServiceProviderContext } from "../Models/ServiceProvider";
import { FieldControl } from "./FieldControl";

export interface StartingTemplateControlMainProps {
  serviceProvider: ServiceProvider;
}

export const StartingTemplateControlMain = observer((props: StartingTemplateControlMainProps): React.JSX.Element => {
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
        </Stack>
      </ServiceProviderContext.Provider>
    </>
  );
});
