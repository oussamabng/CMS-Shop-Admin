import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Navbar from "@/client-components/navbar";
import Footer from "@/client-components/footer";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "E-commerce store",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    storeId: string;
  };
}) {
  return (
    <div className={font.className}>
      <Navbar params={params} />
      {children}
      <Footer />
    </div>
  );
}
