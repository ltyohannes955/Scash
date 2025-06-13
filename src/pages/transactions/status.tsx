import { Card, Flex, Text, Group } from "@mantine/core";

export default function Status() {
  return (
    <>
      <Text c={"white"} fw={"bold"}>
        This Month
      </Text>
      <Group grow>
        <Card bg={"#264533"} padding={"lg"} radius="md" w={"100%"}>
          <Flex direction={"column"} gap={"md"}>
            <Text c={"white"}>Income</Text>
            <Text c={"white"} fw={"bold"}>
              1,200.00
            </Text>
            <Text c={"Green"}>+5%</Text>
          </Flex>
        </Card>
        <Card bg={"#264533"} padding={"lg"} radius="md" w={"100%"}>
          <Flex direction={"column"} gap={"md"}>
            <Text c={"white"}>Expenses</Text>
            <Text c={"white"} fw={"bold"}>
              1,200.00
            </Text>
            <Text c={"Red"}>-15%</Text>
          </Flex>
        </Card>
      </Group>
    </>
  );
}
