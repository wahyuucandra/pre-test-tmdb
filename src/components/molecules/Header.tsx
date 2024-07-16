import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/helpers/TailwindUtils";

function Header({ isActive }: { isActive: number }) {
  return (
    <div className="max-w-[1440px] flex items-center gap-6 py-3 px-8 font-semibold bg-black text-white">
      <Link href="/">
        <Image
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          width={154}
          height={20}
          alt="image-logo"
        />
      </Link>
      <Link href="/" className={cn("hover:text-orange-600 p-2", isActive === 1 ? "text-orange-600": "")}>
        Now Playing
      </Link>
      <Link href="/popular" className={cn("hover:text-orange-600 p-2", isActive === 2 ? "text-orange-600": "")}>
        Popular
      </Link>
      <Link href="/upcoming" className={cn("hover:text-orange-600 p-2", isActive === 3 ? "text-orange-600": "")}>
        Upcoming
      </Link>
      <Link href="/top-rated" className={cn("hover:text-orange-600 p-2", isActive === 4 ? "text-orange-600": "")}>
        Top Rated
      </Link>
    </div>
  );
}

export default Header;
