import perfumes from "../../../assets/data/products.json";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PerfumeCard from "./PerfumeCard";
import { createProduct } from "@/api/request";
import { toast } from "sonner"
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import LogIn from "../core/auth/LogIn";
import { useMutation } from "@tanstack/react-query";
import { Loader } from "lucide-react";

export default function FragranceSection() {
  const navigate = useNavigate()
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ name: "", price: "", category: "" });
  const [errors, setErrors] = useState({ name: "", price: "", category: "" })
  const [showLogin, setShowLogin] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      toast.success("Produsul a fost creat");
      navigate("/products");
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  const next = () => {
    if (index >= perfumes.length - 2) setIndex(0);
    else setIndex(index + 1);
  };

  const prev = () => {
    if (index === 0) setIndex(perfumes.length - 2);
    else setIndex(index - 1);
  };

  const visible = perfumes.slice(index, index + 2);

  const submitProduct = () => {
    const newErrors = {
      name: form.name.trim() === "" ? "Name is required" : "",
      price: form.price === "" ? "Price is required" : "",
      category: form.category === "" ? "Category is required" : "",
    }
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((e) => e !== "");
    if (hasErrors) return;

    // createProduct({ ...form, price: +form.price })
    //   .then(() => {
    //     toast.success("Produsul a fost creat");
    //     navigate("/products");
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //   });

    mutate({ ...form, price: +form.price })
  }

  return (
    <section className="w-full py-6 bg-black text-white">
      <div className="w-full px-4 sm:px-8 max-w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-8 sm:mb-10">
          <span className="text-sm border border-white/20 px-3 py-1 rounded-full">
            {t("newArrivals")}
          </span>
          <div className="flex flex-col gap-4 items-end">
            <button className="border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
              {t("allProducts")}
            </button>
            <button
              className="border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
              onClick={() => {
                const token = localStorage.getItem("accessToken");
                if (!token) {
                  setShowLogin(true);
                  toast.info("Lipsa de autorizare")
                } else {
                  setShowModal(true)
                }
              }}
            >
              Add a product
            </button>
          </div>
        </div>

        {/* Title + Cards */}
        <div className="flex flex-col sm:grid sm:grid-cols-[220px_1fr] gap-8 sm:gap-10">
          {/* Left column */}
          <div className="flex items-start sm:items-end mb-6 sm:mb-0">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {t("allScents")} ({perfumes.length})
              </h3>
              <p className="text-gray-400 text-sm">{t("descriptionText")}</p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-serif leading-tight mb-6 sm:mb-8">
              {t("fragrancesYouWont")} <br /> {t("findElsewhere")}
            </h1>

            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <span className="text-gray-500">[00{index + 1}]</span>
              <span className="text-lg">{t("signatureCollection")}</span>
            </div>

            <div className="flex flex-col gap-6 w-full sm:flex-row sm:gap-6">
              {visible.map((p, i) => (
                <PerfumeCard key={p.id} perfume={p} index={i} />
              ))}
            </div>

            <div className="flex gap-4 justify-end mt-6 sm:mt-8">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                ←
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full flex items-center justify-center bg-linear-to-br from-black via-blue-900 to-blue-600 hover:scale-110 transition"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-2">{t("highQualityFairPrice")}</h3>
          <p className="text-gray-400">{t("sourceIngredientsText")}</p>
        </div>
      </div>


      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-gray-900 border border-white/10 rounded-2xl p-8 w-full max-w-md flex flex-col gap-5 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-white">Add a Product</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-400">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-gray-800 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
              placeholder="product name"
            />
            {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}

          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-400">Price </label>
            <input
              type="number"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="bg-gray-800 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
              placeholder="price"
            />
            {errors.price && <span className="text-red-400 text-xs">{errors.price}</span>}

          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-400">Category </label>
            <input
              type="text"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="bg-gray-800 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
              placeholder="ex: phones"
            />
            {errors.category && <span className="text-red-400 text-xs">{errors.category}</span>}

          </div>
          <DialogFooter>
            <button onClick={() => setShowModal(false)} className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
              Cancel
            </button>
            <button onClick={submitProduct} disabled = {isPending}
              className="flex items-center gap-2 disabled:opacity-20 text-white px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition">
              {isPending ? "Se adauga produsul":"Add Product"}
              {isPending && <Loader className="animate-spin size-5"/>}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <LogIn show={showLogin} onClose={() => setShowLogin(false)} />
    </section>
  );
}
