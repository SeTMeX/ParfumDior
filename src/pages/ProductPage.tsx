import { useEffect, useState } from "react";
import { getProducts, createProduct } from "@/api/request";
import { toast } from "sonner";
import type { Product, MetaResponse } from "@/api/types";
import useLikesStore from "@/stores/useLikesStore";
import { useCartStore } from "@/stores/useCartStore";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const TAKE = 6;

const ProductPage = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  // const [meta, setMeta] = useState<MetaResponse | null>(null);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState<"ASC" | "DESC">("ASC");
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", price: 0, category: "" });
  // const [loading, setLoading] = useState(false);
  // const [refresh, setRefresh] = useState(0);

  const { toggleLike, isLiked } = useLikesStore();
  const { addToCart } = useCartStore();

  const queryClient = useQueryClient()
  const { data, isLoading:loading  } = useQuery({
    queryKey: ["products", page, order],
    queryFn: () => getProducts(page, TAKE, order),
    // enable: page
    retry: 3, 
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retryOnMount: false,
    staleTime: 0
  })
  
  const products = data?.data ?? []
  const meta = data?.meta ?? null


  // useEffect(() => {
  //   let cancelled = false;
  //   setLoading(true);
  //   getProducts(page, TAKE, order)
  //     .then((res) => {
  //       if (!cancelled) {
  //         setProducts(res.data);
  //         setMeta(res.meta);
  //       }
  //     })
  //     .catch((err) => toast.error(err.message))
  //     .finally(() => {
  //       if (!cancelled) setLoading(false);
  //     });
  //   return () => {
  //     cancelled = true;
  //   };
  // }, [page, order, refresh]);

  const handleSort = (o: "ASC" | "DESC") => {
    setOrder(o);
    setPage(1);
  };

  const submitProduct = () => {
    createProduct(form)
      .then(() => {
        toast.success("Produsul a fost creat");
        setShowModal(false);
        setForm({ name: "", price: 0, category: "" });
        setPage(1);
        // setRefresh((r) => r + 1);
        queryClient.invalidateQueries({ queryKey: ["products", page, order] })
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div
      className="min-h-screen w-full font-playfair"
      style={{
        background:
          "linear-gradient(160deg, #020408 0%, #04091a 25%, #060d24 50%, #04091a 75%, #020408 100%)",
      }}
    >
      {/* ── HEADER ── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end px-8 sm:px-16 pt-20 pb-10 gap-6">
        <div>
          <h1 className="font-playpen text-5xl md:text-7xl text-gray-200 tracking-wide font-light">
            Products
          </h1>
          <p className="text-[#4a6fa5] text-xs tracking-[4px] uppercase mt-2">
            Signature Collection · {meta?.itemCount ?? 0} Items
          </p>
        </div>
        <div className="flex flex-col gap-3 items-end">
          <button className="border border-white/20 px-5 py-2 text-white rounded-full text-sm hover:bg-white hover:text-black transition tracking-wide">
            All Products
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="border border-white/20 px-5 py-2 rounded-full text-sm text-white hover:bg-white hover:text-black transition tracking-wide"
          >
            + Add a product
          </button>
        </div>
      </div>

      {/* ── CONTROLS ── */}
      <div className="flex items-center gap-3 px-8 sm:px-16 mb-6">
        <button
          onClick={() => handleSort("ASC")}
          className={`px-4 py-1.5 rounded-full border text-xs tracking-widest transition ${
            order === "ASC"
              ? "border-blue-500 bg-blue-500/20 text-blue-300"
              : "border-white/15 text-slate-500 hover:border-white/30"
          }`}
        >
          ↑ ASC
        </button>
        <button
          onClick={() => handleSort("DESC")}
          className={`px-4 py-1.5 rounded-full border text-xs tracking-widest transition ${
            order === "DESC"
              ? "border-blue-500 bg-blue-500/20 text-blue-300"
              : "border-white/15 text-slate-500 hover:border-white/30"
          }`}
        >
          ↓ DESC
        </button>
        <div className="w-px h-5 bg-white/10 mx-1" />
        <span className="text-slate-600 text-xs tracking-widest ml-auto">
          [{String((page - 1) * TAKE + 1).padStart(3, "0")}–
          {String((page - 1) * TAKE + products.length).padStart(3, "0")} of{" "}
          {meta?.itemCount ?? 0}]
        </span>
      </div>

      {/* ── GRID ── */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="text-slate-600 text-xs tracking-[4px] uppercase animate-pulse">
            Loading...
          </span>
        </div>
      ) : (
        <div
          className="mx-8 sm:mx-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {products.map((product, i) => (
            <div
              key={product.id}
              className="relative p-7 flex flex-col gap-2 group hover:bg-white/[0.03] transition"
              style={{
                background: "linear-gradient(135deg, #060d1f, #040810)",
              }}
            >
              <span className="text-[10px] text-[#1e3a6a] tracking-[3px] mb-2">
                [{String((page - 1) * TAKE + i + 1).padStart(3, "0")}]
              </span>
              <h3 className="text-lg text-gray-200 font-light">
                {product.name}
              </h3>
              <span className="text-[10px] text-slate-600 uppercase tracking-[3px]">
                {product.category}
              </span>
              <div className="mt-4">
                <span className="text-3xl text-white font-light">
                  ${product.price}
                  <span className="text-slate-600 text-sm">.00</span>
                </span>
              </div>

              {/* ── LIKE BUTTON ── */}
              <button
                onClick={() => toggleLike(product.id)}
                className="absolute top-4 right-4 p-1.5 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Toggle like"
              >
                <svg
                  viewBox="0 0 24 24"
                  className={`w-5 h-5 transition-all duration-300 ${
                    isLiked(product.id)
                      ? "fill-rose-500 stroke-rose-500"
                      : "fill-none stroke-slate-600 hover:stroke-slate-400"
                  }`}
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
              </button>

              <div className="mt-4">
                <button
                  onClick={() => {
                    addToCart(product);
                    toast.success("Produsul a fost adaugat in cos!");
                  }}
                  className="w-[90%] mx-auto block py-2 bg-transparent text-white rounded-md border border-border hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>
              <div
                className="absolute bottom-0 left-7 right-7 h-px opacity-0 group-hover:opacity-100 transition"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)",
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* ── PAGINATION ── */}
      <div className="flex justify-between items-center px-8 sm:px-16 mt-10 mb-16">
        <span className="text-slate-600 text-xs tracking-[3px] uppercase">
          Page {page} of {meta?.pageCount ?? 1}
        </span>
        <div className="flex gap-3">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={!meta?.hasPreviousPage}
            className="w-10 h-10 rounded-full text-white border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition disabled:opacity-20 disabled:cursor-not-allowed"
          >
            ←
          </button>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={!meta?.hasNextPage}
            className="w-10 h-10 rounded-full text-white flex items-center justify-center hover:scale-110 transition disabled:opacity-20 disabled:cursor-not-allowed"
            style={{
              background: "linear-gradient(135deg, #0f172a, #1e3a6a, #2563eb)",
            }}
          >
            →
          </button>
        </div>
      </div>

      {/* ── MODAL ── */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-8 w-full max-w-md flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold tracking-wide">
                Add a Product
              </h2>
            </div>

            {(
              [
                {
                  label: "Name",
                  key: "name",
                  type: "text",
                  placeholder: "product_name",
                },
                {
                  label: "Price",
                  key: "price",
                  type: "number",
                  placeholder: "1000",
                },
                {
                  label: "Category",
                  key: "category",
                  type: "text",
                  placeholder: "phones",
                },
              ] as const
            ).map(({ label, key, type, placeholder }) => (
              <div key={key} className="flex flex-col gap-1">
                <label className="text-sm text-gray-400 tracking-wider">
                  {label}
                </label>
                <input
                  type={type}
                  value={form[key]}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [key]:
                        type === "number" ? +e.target.value : e.target.value,
                    })
                  }
                  className="bg-gray-800 border border-white/10 rounded-lg px-4 py-2 text-white outline-none focus:border-blue-500 transition"
                  placeholder={placeholder}
                />
              </div>
            ))}

            <div className="flex gap-3 justify-end mt-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => submitProduct()}
                className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition text-sm"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
