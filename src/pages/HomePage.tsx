import Button from '../components/home/LandingButtons'
import { useTranslation } from "react-i18next";
import FragranceSection from '@/components/home/FragranceSection';
const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen w-full bg-center bg-cover flex flex-col justify-between items-center font-playfair">

      <img
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        src="/photos/landing-bk.jpg"
        alt=""
        fetchPriority="high"
      />

      {/* LEFT SECTION */}
      <div className="flex flex-col text-center lg:text-left w-full lg:w-1/2 px-6 md:px-12 lg:px-20 py-10">

        <span className="font-playpen text-4xl md:text-6xl lg:text-8xl text-gray-300 pb-4">
          {t("homePage.title")}
        </span>

        <span className="text-white text-sm md:text-base">
          {t("homePage.span1")}
        </span>

        <div className="flex flex-row justify-center lg:justify-start mt-8 gap-5">
          <Button text="BUY NOW" className="h-12 w-32 md:h-14 md:w-36" />

          <span className="text-white py-3 text-lg md:text-2xl">
            480.
            <span className="text-gray-600">00</span>
          </span>
        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col w-full lg:w-1/2 px-6 md:px-12 lg:px-20 py-10 gap-3">

        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          <Button text="Jasmine" />
          <Button text="Rose" />
          <Button text="Vanilla" />
        </div>

        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          <Button text="Melon" />
          <Button text="Amber" />
        </div>

      </div>
        <FragranceSection/>
    </div>
  );
};

export default HomePage;