"use client";

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Flex, Group } from "@mantine/core";
import { IconEdit, IconBook, IconLogout } from "@tabler/icons-react";
import classes from "./NavbarSimple.module.css";
import SigninButton from "../../components/SigninButton";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CommonHeader from "../../components/CommonHeader";

export default function BasicAppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.push("/api/auth/signin");
  }

  const [opened, { toggle }] = useDisclosure();

  const data = [
    { link: "/admin/stories/new", label: "Write Story", icon: IconEdit },
    { link: "/admin/stories", label: "My Stories", icon: IconBook },
  ];

  const links = data.map((item) => (
    <a className={classes.link} href={item.link} key={item.label}>
      <Flex
        columnGap={10}
        style={{
          cursor: "pointer",
        }}
      >
        <item.icon stroke={1.5} />
        <span>{item.label}</span>
      </Flex>
    </a>
  ));

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding='md'
    >
      <CommonHeader />
      <AppShell.Navbar p='md' color='grey'>
        {links}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
