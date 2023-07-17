import Deals from "@/components/Deals";
import FirstHeroIntro from "@/components/Hero/FirstHeroIntro";
import CategoriesAndSubCategories from "@/components/CategoriesAndSubCategories";
import Navbar from "@/components/Navbar";

import {
  homeOutdoorsBackground,
  homeOutdoorsCategories,
} from "@/public/images/home_outdoor";
import {
  customerElectronicCategories,
  customerElectronicBackground,
} from "@/public/images/consumer_electronics";
import Quotation from "@/components/Quotation";
import RecommendedProducts from "@/components/RecommendedProducts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <FirstHeroIntro />
      <Deals />

      <CategoriesAndSubCategories
        backgroundImage={homeOutdoorsBackground}
        categories={homeOutdoorsCategories}
        linkForButton="/"
        catTitle="Home and outdoor"
      />
      <CategoriesAndSubCategories
        backgroundImage={customerElectronicBackground}
        categories={customerElectronicCategories}
        linkForButton="/"
        catTitle="Consumer electronics and gadgets"
      />
      <Quotation />
      <RecommendedProducts />
      <Footer />
    </>
  );
}
