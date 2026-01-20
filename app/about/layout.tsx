import "../globals.css";
import { Caveat } from "next/font/google";

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={caveat.variable}>
        {children}
      </body>
    </html>
  );
}
