import { Flex, Text } from "@mantine/core";
import { RootShell } from "../../components/layout/shell/root";
import { Cards } from "./card";
import { AddButton } from "./addButton";

export default function Dashboard() {
  return (
    <>
      <RootShell Title="Dashboard">
        <Text size="md" c={"white"} fw={"bold"}>
          Account
        </Text>
        <Flex bg={"#122117"} h={"80vh"} align={"center"} direction={"column"}>
          <Cards />
          <AddButton />
        </Flex>
      </RootShell>
    </>
  );
}
