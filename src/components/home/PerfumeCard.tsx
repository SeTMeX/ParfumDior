import { useTranslation } from "react-i18next";

interface Perfume {
  id: number;
  name: string;
  img: string;
  price: string;
  color: string; 
  description: {
    en: string;
    ro: string;
  };
}

interface PerfumeCardProps {
  perfume: Perfume;
  index: number;
}

export default function PerfumeCard({ perfume }: PerfumeCardProps) {
  const { i18n } = useTranslation();

  return (
    <div className="relative rounded-3xl overflow-hidden w-full sm:w-90 h-75 sm:h-72 p-4 sm:p-6 bg-[#0d0d0d] border border-white/10 flex flex-col sm:flex-row">
      <div
        className="absolute inset-0 blur-3xl opacity-40 z-0"
        style={{ background: `linear-gradient(to right, ${perfume.color} 0%, transparent 100%)` }}
      />

      <img
        src={perfume.img}
        alt={perfume.name}
        className="w-full sm:w-40 h-40 sm:h-full object-contain self-center z-10 mb-2 sm:mb-0 sm:mr-4"
      />

      <div className="flex-1 flex flex-col z-10">
        <h2 className="text-lg font-semibold mb-1 sm:mb-2">{perfume.name}</h2>

        <div className="bg-white/10 backdrop-blur-sm text-gray-200 text-xs p-2 sm:p-3 rounded-lg flex flex-col justify-between flex-1">
          <span className="mb-1 sm:mb-2">
            {perfume.description[i18n.language as "en" | "ro"]}
          </span>
          <p className="text-2xl sm:text-3xl font-bold mt-auto">{perfume.price}</p>
        </div>
      </div>
    </div>
  );
}