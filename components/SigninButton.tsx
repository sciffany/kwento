import { Group } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <Group>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </div>
      </Group>
    );
  }
  return (
    <div style={{ cursor: "pointer" }} onClick={() => signIn()}>
      Sign In
    </div>
  );
};

export default SigninButton;
