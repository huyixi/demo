import Link from "next/link";

import { siteConfig } from "@/app/config/site";
import { Icons } from "./icons";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Icons.gitHub className="h-6 w-6" />
        <span className="sr-only">GitHub</span>
        <Icons.logo className="h-6 w-6" />
        <Icons.shadcn className="h-6 w-6" />
      </Link>
    </header>
  );
}
