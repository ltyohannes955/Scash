import {
  Flex,
  Text,
  Image,
  Input,
  PasswordInput,
  ActionIcon,
} from "@mantine/core";
import { Airplay, AtSign } from "lucide-react";

export default function Login() {
  return (
    <>
      <Flex
        bg={"black"}
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
            Login
          </Text>
        </Flex>
        <Flex direction={"column"} w={"100%"} align={"center"}>
          <Input placeholder="Your email" w={"65%"} />
          <PasswordInput
            w={"65%"}
            label="Password"
            placeholder="Your password"
          />
          <Flex>
            <ActionIcon variant="subtle" aria-label="Settings">
              <Airplay />
            </ActionIcon>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
