import perfumes from "../../assets/data/products.json";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FragranceSection() {
  const { t, i18n } = useTranslation('translation'); 
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index >= perfumes.length - 2) setIndex(0);
    else setIndex(index + 1);
  };

  const prev = () => {
    if (index === 0) setIndex(perfumes.length - 2);
    else setIndex(index - 1);
  };

  const visible = perfumes.slice(index, index + 2);

  return (
    <section className="py-6 px-4 sm:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 gap-3 sm:gap-0">
          <span className="text-sm border border-white/20 px-3 py-1 rounded-full">
            {t('newArrivals')}
          </span>
          <button className="border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
            {t('allProducts')}
          </button>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-[220px_1fr] gap-8 sm:gap-10">
          <div className="flex items-start sm:items-end mb-6 sm:mb-0">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {t('allScents')} ({perfumes.length})
              </h3>
              <p className="text-gray-400 text-sm">
                {t('descriptionText')}
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-serif leading-tight mb-6 sm:mb-8">
              {t('fragrancesYouWont')} <br /> {t('findElsewhere')}
            </h1>

            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <span className="text-gray-500">[00{index + 1}]</span>
              <span className="text-lg">{t('signatureCollection')}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              {visible.map((p, i) => (
                <div
                  key={p.id}
                  className="relative rounded-3xl overflow-hidden w-full sm:w-90 h-auto sm:h-70 p-4 sm:p-6 bg-[#0d0d0d] border border-white/10 flex flex-col sm:flex-row">
                  <div
                    className={`absolute inset-0 blur-3xl opacity-40 
                        ${ i === 0 ? "bg-linear-to-r from-blue-600/40 to-transparent" : "bg-linear-to-r from-green-500/40 to-transparent"}`}/>

                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full sm:w-auto sm:h-52 object-contain mb-4 sm:mb-0 sm:mr-4 self-center"/>

                  <div className="flex-1 flex flex-col">
                    <h2 className="text-lg font-semibold mb-2">{p.name}</h2>

                    <div className="bg-white/10 backdrop-blur-sm text-gray-200 text-xs p-3 rounded-lg flex flex-col justify-between flex-1">
                      <span className="mb-2">{p.description[i18n.language as 'en' | 'ro']}</span>
                      <p className="text-2xl sm:text-3xl font-bold mt-auto">{p.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-end mt-6 sm:mt-8">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition">←</button>

              <button
                onClick={next}
                className="w-11 h-11 rounded-full flex items-center justify-center bg-linear-to-br from-black via-blue-900 to-blue-600 hover:scale-110 transition">→</button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-2">{t('highQualityFairPrice')}</h3>
          <p className="text-gray-400">
            {t('sourceIngredientsText')}
          </p>
        </div>
      </div>
    </section>
  );
}