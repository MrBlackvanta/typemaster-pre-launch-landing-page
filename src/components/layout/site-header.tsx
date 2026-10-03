import { TypemasterLogo } from "@/components/icons";
import { PreOrderButton } from "@/components/ui";

export default function SiteHeader() {
  return (
    <header className="v-shell flex items-center justify-between pt-5.75 md:pt-10 lg:pt-13.75">
      <div className="flex items-center">
        <TypemasterLogo className="text-brand size-10" />
        <span className="sr-only">Typemaster</span>
      </div>
      <PreOrderButton tone="muted" />
    </header>
  );
}
