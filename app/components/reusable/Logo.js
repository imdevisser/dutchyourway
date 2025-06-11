import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <div>
      <Link href="/" className="z-10 flex items-center gap-4">
        <Image
          src={logo}
          height="100"
          width="100"
          quality={30}
          alt="Dutch Your Way logo"
        />
        <div>
          <h1 className="bg-gradient-to-r from-red-600 to-blue-500 bg-clip-text text-2xl font-bold text-transparent">
            Dutch Your Way
          </h1>
          <p className="text-xs font-medium text-gray-600">
            With expert guidance
          </p>
        </div>
      </Link>
    </div>
  );
}
