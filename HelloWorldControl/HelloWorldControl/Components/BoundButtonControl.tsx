import * as React from "react";
import { PrimaryButton } from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { ServiceProviderContext } from "../Models/ServiceProvider";
import { ViewModel } from "../Models/ViewModel";

export interface BoundButtonControlProps {}

export const BoundButtonControl = observer((props: BoundButtonControlProps): React.JSX.Element => {
  const serviceProvider = React.useContext(ServiceProviderContext);
  const vm = serviceProvider.get<ViewModel>("vm");

  const handleClick = () => {
    const timestamp = new Date().toLocaleTimeString();
    vm.set("inputValue", `Updated at ${timestamp}`);
    vm.refresh();
  };

  return (
    <>
      <PrimaryButton onClick={handleClick} text="Update Output Field" />
    </>
  );
});
