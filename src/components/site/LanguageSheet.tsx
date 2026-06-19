import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { languages } from "@/data/languages";
import { t } from "@/i18n/ui";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentLang: string;
  onSelect: (code: string) => void;
};

export function LanguageSheet({ open, onOpenChange, currentLang, onSelect }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return languages;
    return languages.filter(
      (l) =>
        l.native.toLowerCase().includes(q) ||
        l.english.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[85vh] bg-white">
        <DrawerTitle className="sr-only">{t(currentLang, "chooseLang")}</DrawerTitle>
        <DrawerDescription className="sr-only">
          {t(currentLang, "chooseLangDesc")}
        </DrawerDescription>

        <div className="px-6 py-2">
          <div className="relative flex items-center rounded-lg border border-navy/5 bg-beige/60 px-3 py-2.5">
            <Search className="size-4 text-muted-ink" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t(currentLang, "searchLang")}
              className="ml-2 w-full border-none bg-transparent text-sm text-navy outline-none placeholder:text-muted-ink"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-12 pt-2">
          {filtered.map((l) => {
            const active = l.code === currentLang;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  onSelect(l.code);
                  onOpenChange(false);
                }}
                className={
                  active
                    ? "-mx-6 flex w-[calc(100%+3rem)] items-center justify-between border-b border-navy/5 bg-navy px-6 py-3.5 text-white"
                    : "flex w-full items-center border-b border-navy/5 py-3.5 transition-colors hover:bg-navy/5"
                }
              >
                <span className={active ? "text-sm font-medium" : "text-sm text-navy"}>
                  <span className="mr-2">{l.flag}</span>
                  {l.native}
                </span>
                {active ? (
                  <span className="font-mono text-[10px] uppercase tracking-widest">
                    {t(currentLang, "current")}
                  </span>
                ) : (
                  <span className="ml-auto text-xs text-muted-ink">{l.english}</span>
                )}
              </button>
            );
          })}
          {filtered.length === 0 && (
            <p className="py-8 text-center font-serif text-sm italic text-muted-ink">
              {t(currentLang, "noLang")}
            </p>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}