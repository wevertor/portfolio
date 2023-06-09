import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["300", "600",], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={poppins.className} lang="ptBR">
      <body>{children}</body>
    </html>
  );
}
