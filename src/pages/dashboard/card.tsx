import { Flex, Text } from "@mantine/core";
import { ArrowLeftRight, CreditCard, Eye } from "lucide-react";

export function Cards() {
  return (
    <>
      <Flex
        bg={"#264533"}
        h={"25%"}
        w={"97%"}
        mt={"lg"}
        style={{ borderRadius: "10px" }}
        p={"sm"}
        direction={"column"}
        justify={"space-between"}
      >
        <Flex align={"center"} justify={"space-between"} w={"100%"}>
          <Flex direction={"column"}>
            <Text size="xl" c={"white"} fw={"bold"}>
              Expense Tracker
            </Text>
            <Text size="sm" c={"white"} fw={"lighter"}>
              Leul Yohannes Lakew
            </Text>
          </Flex>
          <Eye size={"28"} color="white" />
        </Flex>
        <Flex gap={"sm"} align={"center"}>
          <CreditCard size={"26"} color="white" />
          <Text size="xl" c={"white"} fw={"bold"}>
            $ 2,300
          </Text>
        </Flex>
        <Flex justify={"space-between"} align={"center"}>
          <Text c={"white"} size="sm">
            This Month
          </Text>
          <Flex>
            <Flex gap={"xs"}>
              <ArrowLeftRight size={"28"} color="#E05A38" />
              <Text c={"#E05A38"} size="lg" ta={"center"}>
                300
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
