import { Link } from "react-router-dom";
import type { Restaurant } from "@/data/restaurants";

type Props = { restaurant: Restaurant; priority?: boolean; delay?: number };

export function RestaurantCard({ restaurant, priority, delay = 0 }: Props) {
  return (
    <article
      className="group relative overflow-hidden bg-white opacity-0 animate-[slide-up_0.8s_cubic-bezier(0.19,1,0.22,1)_both]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-200">
        <img
          src={restaurant.image}
          alt={`${restaurant.name} — ${restaurant.city}`}
          width={800}
          height={1000}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-navy/5" />
      </div>
      <div className="border-x border-b border-navy/5 p-5">
        <div className="mb-2 flex items-start justify-between">
          <h2 className="text-xl font-medium tracking-tight text-navy">
            {restaurant.name}
          </h2>
          <span className="font-mono text-[10px] tracking-widest text-muted-ink">
            {restaurant.city}
          </span>
        </div>
        <p className="mb-4 font-serif text-sm italic leading-relaxed text-muted-ink">
          {restaurant.tagline}
        </p>
        <Link
          to={restaurant.href}
          className="block w-full bg-sky py-3.5 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-navy transition-colors hover:bg-sky/80"
        >
          Enter
        </Link>
      </div>
    </article>
  );
}