"use client";

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Flex, Group } from "@mantine/core";
import { IconEdit, IconBook, IconLogout } from "@tabler/icons-react";
import classes from "./NavbarSimple.module.css";
import { SessionProvider } from "next-auth/react";
import SigninButton from "../../components/SigninButton";

export default function BasicAppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();

  const data = [
    { link: "", label: "Write Short Story", icon: IconEdit },
    { link: "", label: "My Stories", icon: IconBook },
    { link: "", label: "Logout", icon: IconLogout },
  ];

  const links = data.map((item) => (
    <a
      className={classes.link}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      <Flex columnGap={10}>
        <item.icon stroke={1.5} />
        <span>{item.label}</span>
      </Flex>
    </a>
  ));

  return (
    <SessionProvider>
      <AppShell
        header={{ height: 80 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Flex
              direction="row"
              w="100%"
              align="center"
              justify="space-between"
            >
              <img src="/logo.png" alt="logo" height={80} width={480} />
              <SigninButton />
            </Flex>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md" color="grey">
          {links}
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </SessionProvider>
  );
}
