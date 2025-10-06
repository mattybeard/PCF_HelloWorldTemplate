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

  return (
    <>
      <TextField
        label="Bound Field Editor"
        value={input}
        onChange={(e, newValue) => {
          setInput(newValue || "");
          vm.set("boundValue", newValue || "");
          vm.refresh();
        }}
      />
    </>
  );
});
