import React = require("react");
import { Stack, Text } from "@fluentui/react";
import { FieldControl } from "./FieldControl";

export const StartingTemplateControlMain = (): React.JSX.Element => {
  return (
    <>
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
    </>
  );
};
