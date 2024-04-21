import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Talarys Portfolio",
	description: "This is my portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-bg overflow-y-scroll overflow-x-hidden`}
			>
				<StarCanvas />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
