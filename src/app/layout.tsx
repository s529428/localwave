import Navigation from "./components/Navigation";
import NavItem from "./classes/NavItem";
import type { Metadata } from "next";
import { Antonio, Oi, Taviraj } from "next/font/google";
import "./globals.css";

const antonio = Antonio({ subsets: ["latin"] });
const taviraj = Taviraj({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Local Wave - KKFI 90.1",
  description:
    "A radio show for Kansas City locals to learn more about the local music scene.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    new NavItem("Archive", "/archive"),
    new NavItem("Playlists", "/playlists"),
    new NavItem("Hosts", "/hosts"),
    new NavItem("Contact", "/contact"),
  ];

  return (
    <html lang="en">
      <body className={taviraj.className}>
        <header>
          <Navigation navItems={navItems} />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
