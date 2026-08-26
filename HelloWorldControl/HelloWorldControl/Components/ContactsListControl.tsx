import React = require("react");
import { Text, Stack } from "@fluentui/react";
import { observer } from "mobx-react-lite";
import { ServiceProviderContext } from "../Models/ServiceProvider";
import { ViewModel } from "../Models/ViewModel";
import { DataverseService } from "../Models/DataverseService";

export interface ContactsListControlProps {}

export const ContactsListControl = observer((props: ContactsListControlProps): React.JSX.Element => {
  const serviceProvider = React.useContext(ServiceProviderContext);
  const vm = serviceProvider.get<ViewModel>("vm");
  const dv = serviceProvider.get<DataverseService>("dv");

  React.useEffect(() => {
    if (vm.contactsList === null) {
      dv.loadContacts()
        .then((contacts) => {
          const concatenatedContacts = contacts
            .map((contact) => `${contact.firstname || ""} ${contact.lastname || ""}`.trim())
            .join(", ");
          vm.set("contactsList", concatenatedContacts);
        })
        .catch((error) => {
          console.error("Error loading contacts:", error);
          vm.set("contactsList", "Error loading contacts");
        });
    }
  }, [vm.contactsList, dv, vm]);

  return (
    <Stack horizontal={false} verticalAlign={"center"} style={{ width: "100%" }}>
      <Stack.Item>
        <Text variant={"mediumPlus"} block style={{ textAlign: "center", fontWeight: "bold" }}>
          Contacts
        </Text>
      </Stack.Item>
      <Stack.Item>
        <Text variant={"medium"} block style={{ textAlign: "center" }}>
          {vm.contactsList !== null ? vm.contactsList : "Loading contacts..."}
        </Text>
      </Stack.Item>
    </Stack>
  );
});
