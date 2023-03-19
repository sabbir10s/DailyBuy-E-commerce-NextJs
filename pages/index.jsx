import React from "react";
import FoodCategory from "@/components/screen/FoodCategory";
import Hero from "@/components/screen/Hero";
import FeatureProduct from "@/components/screen/FeatureProduct";
import PosterOffer from "@/components/screen/PosterOffer";
import BestSales from "@/components/screen/BestSales";
import OfferTimerBanner from "@/components/screen/OfferTimerBanner";
import ProcessingSteps from "@/components/screen/ProcessingSteps";
import ScrollBottom from "@/components/shared/ScrollBottom";
// import ScrollCart from "@/components/shared/ScrollCart";
import Head from "next/head";
import BottomBar from "@/components/shared/BottomBar";
import ScrollCart from "@/components/shared/ScrollCart";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daily Buy Online</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <FeatureProduct />
        <PosterOffer />
        <BestSales />
        <OfferTimerBanner />
        <FoodCategory />
        <ProcessingSteps />
        <ScrollBottom />
        <BottomBar />
        <ScrollCart />
      </main>
    </>
  );
}
