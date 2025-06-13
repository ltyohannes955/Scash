import { Flex } from "@mantine/core";
import { RootShell } from "../../components/layout/shell/root";
import { Transaction } from "../../components/transaction";

export default function Transactions() {
  return (
    <>
      <RootShell Title="Transactions">
        <Transaction Title="All Tranactions" slice={false} />
      </RootShell>
    </>
  );
}
