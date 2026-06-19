import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Clock, Download, MapPin, Phone } from "lucide-react";
import { TopBar } from "@/components/site/TopBar";
import { LanguageSheet } from "@/components/site/LanguageSheet";
import { restaurants, type MenuSection, type MenuItem } from "@/data/restaurants";
import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n/ui";
import { translateRestaurant, translateSection } from "@/i18n/content";
import { translateItem } from "@/i18n/menuItems";

type Tab = "menu" | "location" | "about" | "contact";

export default function RestaurantPage() {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((r) => r.id === id);
  useEffect(() => {
    if (restaurant) {
      document.title = `${restaurant.name} — Balbi`;
    }
  }, [restaurant]);
  if (!restaurant) return <Navigate to="/" replace />;
  const [lang, setLang] = useLang();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("menu");
  const handleSelect = (code: string) => setLang(code);
  const rc = translateRestaurant(restaurant.id, lang);
  const tabLabels: Record<Tab, string> = {
    menu: t(lang, "tabMenu"),
    location: t(lang, "tabLocation"),
    about: t(lang, "tabAbout"),
    contact: t(lang, "tabContact"),
  };

  return (
    <div className="min-h-[100dvh] bg-beige font-sans text-navy">
      <div className="mx-auto flex min-h-[100dvh] w-full max-w-[480px] flex-col bg-beige shadow-[0_0_60px_rgba(10,17,40,0.15)]">
        <TopBar currentLang={lang.toUpperCase()} onOpenLanguage={() => setSheetOpen(true)} />

        {/* Back row */}
        <div className="flex items-center justify-between bg-navy px-4 pb-3 text-white">
          <Link
            to="/"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-sky/90 hover:text-sky"
          >
            {t(lang, "backAll")}
          </Link>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
            {rc.city}
          </span>
        </div>

        {/* Hero */}
        <header className="relative h-[58dvh] min-h-[360px] w-full overflow-hidden bg-navy">
          <img
            src={restaurant.hero}
            alt={`${restaurant.name} — ${t(lang, "interiorAlt")}`}
            width={1280}
            height={1600}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/10" />
          <div className="relative flex h-full flex-col justify-end p-6">
            <span className="font-mono text-[10px] tracking-[0.3em] text-sky">
              {rc.city} · {t(lang, "albania")}
            </span>
            <h1 className="mt-2 font-serif text-5xl italic leading-none text-white">
              {restaurant.name}
            </h1>
            <p className="mt-3 max-w-[85%] font-serif text-base italic text-white/80">
              {rc.tagline}
            </p>
          </div>
        </header>

        {/* Tabs */}
        <nav className="sticky top-14 z-30 flex border-b border-navy/10 bg-beige/95 backdrop-blur">
          {(["menu", "location", "about", "contact"] as Tab[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`flex-1 border-b-2 px-3 py-3.5 font-mono text-[11px] uppercase tracking-[0.25em] transition-colors ${
                tab === t
                  ? "border-navy text-navy"
                  : "border-transparent text-navy/40 hover:text-navy/70"
              }`}
            >
              {tabLabels[t]}
            </button>
          ))}
        </nav>

        <main className="flex-1 bg-beige">
          {tab === "menu" && (
            <section className="px-6 py-8">
              <a
                href={restaurant.menuPdf}
                download={`${restaurant.id}-menu.pdf`}
                target="_blank"
                rel="noreferrer"
                className="mb-8 flex w-full items-center justify-center gap-2 border border-navy bg-navy py-3.5 font-mono text-[11px] uppercase tracking-[0.25em] text-sky transition-colors hover:bg-navy/90"
              >
                <Download className="size-3.5" />
                {t(lang, "downloadMenu")}
              </a>
              {restaurant.menu.map((section: MenuSection) => (
                <div key={section.title} className="mb-10">
                  <div className="mb-4 flex items-baseline gap-3">
                    <h2 className="font-serif text-2xl italic text-navy">
                      {translateSection(section.title, lang)}
                    </h2>
                    <span className="h-px flex-1 bg-navy/15" />
                  </div>
                  <ul className="space-y-5">
                    {section.items.map((item: MenuItem) => {
                      const it = translateItem(item.name, lang);
                      // Descriptions are always in English; only names are translated.
                      const description = item.description;
                      return (
                        <li key={item.name} className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <p className="font-medium text-navy">{it.name ?? item.name}</p>
                            {description && (
                              <p className="mt-1 font-serif text-sm italic text-muted-ink">
                                {description}
                              </p>
                            )}
                          </div>
                          <span className="shrink-0 font-mono text-[13px] text-navy">
                            {item.price}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </section>
          )}

          {tab === "location" && (
            <section className="px-6 py-8">
              <div className="overflow-hidden rounded-sm border border-navy/10 bg-navy/5">
                <iframe
                  title={`${restaurant.name} map`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(restaurant.mapQuery)}&output=embed`}
                  className="pointer-events-none h-64 w-full"
                  loading="lazy"
                />
              </div>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-navy/60" />
                  <span>{restaurant.address}</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-navy/60" />
                  <span>{restaurant.hours}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-navy/60" />
                  <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`} className="underline-offset-4 hover:underline">
                    {restaurant.phone}
                  </a>
                </li>
              </ul>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 block w-full bg-navy py-3.5 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-sky transition-colors hover:bg-navy/90"
              >
                {t(lang, "openMaps")}
              </a>
            </section>
          )}

          {tab === "about" && (
            <section>
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-beige" />
              </div>
              <div className="px-6 pb-10 -mt-6">
                <span className="font-mono text-[10px] tracking-[0.3em] text-navy/50">
                  {t(lang, "ourStory")}
                </span>
                <h2 className="mt-2 font-serif text-3xl italic">{restaurant.name}</h2>
                <p className="mt-5 font-serif text-base italic leading-relaxed text-navy/80">
                  {rc.about}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-navy/10 bg-navy/10 text-center">
                  <div className="bg-beige p-4">
                    <p className="font-serif text-2xl italic text-navy">{t(lang, "since")}</p>
                    <p className="mt-1 font-mono text-[11px] tracking-[0.2em] text-navy/60">
                      2014
                    </p>
                  </div>
                  <div className="bg-beige p-4">
                    <p className="font-serif text-2xl italic text-navy">{t(lang, "seats")}</p>
                    <p className="mt-1 font-mono text-[11px] tracking-[0.2em] text-navy/60">
                      60
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}
          {tab === "contact" && (
            <section className="px-6 py-8">
              <h2 className="font-serif text-2xl italic text-navy">{t(lang, "getInTouch")}</h2>
              <p className="mt-2 font-serif text-sm italic text-muted-ink">
                {t(lang, "contactHelper")}
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href={restaurant.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-3 bg-navy py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-sky transition-colors hover:bg-navy/90"
                >
                  WhatsApp
                </a>
                <a
                  href={restaurant.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-3 border border-navy py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-navy transition-colors hover:bg-navy/5"
                >
                  Instagram
                </a>
              </div>
            </section>
          )}

        </main>

        <footer className="border-t border-navy/10 bg-navy px-6 py-6 text-center text-white">
          <p className="font-serif text-sm italic text-white/70">
            {t(lang, "footerTagline")}
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-sky/80">
            BALBI · {rc.city}
          </p>
        </footer>
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