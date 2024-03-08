import { AppShell, Burger, Flex, Group } from "@mantine/core";
import SigninButton from "./SigninButton";
import Link from "next/link";

export default function GenericHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell header={{ height: 80 }} padding='md'>
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Flex direction='row' w='100%' align='center' justify='space-between'>
            <Link href='/stories'>
              <img
                style={{ cursor: "pointer" }}
                src='/logo.png'
                alt='logo'
                height={80}
                width={480}
              />
            </Link>
            <SigninButton />
          </Flex>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
