import Button from '../components/home/LandingButtons';
import { useTranslation } from "react-i18next";
import FragranceSection from '@/components/home/FragranceSection';
import { motion } from "framer-motion";

const notes = ["jasmine", "rose", "vanilla", "melon", "amber"] as const;

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen w-full font-playfair overflow-x-hidden">

      {/* Background */}
      <img
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        src="/photos/landing-bk.jpg"
        alt=""
        fetchPriority="high"
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/55" />

      {/* HERO */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 py-28">

        {/* Subtitlu mic deasupra */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-amber-300/80 text-xs sm:text-sm tracking-[0.3em] uppercase font-sans font-light mb-5"
        >
          {t("signatureCollection")}
        </motion.p>

        {/* Titlu principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-playpen text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 max-w-3xl"
        >
          {t("homePage.title")}
        </motion.h1>

        {/* Descriere */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 text-sm sm:text-base font-sans font-light leading-relaxed max-w-md mb-10"
        >
          {t("homePage.span1")}{" "}
          <span className="text-gray-400">{t("homePage.span2")}</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-row items-center gap-8 mb-14"
        >
          <Button
            text={t("homePage.button")}
            className="h-12 w-36 sm:h-13 sm:w-40 text-xs tracking-[0.18em] uppercase font-sans"
          />
          <div className="flex flex-col">
            <span className="text-gray-500 text-[10px] font-sans uppercase tracking-widest mb-0.5">
              {t("highQualityFairPrice")}
            </span>
            <span className="text-white text-2xl sm:text-3xl font-light tracking-wide">
              $480<span className="text-gray-500 text-lg">.00</span>
            </span>
          </div>
        </motion.div>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-md h-[1px] bg-white/10 mb-8 origin-left"
        />

        {/* Note de parfum */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col gap-3"
        >
          <p className="text-gray-500 text-[10px] font-sans uppercase tracking-[0.25em]">
            {t("allScents")}
          </p>
          <div className="flex flex-wrap gap-2">
            {notes.map((note, i) => (
              <motion.div
                key={note}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                whileHover={{ scale: 1.05 }}
              >
                <Button
                  text={t(`flavors.${note}`)}
                  className="h-9 px-5 text-[11px] tracking-[0.1em] uppercase font-sans !w-auto whitespace-nowrap min-w-0"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FRAGRANCE SECTION */}
      <div className="relative z-10">
        <FragranceSection />
      </div>
    </div>
  );
};

export default HomePage;