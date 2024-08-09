"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/components/config/site";
import { link } from "fs";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-semibold">
              ElirPereza <samp className="text-accent">.</samp>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {siteConfig.mobileNav.map((site, index) => (
            <SheetClose asChild>
              <Link
                href={site.href}
                key={index}
                className={`${
                  site.href === pathname &&
                  "text-accent border-b-2 border-accent"
                }text-xl capitalize hover:text-accent transition-all`}
              >
                {site.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
