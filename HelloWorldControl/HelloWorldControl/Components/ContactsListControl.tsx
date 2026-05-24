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
  const dataverseService = serviceProvider.get<DataverseService>("dataverseService");

  React.useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const contacts = await dataverseService.loadContacts();
      // Concatenate contact names: First Name Last Name, First Name Last Name, ...
      const concatenatedContacts = contacts
        .map((contact) => `${contact.firstname || ""} ${contact.lastname || ""}`.trim())
        .join(", ");
      vm.contactsList = concatenatedContacts;
    } catch (error) {
      console.error("Error loading contacts:", error);
      vm.contactsList = "Error loading contacts";
    }
  };

  return (
    <Stack horizontal={false} verticalAlign={"center"} style={{ width: "100%" }}>
      <Stack.Item>
        <Text variant={"mediumPlus"} block style={{ textAlign: "center", fontWeight: "bold" }}>
          Contacts
        </Text>
      </Stack.Item>
      <Stack.Item>
        <Text variant={"medium"} block style={{ textAlign: "center" }}>
          {vm.contactsList || "Loading contacts..."}
        </Text>
      </Stack.Item>
    </Stack>
  );
});
