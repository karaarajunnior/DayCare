import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const poppins = Poppins({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ["latin"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "DAMAKIDS Early Childhood Centre | Nurturing Great Beginnings",
	description:
		"Providing a safe, caring & stimulating environment for early childhood development. Offering daycare, after-care, and pre-primary/nursery school services.",
	keywords:
		"early childhood centre, daycare, nursery school, pre-primary, after-care, child development, DAMAKIDS",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ClientBody
				className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
				{children}
			</ClientBody>
		</html>
	);
}
