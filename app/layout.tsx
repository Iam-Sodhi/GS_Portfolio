import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/activeSection-context";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gautam Sodhi | Portfolio",
  description:
    "Gautam Sodhi is a programmer and web developer, currently pursuing B Tech in CSE from NIT, Jalandhar. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </head>

      <body className={`${inter.className} bg-gray-50  text-gray-950 relative  pt-28 sm:pt-36 `}>


 {/* <div className="absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-gradient-to-r from-[#F472B6] to-[#60A5FA] dark:from-[#B91C1C] dark:to-[#059669]"></div>
<div className="absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-gradient-to-r from-[#4ADE80] to-[#F97316] dark:from-[#93C5FD] dark:to-[#FBBF24]"></div>  */}

{/* <div className="absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-gradient-to-r from-blue-400 to-green-500 dark:from-blue-600 dark:to-green-600"></div>
<div className="absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-gradient-to-r from-red-400 to-yellow-500 dark:from-red-600 dark:to-yellow-600"></div> */}


<div className="absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-gradient-to-r from-blue-200 to-green-300 dark:from-blue-300 dark:to-green-400"></div>

<div className="absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-gradient-to-r from-orange-200 to-yellow-300 dark:from-orange-300 dark:to-yellow-400"></div>

  <ActiveSectionContextProvider>
    <Header />
     {children}
  </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
