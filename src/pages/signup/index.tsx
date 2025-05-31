import { Flex, Text, Input, PasswordInput, Button } from "@mantine/core";
import { useNavigate } from "react-router";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <>
      <Flex bg={"#122117"} h={"100vh"} align={"center"} direction={"column"}>
        <Flex direction={"column"} mt={"sm"}>
          <Text c="white" fz={"sm"} ta={"center"} fw={"bolder"}>
            Expense Tracker
          </Text>
        </Flex>

        <Flex
          mt={"lg"}
          direction={"column"}
          gap={"sm"}
          w={"100%"}
          h={"100%"}
          align={"center"}
          justify={""}
        >
          <Text c="white" fz={"h3"} ta={"center"} fw={"bolder"}>
            Create Your Account
          </Text>
          <Input
            size="md"
            placeholder="Enter Your Full Name"
            variant="unstyled"
            style={{
              borderRadius: "10px",
            }}
            w={"95%"}
            bg={"#264533"}
            p={"sm"}
          />
          <Input
            size="md"
            placeholder="Enter Your email"
            variant="unstyled"
            style={{
              borderRadius: "10px",
            }}
            w={"95%"}
            bg={"#264533"}
            p={"sm"}
          />
          <PasswordInput
            size="md"
            variant="unstyled"
            style={{
              borderRadius: "10px",
            }}
            w={"95%"}
            bg={"#264533"}
            p={"sm"}
            placeholder="Enter Your password"
          />
          <PasswordInput
            size="md"
            variant="unstyled"
            style={{
              borderRadius: "10px",
            }}
            w={"95%"}
            bg={"#264533"}
            p={"sm"}
            placeholder="Confirm Your password"
          />
          <Button w={"95%"} size="lg">
            <Text c={"#122117"} fw={"bold"}>
              Sign Up
            </Text>
          </Button>
          <Text color="grey">
            Already have an account{" "}
            <Text
              c={"#38e07b"}
              fw={"bold"}
              span
              onClick={() => {
                navigate("/Login");
              }}
            >
              Login
            </Text>
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
