import { Logo } from "@/components/logo";

export function RegistryLogo() {
  return (
    <div className="flex items-center gap-3">
      <Logo variant="mark" className="flex-shrink-0" />
      <span className="font-semibold">GTreasury Registry</span>
    </div>
  );
}
