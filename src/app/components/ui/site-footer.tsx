import * as React from "react";

import { siteConfig } from "@/app/config/site";
import { cn } from "@/app/lib/utils";
import { Icons } from "./icons";
import { ModeToggle } from "@/app/components/mode-toggle";
import Link from "next/link";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Built with Next.js and Polygon. Images from{" "}
            <Link href="https://www.detectbox.io/" target="_blank" className="">
              detectbox.io
            </Link>{" "}
            for representation only
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
