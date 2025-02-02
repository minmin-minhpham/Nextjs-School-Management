import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/images/logo.png" alt="logo" width={52} height={52} />
          <span className="hidden lg:block font-bold">School Min-Min</span>
        </Link>
        <Menu />
      </div>

      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll flex flex-col bg-[#F7F8FA]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
