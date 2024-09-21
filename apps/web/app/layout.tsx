import "./globals.css";

import { Nunito } from "next/font/google";
import { AppNavigation, Header } from "@components";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.className}>
      <body>
        <div id="root" className="h-screen w-screen flex flex-col">
          <Header />
          <div
            id="content"
            className="flex flex-1 w-full flex-col sm:flex-row box-border flex-nowrap overflow-hidden"
          >
            <AppNavigation />
            <main className="flex-1 flex flex-col items-center overflow-y-scroll">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
