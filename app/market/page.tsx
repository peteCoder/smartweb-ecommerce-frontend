import Footer from "@/components/Footer";
import GridMainMarketView from "@/components/GridMainMarketView";
import Navbar from "@/components/Navbar";
import React from "react";

const API_BASE_URL = process.env.API_BASE_URL;

const MarketPlace = async () => {
  const products = await fetch(`${API_BASE_URL}/api/product/`);
  const data = await products.json();
  console.log(data);

  return (
    <>
      <Navbar />
      <GridMainMarketView />
      <Footer />
    </>
  );
};

export default MarketPlace;
