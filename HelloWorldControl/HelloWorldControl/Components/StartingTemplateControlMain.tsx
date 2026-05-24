import React = require("react");
import { Stack, Text } from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { ServiceProvider, ServiceProviderContext } from "../Models/ServiceProvider";
import { ViewModel } from "../Models/ViewModel";
import { ListControl } from "./ListControl";
import { FieldControl } from "./FieldControl";
import { ButtonCustomApiControl } from "./ButtonCustomApiControl";
import { BoundButtonControl } from "./BoundButtonControl";
import { ContactsListControl } from "./ContactsListControl";

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
              Welcome to {vm.title}
            </Text>
          </Stack.Item>
          <Stack.Item>
            <FieldControl />
          </Stack.Item>
          <Stack.Item>
            <ListControl />
          </Stack.Item>
          <Stack.Item>
            <ContactsListControl />
          </Stack.Item>
          <Stack.Item>
            <BoundButtonControl />
            <br />
          </Stack.Item>
          {/* <Stack.Item>
            <ButtonCustomApiControl apiName="HelloWorld" />
          </Stack.Item> */}
        </Stack>
      </ServiceProviderContext.Provider>
    </>
  );
});
