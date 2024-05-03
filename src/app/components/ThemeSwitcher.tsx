"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@nextui-org/button";

const getOppositeTheme = (theme?: string) =>
  theme === "light" ? "dark" : "light";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      startContent={theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      color="default"
      aria-label={`Switch to ${getOppositeTheme(theme)} mode`}
      className="capitalize text-sm"
      onClick={() => setTheme(getOppositeTheme(theme))}
    >
      {getOppositeTheme(theme)} mode
    </Button>
  );
}
