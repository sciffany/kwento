import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div
        onClick={() => {
          signOut();
        }}
      >
        Sign Out Button
      </div>
    );
  }
  return <div onClick={() => signIn()}>Sign In Button</div>;
};

export default SigninButton;
