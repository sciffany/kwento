import { AppShell } from "@mantine/core";
import CommonHeader from "./CommonHeader";

export default function HeaderMegaMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell padding='sm'>
      <CommonHeader />
      <AppShell.Main px={20} p={100}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
