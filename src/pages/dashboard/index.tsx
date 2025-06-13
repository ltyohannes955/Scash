import { Flex, Text } from "@mantine/core";
import { RootShell } from "../../components/layout/shell/root";
import { Cards } from "./card";
import { AddButton } from "./addButton";
import { Transaction } from "../../components/transaction";

export default function Dashboard() {
  return (
    <>
      <RootShell Title="Dashboard">
        <Text size="md" c={"white"} fw={"bold"}>
          Account
        </Text>
        <Flex bg={"#122117"} align={"center"} direction={"column"} gap={"md"}>
          {/* this is the cards that shows total and also will be changed to sliding card that separets bank accounts */}
          <Cards />
          {/* this is the floting button */}
          <Transaction Title="Recent Transactions" slice={true} />
          <AddButton />
        </Flex>
      </RootShell>
    </>
  );
}
