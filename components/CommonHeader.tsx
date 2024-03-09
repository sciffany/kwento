import { AppShell, Burger, Drawer, Flex, Group } from "@mantine/core";
import SigninButton from "./SigninButton";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

export default function CommonHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <AppShell.Header px={10} py={10}>
      <Flex justify='space-between'>
        <Link href='/stories'>
          <img
            src='/logo.png'
            width={300}
            height={50}
            alt='Logo'
            style={{ cursor: "pointer" }}
          />
        </Link>
        <Group visibleFrom='sm'>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.location.href = "/admin/stories";
            }}
          >
            My Stories
          </div>
          <SigninButton></SigninButton>
        </Group>
        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom='sm' />
      </Flex>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size='100%'
        padding='md'
        hiddenFrom='sm'
        title={<b>Menu</b>}
        zIndex={1000000}
      >
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.location.href = "/admin/stories";
          }}
        >
          My Stories
        </div>
        <SigninButton />
      </Drawer>
    </AppShell.Header>
  );
}
