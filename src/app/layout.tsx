import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({
  subsets: ["latin"],
  display: 'auto',
  variable: '--font-jakarta'
}) 

export const metadata: Metadata = {
  title: "Next JS Application Starter Pack",
  description: "This application enables a starting configuration of Next JS using radix, ShadCN and Tanstack Query",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster expand={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
