import type { Metadata } from "next";
import localFont from "next/font/local";
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import "./globals.css";
import ClientSideColorSchemeScript from "./CoorSchemeScript";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Khalid",
  description: "Portfolio Website",
};
const theme = createTheme({

  /** Put your mantine theme override here */
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ClientSideColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
