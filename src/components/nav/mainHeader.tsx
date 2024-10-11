import Logo from "../ui/logo";
import ToggleTheme from "../ui/toggleTheme";

export default function MainHeader() {
  return (
    <header className="fixed left-0 top-0 z-40 h-[var(--header-height-sm)] w-full animate-appear-from-top border-b border-primary bg-background text-foreground transition-colors duration-300 ease-in-out lg:h-[var(--header-height)]">
      <div className="container flex h-full items-center justify-between">
        <Logo />
        <ToggleTheme />
      </div>
    </header>
  );
}
