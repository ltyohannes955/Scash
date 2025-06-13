import { Card, Flex, Text } from "@mantine/core";
import {
  Fuel,
  ShoppingCart,
  Phone,
  Car,
  Gift,
  Home,
  Coffee,
  CreditCard,
  Clapperboard,
  UtensilsCrossed,
} from "lucide-react";

export function Transaction({
  Title,
  slice,
}: {
  Title: string;
  slice: boolean;
}) {
  const transactions = [
    {
      id: 1,
      data: "2025/04/06",
      type: "Gas",
      amount: "1200.00",
      transactionType: "debit",
    },
    {
      id: 2,
      data: "2025/04/08",
      type: "Salary",
      amount: "150.00",
      transactionType: "credit",
    },
    {
      id: 3,
      data: "2025/04/09",
      type: "Groceries",
      amount: "3200.50",
      transactionType: "debit",
    },
    {
      id: 4,
      data: "2025/04/10",
      type: "Transport",
      amount: "800.00",
      transactionType: "debit",
    },
    {
      id: 5,
      data: "2025/04/11",
      type: "Airtime",
      amount: "200.00",
      transactionType: "debit",
    },
    {
      id: 6,
      data: "2025/04/12",
      type: "Bonus",
      amount: "5000.00",
      transactionType: "credit",
    },
    {
      id: 7,
      data: "2025/04/14",
      type: "Dining Out",
      amount: "2500.75",
      transactionType: "debit",
    },
    {
      id: 8,
      data: "2025/04/16",
      type: "Electric Bill",
      amount: "1800.00",
      transactionType: "debit",
    },
    {
      id: 9,
      data: "2025/04/18",
      type: "Transfer from Savings",
      amount: "3000.00",
      transactionType: "credit",
    },
    {
      id: 10,
      data: "2025/04/20",
      type: "Movie",
      amount: "500.00",
      transactionType: "debit",
    },
  ];
  const iconMap = {
    Gas: <Fuel color="White" />,
    Groceries: <ShoppingCart color="White" />,
    Airtime: <Phone color="White" />,
    Transport: <Car color="White" />,
    Bonus: <Gift color="White" />,
    "Electric Bill": <Home color="White" />,
    "Dining Out": <UtensilsCrossed color="White" />,
    Coffee: <Coffee color="White" />,
    Salary: <CreditCard color="White" />,
    Movie: <Clapperboard color="white" />,
  };
  const slicedTransactions = slice ? transactions.slice(0, 5) : transactions;
  return (
    <>
      <Text c="white" fw={"bold"} w={"100%"}>
        {Title}
      </Text>
      {slicedTransactions.map((transactions, index) => (
        <>
          <Card
            key={index}
            padding={"xs"}
            radius="md"
            w={"100%"}
            bg={"#122117"}
          >
            <Flex w={"100%"} justify={"space-between"} align={"center"}>
              <Flex align={"center"} gap={"lg"}>
                <Card bg={"#264533"}>
                  {iconMap[transactions.type as keyof typeof iconMap] || (
                    <CreditCard color="White" />
                  )}
                </Card>
                <Flex direction={"column"} gap={"xs"}>
                  <Text fw={"bold"} c={"white"}>
                    {transactions.type}
                  </Text>
                  <Text span c={"grey"} size="sm">
                    {" "}
                    {transactions.data}
                  </Text>
                </Flex>
              </Flex>
              <Text
                c={transactions.transactionType == "debit" ? "red" : "green"}
                fw={"bold"}
              >
                {transactions.transactionType == "debit" ? "-" : "+"}
                {transactions.amount}
              </Text>
            </Flex>
          </Card>
        </>
      ))}
    </>
  );
}
