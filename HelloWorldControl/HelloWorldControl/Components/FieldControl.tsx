import * as React from "react";
import { Stack, Text, TextField } from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { ServiceProviderContext } from "../Models/ServiceProvider";
import { ViewModel } from "../Models/ViewModel";

export interface FieldControlProps {}

export const FieldControl = observer((props: FieldControlProps): React.JSX.Element => {
  const serviceProvider = React.useContext(ServiceProviderContext);
  const vm = serviceProvider.get<ViewModel>("vm");

  return (
    <>
      <Stack horizontal={false} verticalAlign={"center"} style={{ width: "100%", padding: "10px" }}>
        <Stack.Item>
          <Text variant={"medium"} block>
            Input Field:
          </Text>
        </Stack.Item>
        <Stack.Item>
          <TextField
            value={vm.inputValue}
            onChange={(event, newValue) => vm.set("inputValue", newValue || "")}
            placeholder="Enter text here"
            styles={{ root: { width: "100%" } }}
          />
        </Stack.Item>
        <Stack.Item>
          <Text variant={"medium"} block style={{ textAlign: "center", marginTop: "10px" }}>
            Current value: {vm.inputValue}
          </Text>
        </Stack.Item>
      </Stack>
    </>
  );
});
