import { AppShell, Burger, Drawer, Flex, Group } from "@mantine/core";
import SigninButton from "./SigninButton";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CommonHeader() {
  const router = useRouter();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <AppShell.Header px={0} py={10}>
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
              router.push("/admin/stories");
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
            router.push("/admin/stories/new");
          }}
        >
          Write Story
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/admin/stories");
          }}
        >
          My Stories
        </div>
        <SigninButton />
      </Drawer>
    </AppShell.Header>
  );
}
