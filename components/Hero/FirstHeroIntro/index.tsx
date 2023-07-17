"use client";

import CenterLayout from "@/components/CenterLayout";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "../HeroCarousel";

const FirstHeroIntro = () => {
  return (
    <CenterLayout>
      <div className="w-full flex flex-col md:flex-row ">
        <div className="w-full md:w-[25%] lg:w-[25%] min-h-[300px]">
          <div className="pr-1 h-full flex flex-col justify-between gap-1">
            {/* 0.5rem 0.9rem */}
            <Link
              href={"/"}
              className="block py-[0.5rem] px-[0.9rem] hover:underline"
            >
              Electronics
            </Link>
            <Link
              href={"/"}
              className="block py-[0.5rem] px-[0.9rem] hover:underline"
            >
              Clothes and wares
            </Link>
            <Link
              href={"/"}
              className="block py-[0.5rem] px-[0.9rem] hover:underline"
            >
              Home interiors
            </Link>
            <Link
              href={"/"}
              className="block py-[0.5rem] px-[0.9rem] hover:underline"
            >
              Computer and tech
            </Link>
            <Link
              href={"/"}
              className="block py-[0.5rem] px-[0.9rem] hover:underline"
            >
              Tools and equipments
            </Link>
            <Link
              href={"/"}
              className="block py-[0.5rem] px-[0.9rem] hover:underline"
            >
              Sports and outdoor
            </Link>
            <Link
              href={"/"}
              className="block py-[0.5rem] px-[0.9rem] hover:underline"
            >
              Animals and pet
            </Link>
            <Link
              href={"/"}
              className="block py-[0.5rem] px-[0.9rem] hover:underline"
            >
              Machinery tools
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[45%] lg:w-[50%] xl:w-[55%] h-[304px] mt-5 md:mt-0 min-h-[394px]">
          {/*  Carousel Here  */}
          <HeroCarousel />
        </div>
        <div className="w-full md:w-[30%] lg:w-[25%] xl:w-[20%] min-h-[394px] hidden md:block pl-3">
          {/*  */}
          <div className="bg-[#dbe9ff] rounded-[1rem] mb-[1rem] p-[1rem] w-full flex flex-col text-center gap-2">
            <div className="flex items-center gap-3">
              <Image
                alt="avatar"
                width={40}
                height={40}
                src={"/images/others/Avatar.png"}
              />{" "}
              <div className="text-left">
                <div>Hi, user.</div>
                <div>let's get stated.</div>
              </div>
            </div>
            <Link
              href="/"
              className="inline-block text-sm rounded-[0.25rem] py-[0.25rem] px-[0.5rem]
               bg-[#0d6efd] border-[#0d6efd] hover:bg-[#0b5ed7] hover:border-[#0a58ca] border text-white"
            >
              Join now
            </Link>
          </div>
          <div className="bg-[#ff8100] rounded-[1rem] mb-[1rem] p-[1rem] w-full flex flex-col gap-2 text-white">
            <div className="text-white">
              Get US $10 off with a new supplier account.
            </div>
            <Link href="/" className="hover:underline text-white font-bold">
              Get now
            </Link>
          </div>
          <div className="bg-[#14c2e5] rounded-[1rem] mb-[1rem] p-[1rem] w-full flex flex-col gap-2">
            <div className="text-white">
              Send quotes with supplier preferences
            </div>
            <Link href="/" className="hover:underline text-white font-bold">
              Try now
            </Link>
          </div>
        </div>
      </div>
    </CenterLayout>
  );
};

export default FirstHeroIntro;
