"use client";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  // Load user preference from localStorage and apply theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.body.classList.add("dark");
      setIsDark(true);
    } else {
      document.body.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  // Function to toggle theme and save preference
  const toggleTheme = () => {
    if (isDark) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };
  return (
    <Button onClick={toggleTheme} size={"icon"} variant={"ghost"}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
