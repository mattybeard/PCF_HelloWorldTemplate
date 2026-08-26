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
  const debounceTimer = React.useRef<number | undefined>(undefined);

  return (
    <>
      <TextField
        label="Bound Field Editor"
        value={input}
        onChange={(e, newValue) => {
          const val = newValue ?? "";
          setInput(val);

          window.clearTimeout(debounceTimer.current);
          debounceTimer.current = window.setTimeout(() => {
            vm.set("boundValue", val);
            vm.refresh();
          }, 300);
        }}
        onBlur={() => {
          window.clearTimeout(debounceTimer.current);
          vm.set("boundValue", input);
          vm.refresh();
        }}
      />
    </>
  );
});
