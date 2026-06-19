import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TopBar } from "@/components/site/TopBar";
import { LanguageSheet } from "@/components/site/LanguageSheet";
import { restaurants } from "@/data/restaurants";
import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n/ui";
import { translateRestaurant } from "@/i18n/content";

export default function Index() {
  useEffect(() => {
    document.title = "Balbi — Choose your table";
  }, []);
  const [lang, setLang] = useLang();
  const [sheetOpen, setSheetOpen] = useState(false);
  const handleSelect = (code: string) => setLang(code);

  return (
    <div className="h-[100dvh] overflow-hidden bg-navy font-sans text-white selection:bg-sky/30">
      <div className="mx-auto flex h-[100dvh] w-full max-w-[480px] flex-col">
        <TopBar currentLang={lang.toUpperCase()} onOpenLanguage={() => setSheetOpen(true)} />

        <main className="grid flex-1 grid-rows-2 gap-px bg-white/10">
          {restaurants.map((r, i) => {
            const rc = translateRestaurant(r.id, lang);
            return (
            <Link
              key={r.id}
              to={r.href}
              className="group relative block overflow-hidden bg-navy opacity-0 animate-[fade-in_0.7s_cubic-bezier(0.19,1,0.22,1)_both]"
              style={{ animationDelay: `${120 + i * 120}ms` }}
            >
              <img
                src={r.image}
                alt={`${r.name} — ${r.city}`}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] group-active:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-navy/10" />
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="font-mono text-[10px] tracking-[0.25em] text-sky">
                  {rc.city}
                </span>
                <h2 className="mt-1 font-serif text-4xl italic leading-none">
                  {r.name}
                </h2>
                <p className="mt-2 max-w-[80%] font-serif text-sm italic text-white/75">
                  {rc.tagline}
                </p>
                <span className="mt-4 inline-flex w-fit items-center gap-2 border-b border-sky pb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-sky">
                  {t(lang, "enter")}
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
            );
          })}
        </main>
      </div>

      <LanguageSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        currentLang={lang}
        onSelect={handleSelect}
      />
    </div>
  );
}
