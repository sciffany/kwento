import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { NextAuthProvider } from "../components/Providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Lingosaurus",
  description: "Incremental and interactive way to learn a new language",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang='en'>
      <head>
        <Analytics></Analytics>
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
