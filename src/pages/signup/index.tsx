import {
  Flex,
  Text,
  Image,
  Input,
  PasswordInput,
  ActionIcon,
  Button,
} from "@mantine/core";
export default function Signup() {
  return (
    <>
      <Flex
        bg={"#264533"}
        h={"100vh"}
        justify={"space-evenly"}
        align={"center"}
        direction={"column"}
      >
        <Flex direction={"column"}>
          <Image
            src={"/password.svg"}
            alt="landing Image"
            h={"500"}
            w={"400"}
          />
          <Text c="white" fz={"h1"} ta={"center"} fw={"bolder"}>
            Sign up
          </Text>
        </Flex>
        <Flex direction={"column"} w={"100%"} align={"center"}>
          <Input placeholder="Enter Your email" w={"65%"} />
          <PasswordInput
            w={"65%"}
            label="Password"
            placeholder="Enter Your password"
          />
          <PasswordInput
            w={"65%"}
            label="Password"
            placeholder="Enter Your password"
          />
          <Flex gap={"lg"} mt={"lg"}>
            <ActionIcon variant="subtle" aria-label="Settings">
              <Image
                src={"/google.svg"}
                alt="landing Image"
                h={"30"}
                w={"30"}
              />
            </ActionIcon>
          </Flex>
        </Flex>
        <Button w={"85%"}>Sign up</Button>
      </Flex>
    </>
  );
}
