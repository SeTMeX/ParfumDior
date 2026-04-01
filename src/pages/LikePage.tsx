import { useState } from "react";
import products from "../../assets/data/products.json";

type Product = {
  id: number;
  name: string;
  img: string;
  price: string;
  color?: "blue" | "green" | "red" | "gold";
  description: {
    en: string;
    ro: string;
  };
};

type Accent = {
  border: string;
  text: string;
  bg: string;
};

type LikeCardProps = {
  product: Product;
  liked: boolean;
  lang: "en" | "ro";
  onToggleLike: (id: number) => void;
  onAddToCart: (id: number) => void;
};

type HeartIconProps = {
  filled?: boolean;
};

const typedProducts = products as Product[];

// ── Accent color map based on product "color" field ──────────────────────────
const accentMap: Record<string, Accent> = {
  blue:  { border: "border-blue-400",    text: "text-blue-400",    bg: "bg-blue-400/10"    },
  green: { border: "border-emerald-400", text: "text-emerald-400", bg: "bg-emerald-400/10" },
  red:   { border: "border-rose-400",    text: "text-rose-400",    bg: "bg-rose-400/10"    },
  gold:  { border: "border-amber-400",   text: "text-amber-400",   bg: "bg-amber-400/10"   },
};

const fallbackAccent: Accent = { border: "border-zinc-700", text: "text-zinc-400", bg: "bg-zinc-400/10" };

// ── Heart SVG ─────────────────────────────────────────────────────────────────
const HeartIcon = ({ filled = false }: HeartIconProps) => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5 transition-all duration-300"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935
         0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1
         3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);

// ── Single product card ───────────────────────────────────────────────────────
const LikeCard = ({ product, liked, lang, onToggleLike, onAddToCart }: LikeCardProps) => {
  const accent = accentMap[product.color ?? ""] ?? fallbackAccent;

  return (
    <div
      className={`
        group relative flex flex-col bg-zinc-900 border border-zinc-800
        rounded-2xl overflow-hidden
        transition-all duration-500
        hover:shadow-[0_0_32px_-4px_rgba(255,255,255,0.06)]
        hover:-translate-y-1
      `}
    >
      {/* ── Image ── */}
      <div className="relative h-64 bg-zinc-950 overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
        />

        {/* Heart */}
        <div className="absolute top-3 right-3 flex gap-2">
          {/* TODO: wire your like toggle logic */}
          <button
            onClick={() => onToggleLike(product.id)}
            className={`
              p-2 rounded-full backdrop-blur-sm transition-all duration-300
              ${liked
                ? `${accent.bg} ${accent.text}`
                : "bg-zinc-800/70 text-zinc-500 hover:text-white"}
            `}
            aria-label="Toggle like"
          >
            <HeartIcon filled={liked} />
          </button>
        </div>
      </div>

      {/* ── Info ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-white font-semibold text-lg leading-snug tracking-wide">
          {product.name}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 flex-1">
          {product.description[lang]}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-zinc-800 mt-auto">
          <span className={`text-xl font-bold tracking-tight ${accent.text}`}>
            {product.price}
          </span>

          {/* TODO: wire your add-to-cart logic */}
          <button
            onClick={() => onAddToCart(product.id)}
            className={`
              px-4 py-2 rounded-xl text-sm font-medium
              border border-zinc-700 text-zinc-300 bg-zinc-800/40
              hover:brightness-125 transition-all duration-300
            `}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Likes Page (no header / footer) ──────────────────────────────────────────
export default function LikesPage() {
  // TODO: replace these with your own state / context / store
  const [likedIds, setLikedIds] = useState<number[]>(typedProducts.map((p) => p.id));
  const [lang, setLang] = useState<"en" | "ro">("en"); // "en" | "ro"

  const handleToggleLike = (id: number) => {
    // TODO: plug your like logic here
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (id: number) => {
    // TODO: plug your cart logic here
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* ── Page heading ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] mb-2">
              Your Collection
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Liked{" "}
              <span className="text-zinc-600">Fragrances</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Item count */}
            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2.5">
              <HeartIcon filled />
              <span className="text-white font-semibold">{typedProducts.length}</span>
              <span className="text-zinc-500 text-sm">
                {typedProducts.length === 1 ? "item" : "items"}
              </span>
            </div>

            {/* Lang toggle — TODO: wire to your i18n logic */}
            <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-xl p-1">
              {["en", "ro"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l as "en" | "ro")}
                  className={`
                    px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-widest
                    transition-all duration-200
                    ${lang === l ? "bg-white text-black" : "text-zinc-500 hover:text-white"}
                  `}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent mb-10" />

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {typedProducts.map((product) => (
            <LikeCard
              key={product.id}
              product={product}
              liked={likedIds.includes(product.id)}
              lang={lang}
              onToggleLike={handleToggleLike}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}