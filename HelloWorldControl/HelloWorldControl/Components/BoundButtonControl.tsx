import * as React from "react";
import { TextField } from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { ServiceProviderContext } from "../Models/ServiceProvider";
import { ViewModel } from "../Models/ViewModel";

export interface BoundButtonControlProps {}

export const BoundButtonControl = observer((props: BoundButtonControlProps): React.JSX.Element => {
  const serviceProvider = React.useContext(ServiceProviderContext);
  const vm = serviceProvider.get<ViewModel>("vm");
  const [input, setInput] = React.useState<string>(vm.boundValue);
  let debounceTimer: number | undefined;

  return (
    <>
      <TextField
        label="Bound Field Editor"
        value={input}
        onChange={(e, newValue) => {
          const val = newValue ?? "";
          setInput(val);

          clearTimeout(debounceTimer);
          debounceTimer = window.setTimeout(() => {
            vm.set("boundValue", val);
            vm.refresh();
          }, 300);
        }}
        onBlur={() => {
          clearTimeout(debounceTimer);
          vm.set("boundValue", input);
          vm.refresh();
        }}
      />
    </>
  );
});
