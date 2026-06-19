import { Globe } from "lucide-react";

type Props = {
  currentLang: string;
  onOpenLanguage: () => void;
};

export function TopBar({ currentLang, onOpenLanguage }: Props) {
  return (
    <nav className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-white/5 bg-navy px-4 text-white">
      <div className="w-10" aria-hidden />
      <span className="font-mono text-sm font-medium uppercase tracking-[0.3em]">
        Balbi
      </span>
      <button
        type="button"
        onClick={onOpenLanguage}
        aria-label="Change language"
        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 transition-colors hover:bg-white/15"
      >
        <Globe className="size-3.5 opacity-80" />
        <span className="font-mono text-[11px] uppercase tracking-wider">
          {currentLang}
        </span>
      </button>
    </nav>
  );
}