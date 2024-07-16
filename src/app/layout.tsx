import { Inter } from "next/font/google";
import "./globals.css";
import ContainerProvider from "@/components/organism/Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContainerProvider>{children}</ContainerProvider>
      </body>
    </html>
  );
}
