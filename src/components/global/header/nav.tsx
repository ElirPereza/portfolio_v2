"use client";
import { siteConfig } from "@/components/config/site";
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {siteConfig.desktopNav.map((site, index) => (
        <Link
          href={site.href}
          key={index}
          className={`${
            site.href === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover: text-accent transition-all`}
        >
          {site.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
