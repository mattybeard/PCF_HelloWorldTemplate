import * as React from "react";
import { Stack, Text, TextField } from "@fluentui/react";

export interface FieldControlProps {}

export const FieldControl = (props: FieldControlProps): React.JSX.Element => {
  const [inputValue, setInputValue] = React.useState<string>("");

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
            value={inputValue}
            onChange={(event, newValue) => setInputValue(newValue || "")}
            placeholder="Enter text here"
            styles={{ root: { width: "100%" } }}
          />
        </Stack.Item>
        <Stack.Item>
          <Text variant={"medium"} block style={{ textAlign: "center", marginTop: "10px" }}>
            Current value: {inputValue}
          </Text>
        </Stack.Item>
      </Stack>
    </>
  );
};
