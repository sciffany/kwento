import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { NextAuthProvider } from "../components/Providers";

export const metadata = {
  title: "Kwento",
  description: "Read and write stories in your language",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <body>
        <NextAuthProvider>
          <MantineProvider>{children}</MantineProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
