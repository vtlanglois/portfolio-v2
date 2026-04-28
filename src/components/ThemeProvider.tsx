"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const theme = searchParams.get("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [searchParams]);

  return <>{children}</>;
}
