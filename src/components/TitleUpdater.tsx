"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ROUTES } from "@/routes/Routes";

export default function TitleUpdater() {
  const pathname = usePathname();

  useEffect(() => {
    const title = ROUTES.find((route) => route.path === pathname)?.name;
    
    if (title) {
      document.title = `AIBY X Technology - ${title}`;
    }
    
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
