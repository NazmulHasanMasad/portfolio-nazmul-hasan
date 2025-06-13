import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/navigations/Header";
import Footer from "./components/navigations/Footer";
import { ThemeProvider } from "next-themes";
import ChatIcon from "./components/display/ChatIcon";

export const metadata: Metadata = {
  title: "Nazmul Hasan",
  description: "Portfolio website of Nazmul Hasan",
  icons: {
    icon: "/images/icon.png",
  },
  keywords: ["Nazmul Hasan", "Portfolio", "Nazmul Hasan Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f6fefe] dark:bg-black">
        <ThemeProvider defaultTheme="dark" attribute="class">
          <div>
            <div className="fixed top-0 left-0 right-0 z-10">
              <Header />
            </div>
            <div className="px-6 md:px-10 mt-20 md:mt-24 pb-6 min-h-screen">
              {children}
            </div>
            <ChatIcon />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
