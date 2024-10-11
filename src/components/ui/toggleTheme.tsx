"use client";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { MoonIcon, SunIcon } from "lucide-react";

type ThemeType = "dark" | "light";

export default function ToggleTheme() {
  const localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<ThemeType>(
    localTheme && localTheme === "dark" ? "dark" : "light",
  );
  useEffect(() => {
    const updateTheme = () => {
      if (theme === "light") document.body.classList.add("dark");
      else document.body.classList.remove("dark");
    };
    updateTheme();
  }, [theme]);
  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  return (
    <Button onClick={toggleTheme} size={"icon"} variant={"ghost"}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
