import type { Metadata } from "next";

import '../shared/styles/global.css'

export const metadata: Metadata = {
  title: "App site maneiro",
  description: "Clean Architecture com Next.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="h-screen w-screen">{children}</body>
    </html>
  );
}
