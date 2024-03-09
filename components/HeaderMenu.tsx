import { AppShell } from "@mantine/core";
import CommonHeader from "./CommonHeader";

export default function HeaderMegaMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell padding='md'>
      <CommonHeader />
      <AppShell.Main p={100}>{children}</AppShell.Main>
    </AppShell>
  );
}
