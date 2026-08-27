import * as React from "react";
import { Stack, Text, TextField } from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { ServiceProviderContext } from "../Models/ServiceProvider";
import { ViewModel } from "../Models/ViewModel";

export interface FieldControlProps {}

export const FieldControl = observer((props: FieldControlProps): React.JSX.Element => {
  const serviceProvider = React.useContext(ServiceProviderContext);
  const vm = serviceProvider.get<ViewModel>("vm");

  const [input, setInput] = React.useState(vm.inputValue);
  const debounceTimer = React.useRef<number | undefined>(undefined);

  return (
    <>
      <Stack horizontal={false} verticalAlign={"center"} style={{ width: "100%", padding: "10px" }}>
        <Stack.Item>
          <Text variant={"medium"} block>
            Input Static Value:
          </Text>
        </Stack.Item>
        <Stack.Item>
          <TextField
            value={input}
            onChange={(e, newValue) => {
              const val = newValue ?? "";
              setInput(val);

              window.clearTimeout(debounceTimer.current);
              debounceTimer.current = window.setTimeout(() => {
                vm.set("inputValue", val);
                vm.refresh?.();
              }, 300);
            }}
            onBlur={() => {
              window.clearTimeout(debounceTimer.current);
              vm.set("inputValue", input);
              vm.refresh?.();
            }}
            placeholder="Enter text"
            styles={{ root: { width: "100%" } }}
          />
        </Stack.Item>
        <Stack.Item>
          <Text variant={"medium"} block style={{ textAlign: "center", marginTop: "10px" }}>
            Current input: {vm.inputValue}
          </Text>
        </Stack.Item>
      </Stack>
    </>
  );
});
