import {
  ActionIcon,
  AppShell,
  Box,
  Card,
  Center,
  Container,
  Flex,
  SimpleGrid,
  Text,
} from "@mantine/core";
import {
  Plus,
  LayoutDashboard,
  User2,
  Banknote,
  ArrowLeftRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function RootShell({
  children,
  noFoot,
  Title,
  noHeader,
}: {
  children: React.ReactNode;
  noFoot?: boolean;
  noHeader?: boolean;
  Title: string;
}) {
  const [activePath, setActivePath] = useState("/");
  const navigate = useNavigate();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);
  return (
    <AppShell
      header={{ height: noHeader ? 0 : 80 }}
      footer={{ height: 90 }}
      bg={"#122117"}
    >
      {!noHeader && (
        <AppShell.Header withBorder={false} bg={"#122117"}>
          <Container size="480" h="100%">
            <Flex align="center" h="100%" justify="space-between">
              <Text c={"white"} fw={"bold"}>
                {Title}
              </Text>
              <ActionIcon variant="transparent" size="lg">
                <Plus color="white" />
              </ActionIcon>
            </Flex>
          </Container>
        </AppShell.Header>
      )}
      <AppShell.Main>
        <Container bg="#122117" size="480">
          {children}
        </Container>
      </AppShell.Main>
      {!noFoot && (
        <AppShell.Footer style={{ border: 0 }} bg={"#264533"}>
          <Container mt="xs" size={480}>
            <Card
              p={7}
              py={7}
              radius="md"
              bg={"#264533"}
              style={{ border: "1px solid #264533" }}
            >
              <SimpleGrid spacing="xs" verticalSpacing="xs" cols={4}>
                {[
                  {
                    title: "Dashboard",
                    icon: LayoutDashboard,
                    path: "/dashboard",
                  },
                  {
                    title: "Transactions",
                    icon: ArrowLeftRight,
                    path: "/transactions",
                  },
                  {
                    title: "Budget",
                    icon: Banknote,
                    path: "/budget",
                  },
                  { title: "Profile", icon: User2, path: "/profile" },
                ].map((opt) => {
                  const isActive = activePath === opt.path;
                  return (
                    <Center key={opt.title}>
                      <Box
                        onClick={() => {
                          navigate(opt.path);
                        }}
                        style={{
                          height: 50,
                          width: 65,
                          borderRadius: 5,
                        }}
                      >
                        <Flex direction="column">
                          <Center h={38}>
                            <opt.icon
                              color={isActive ? "white" : "#96C4A8"}
                              size={20}
                            />
                          </Center>
                          <Text
                            ta="center"
                            c={isActive ? "white" : "#96C4A8"}
                            style={{ fontSize: 10 }}
                            mt={-6}
                          >
                            {opt.title}
                          </Text>
                        </Flex>
                      </Box>
                    </Center>
                  );
                })}
              </SimpleGrid>
            </Card>
          </Container>
        </AppShell.Footer>
      )}
    </AppShell>
  );
}
