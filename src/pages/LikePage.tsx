import { useEffect, useState } from "react";
import { getProductById } from "@/api/request";
import { toast } from "sonner";
import type { Product } from "@/api/types";
import useLikesStore from "@/stores/useLikesStore";
import { useTranslation } from "react-i18next";

// ── Heart SVG ─────────────────────────────────────────────────────────────────
const HeartIcon = ({ filled = false }: { filled?: boolean }) => (
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
const LikeCard = ({
  product,
  onRemove,
  onAddToCart,
}: {
  product: Product;
  onRemove: (id: string) => void;
  onAddToCart: (id: string) => void;
}) => {
  const { t } = useTranslation();

  return (
    <div
      className="
        group relative flex flex-col bg-zinc-900 border border-zinc-800
        rounded-2xl overflow-hidden
        transition-all duration-500
        hover:shadow-[0_0_32px_-4px_rgba(255,255,255,0.06)]
        hover:-translate-y-1
      "
    >
      {/* ── Image placeholder ── */}
      <div className="relative h-48 bg-zinc-950 overflow-hidden flex items-center justify-center">
        <span className="text-zinc-700 text-xs uppercase tracking-widest">
          {product.category}
        </span>

        {/* Heart — click to unlike and remove from page */}
        <button
          onClick={() => onRemove(product.id)}
          className="absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 bg-rose-400/10 text-rose-400 hover:bg-zinc-800/70 hover:text-zinc-500"
          aria-label="Remove from likes"
        >
          <HeartIcon filled />
        </button>
      </div>

      {/* ── Info ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-white font-semibold text-lg leading-snug tracking-wide">
          {product.name}
        </h3>
        <span className="text-zinc-600 text-xs uppercase tracking-widest">
          {product.category}
        </span>

        <div className="flex items-center justify-between pt-3 border-t border-zinc-800 mt-auto">
          <span className="text-xl font-bold tracking-tight text-white">
            ${product.price}
            <span className="text-zinc-600 text-sm">.00</span>
          </span>

          <button
            onClick={() => onAddToCart(product.id)}
            className="px-4 py-2 rounded-xl text-sm font-medium border border-zinc-700 text-zinc-300 bg-zinc-800/40 hover:brightness-125 transition-all duration-300"
          >
            {t("likesPage.addToCart")}
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Likes Page ────────────────────────────────────────────────────────────────
export default function LikesPage() {
  const { likedIds, toggleLike } = useLikesStore();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  // Fetch each liked product by ID
  useEffect(() => {
    if (likedIds.length === 0) {
      setProducts([]);
      return;
    }

    setLoading(true);
    Promise.all(likedIds.map((id) => getProductById(id)))
      .then((results) => setProducts(results))
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  }, [likedIds]);

  const handleRemove = (id: string) => {
    toggleLike(id); // removes from store → triggers useEffect → removes from list
  };

  const handleAddToCart = (id: string) => {
    // TODO: plug your cart logic here
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] mb-2">
              {t("likesPage.collection")}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              {t("likesPage.title")} <span className="text-zinc-600">{t("likesPage.titleSpan")}</span>
            </h1>
          </div>

          {!loading && (
            <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2.5">
              <HeartIcon filled />
              <span className="text-white font-semibold">{products.length}</span>
              <span className="text-zinc-500 text-sm">
                {products.length === 1 ? t("likesPage.item") : t("likesPage.items")}
              </span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent mb-10" />

        {/* ── Grid ── */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <LikeCard
                key={product.id}
                product={product}
                onRemove={handleRemove}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

        {/* ── Empty state ── */}
        {!loading && products.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 gap-6 text-center">
            <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-700">
              <HeartIcon filled={false} />
            </div>
            <div>
              <p className="text-white text-xl font-semibold mb-2">
                {t("likesPage.emptyTitle")}
              </p>
              <p className="text-zinc-500 text-sm">
               {t("likesPage.emptyText")}
              </p>
            </div>
            {/* TODO: wire to your router */}
            <button className="mt-2 px-6 py-3 rounded-xl border border-zinc-700 text-zinc-300 hover:border-white hover:text-white text-sm font-medium transition-all duration-300">
              {t("likesPage.explore")}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}