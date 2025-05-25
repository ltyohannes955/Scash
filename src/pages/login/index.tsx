import { Flex, Text, Input, PasswordInput, Button } from "@mantine/core";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Flex bg={"#122117"} h={"100vh"} align={"center"} direction={"column"}>
        <Flex direction={"column"} mt={"sm"}>
          <Text c="white" fz={"sm"} ta={"center"} fw={"bolder"}>
            Login
          </Text>
        </Flex>

        <Flex
          mt={"lg"}
          direction={"column"}
          gap={"sm"}
          w={"100%"}
          h={"35%"}
          align={"center"}
          justify={"space-between"}
        >
          <Text c="white" fz={"h3"} ta={"center"} fw={"bolder"}>
            Welcome back
          </Text>
          <Input
            size="md"
            placeholder="Enter Your email"
            variant="unstyled"
            w={"95%"}
            bg={"#264533"}
            p={"sm"}
          />
          <PasswordInput
            size="md"
            variant="unstyled"
            w={"95%"}
            bg={"#264533"}
            p={"sm"}
            placeholder="Enter Your password"
          />
          <Text color="#38e07b" ta={"left"} w={"95%"}>
            Forgot Password?
          </Text>
          <Button w={"95%"} size="lg">
            Log In
          </Button>
          <Text color="white" fw={"bold"}>
            New User{" "}
            <Text
              c={"#38e07b"}
              fw={"bold"}
              span
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </Text>
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
