import { Flex } from "@mantine/core";
import { RootShell } from "../../components/layout/shell/root";
import { Transaction } from "../../components/transaction";
import Status from "./status";

export default function Transactions() {
  return (
    <>
      <RootShell Title="Transactions">
        <Flex direction={"column"} gap={"sm"}>
          <Status />
          <Transaction Title="All Tranactions" slice={false} />
        </Flex>
      </RootShell>
    </>
  );
}
