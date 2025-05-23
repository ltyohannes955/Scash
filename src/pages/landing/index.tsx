import { Flex, Text, Image, Button } from "@mantine/core";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <Flex
      bg={"black"}
      h={"100vh"}
      justify={"space-evenly"}
      align={"center"}
      direction={"column"}
    >
      <Flex direction={"column"} align={"center"}>
        <Image src={"/landing.svg"} alt="landing Image" h={"500"} w={"400"} />
        <Flex direction={"column"}>
          <Text c="white" fz={"h1"} ta={"center"} fw={"bolder"}>
            Manage your finances easily
          </Text>
          <Text c={"white"} ta={"center"} size="sm" fw={"lighter"}>
            The best application to manage all your financial <br />{" "}
            transactions and be able to save <br /> up your money{" "}
          </Text>
        </Flex>
      </Flex>
      <Button
        radius={"xl"}
        justify="space-between"
        size="lg"
        w={"85%"}
        rightSection={<ArrowRight size={24} />}
        onClick={() => {navigate("/login")}}
      >
        Start
      </Button>
    </Flex>
  );
}
