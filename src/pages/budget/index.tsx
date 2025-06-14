import { Flex, Group, Slider, Text } from "@mantine/core";
import { RootShell } from "../../components/layout/shell/root";

export default function Budget() {
  const categories = [
    { name: "Food", value: 30 },
    { name: "Transportion", Vaule: 20 },
    { name: "Entertainment", value: 10 },
    { name: "Utility", value: 30 },
    { name: "others", value: 10 },
  ];
  return (
    <>
      <RootShell Title="Budget">
        <Flex direction={"column"} gap={"md"}>
          <Text c={"white"}>Spendings By categories</Text>

          <Flex direction={"column"}>
            <Text c={"grey"} size="sm">
              Category Breakdown
            </Text>
            <Flex direction={"column"} mt={"md"} gap={"md"}>
              {categories.map((categories, index) => (
                <>
                  <Group grow key={index} w={"100%"} justify={"space-between"}>
                    <Text c={"#264533"}>{categories.name}</Text>
                    <Slider
                      color="green"
                      defaultValue={categories.value}
                      // disabled
                    />
                  </Group>
                </>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </RootShell>
    </>
  );
}
