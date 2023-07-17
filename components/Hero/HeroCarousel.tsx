"use client";

import { Carousel } from "@material-tailwind/react";
import Link from "next/link";

export default function HeroCarousel() {
  return (
    <Carousel className="rounded-xl w-full h-full text-[#212529]">
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: 'url("/images/others/bg1.png")',
        }}
        className="h-full w-full object-cover relative px-14 pt-20"
      >
        <div className="w-full space-y-5">
          <div className="w-full">
            <h2 className="font-normal text-[calc(1rem+0.9vw)]">
              Latest trending
            </h2>
            <h2 className="font-extrabold text-[calc(1.325rem+0.9vw)]">
              Electronic items
            </h2>
          </div>

          <Link
            href="/"
            className="inline-block text-center rounded-[.4rem] bg-[#ff8100] hover:bg-[#d96e00] hover:border-[#cc6700] border-[#ff8100] border py-[0.43rem] px-[0.84rem] text-white"
          >
            View more
          </Link>
        </div>
      </div>
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: 'url("/images/others/bg2.png")',
        }}
        className="h-full w-full object-cover relative px-14 pt-20"
      >
        <div className="w-full space-y-5">
          <div className="w-full">
            <h2 className="font-normal text-[calc(1rem+0.9vw)]">
              Latest delas
            </h2>
            <h2 className="font-extrabold text-[calc(1.325rem+0.9vw)]">
              Best Smartphones
            </h2>
          </div>

          <Link
            href="/"
            className="inline-block text-center rounded-[.4rem] bg-[#ff8100] hover:bg-[#d96e00] hover:border-[#cc6700] border-[#ff8100] border py-[0.43rem] px-[0.84rem] text-white"
          >
            View more
          </Link>
        </div>
      </div>
    </Carousel>
  );
}
