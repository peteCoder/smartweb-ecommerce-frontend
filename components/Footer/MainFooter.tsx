import React from "react";
import Logo from "../Navbar/Logo";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import CenterLayout from "../CenterLayout";

const MainFooter = () => {
  return (
    <div className="w-full bg-white py-8 px-2 lg:px-5 text-[15px]">
      <CenterLayout customBg={true} noPadding={true}>
        <div className="flex flex-row flex-wrap gap-9 space-x-4">
          <div className="flex flex-col  max-w-[350px] md:mr-5 space-y-4">
            <Logo className="self-start" />
            <p className="">
              Best information about the company gies here but now lorem ipsum
              Best information about the company gies here but now lorem ipsum
            </p>
            <div className="socials flex items-center space-x-1 flex-wrap lg:space-x-3">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.5 16.5662C23.5 17.7803 23.35 18.9944 23.35 18.9944C23.35 18.9944 23.2038 20.0275 22.7537 20.4831C22.1838 21.0803 21.5444 21.0831 21.2509 21.1178C19.1519 21.2697 16 21.2744 16 21.2744C16 21.2744 12.1 21.2388 10.9 21.1244C10.5662 21.0616 9.81625 21.0803 9.24625 20.4831C8.79625 20.0275 8.65 18.9944 8.65 18.9944C8.65 18.9944 8.5 17.7803 8.5 16.5662V15.4281C8.5 14.2141 8.65 13.0009 8.65 13.0009C8.65 13.0009 8.79625 11.9669 9.24625 11.5113C9.81625 10.9141 10.4556 10.9113 10.7491 10.8766C12.8481 10.7247 15.9972 10.7247 15.9972 10.7247H16.0028C16.0028 10.7247 19.1519 10.7247 21.2509 10.8766C21.5444 10.9113 22.1838 10.9141 22.7537 11.5113C23.2038 11.9669 23.35 13.0009 23.35 13.0009C23.35 13.0009 23.5 14.2141 23.5 15.4281V16.5662ZM16 1C7.71531 1 1 7.71531 1 16C1 24.2837 7.71531 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1ZM14.4514 17.9453L18.5042 15.8453L14.4505 13.7303L14.4514 17.9453Z"
                    fill="#BDC4CD"
                  />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0175 18.8948C17.6103 18.8948 18.9022 17.6067 18.9022 16.0167C18.9022 14.4276 17.6103 13.1395 16.0175 13.1395C14.4247 13.1395 13.1328 14.4276 13.1328 16.0167C13.1328 17.6067 14.4247 18.8948 16.0175 18.8948ZM19.3392 13.0694H21.367C21.5986 13.0694 21.787 12.8819 21.787 12.6512V10.6272C21.787 10.3966 21.5986 10.2091 21.367 10.2091H19.3392C19.1076 10.2091 18.9192 10.3966 18.9192 10.6272V12.6512C18.9192 12.8819 19.1076 13.0694 19.3392 13.0694ZM23.5 21.7206C23.5 22.7031 22.7022 23.5 21.7169 23.5H10.2831C9.29875 23.5 8.5 22.7031 8.5 21.7206V10.2784C8.5 9.29594 9.29875 8.5 10.2831 8.5H21.7169C22.7022 8.5 23.5 9.29594 23.5 10.2784V21.7206ZM16 1C7.71531 1 1 7.71531 1 16C1 24.2837 7.71531 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1ZM20.5804 16.0171C20.5804 18.5268 18.5339 20.5696 16.0176 20.5696C13.5014 20.5696 11.4548 18.5268 11.4548 16.0171C11.4548 15.6008 11.5111 15.1967 11.617 14.8133H10.2136V21.3364C10.2136 21.568 10.4011 21.7555 10.6326 21.7555H21.4017C21.6342 21.7555 21.8217 21.568 21.8217 21.3364V14.8133H20.4183C20.5242 15.1967 20.5804 15.6008 20.5804 16.0171Z"
                    fill="#BDC4CD"
                  />
                </svg>
              </div>

              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.5 23.4859H20.3922V18.6222C20.3922 17.4625 20.3716 15.9709 18.7769 15.9709C17.1597 15.9709 16.9131 17.2347 16.9131 18.5397V23.4859H13.8081V13.4847H16.7875V14.8525H16.8306C17.245 14.0659 18.2594 13.2362 19.7716 13.2362C22.9187 13.2362 23.5 15.3072 23.5 18.0006V23.4859ZM10.3038 12.1187C9.30531 12.1187 8.5 11.3106 8.5 10.3159C8.5 9.32125 9.30531 8.51312 10.3038 8.51312C11.2975 8.51312 12.1047 9.32125 12.1047 10.3159C12.1047 11.3106 11.2975 12.1187 10.3038 12.1187ZM11.8581 23.4859H8.74656V13.4847H11.8581V23.4859ZM16 1C7.71531 1 1 7.71531 1 16C1 24.2837 7.71531 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1Z"
                    fill="#BDC4CD"
                  />
                </svg>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.9644 12.9409C21.97 13.0731 21.9738 13.2053 21.9738 13.3394C21.9738 17.4053 18.8781 22.0947 13.2175 22.0947C11.4794 22.0947 9.86219 21.5856 8.5 20.7128C8.74094 20.7409 8.98562 20.755 9.23406 20.755C10.6759 20.755 12.0025 20.2638 13.0562 19.4378C11.7091 19.4134 10.5728 18.5238 10.1809 17.3013C10.3694 17.3369 10.5616 17.3556 10.7603 17.3556C11.0406 17.3556 11.3125 17.3181 11.5712 17.2478C10.1631 16.9656 9.10281 15.7216 9.10281 14.2309C9.10281 14.2178 9.10281 14.2047 9.10281 14.1916C9.51719 14.4222 9.9925 14.5609 10.4969 14.5769C9.67094 14.0247 9.12719 13.0825 9.12719 12.0156C9.12719 11.4513 9.27906 10.9225 9.54437 10.4678C11.0622 12.3297 13.33 13.555 15.8875 13.6834C15.835 13.4584 15.8078 13.2231 15.8078 12.9822C15.8078 11.2825 17.1859 9.90438 18.8847 9.90438C19.7706 9.90438 20.5703 10.2784 21.1309 10.8766C21.8322 10.7388 22.4912 10.4828 23.0856 10.1303C22.8559 10.8484 22.3675 11.4513 21.7328 11.8328C22.3553 11.7578 22.9478 11.5928 23.5 11.3481C23.0875 11.965 22.5653 12.5069 21.9644 12.9409ZM16 1C7.71531 1 1 7.71531 1 16C1 24.2837 7.71531 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1Z"
                    fill="#BDC4CD"
                  />
                </svg>
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.8953 10.99L18.4834 10.9909C17.3762 10.9909 17.1616 11.5169 17.1616 12.2884V13.9909H19.8025L19.4584 16.6581H17.1616V23.5H14.4081V16.6581H12.1056V13.9909H14.4081V12.025C14.4081 9.74219 15.8022 8.5 17.8375 8.5C18.8125 8.5 19.6506 8.57219 19.8953 8.605V10.99ZM16 1C7.71625 1 1 7.71531 1 16C1 24.2837 7.71625 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1Z"
                    fill="#BDC4CD"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <h2 className="text-[#1C1C1C] text-[1rem] mb-2 font-bold">About</h2>
            <Link className="hover:underline" href="/about">
              About
            </Link>
            <Link className="hover:underline" href="/">
              Find Store
            </Link>
            <Link className="hover:underline" href="/">
              Categories
            </Link>
            <Link className="hover:underline" href="/">
              Blog
            </Link>
          </div>
          <div className="flex flex-col space-y-1">
            <h2 className="text-[#1C1C1C] text-[1rem] mb-2 font-bold">
              Partnership
            </h2>
            <Link className="hover:underline" href="/about">
              About
            </Link>
            <Link className="hover:underline" href="/">
              Find Store
            </Link>
            <Link className="hover:underline" href="/">
              Categories
            </Link>
            <Link className="hover:underline" href="/">
              Blog
            </Link>
          </div>
          <div className="flex flex-col space-y-1">
            <h2 className="text-[#1C1C1C] text-[1rem] mb-2 font-bold">
              Information
            </h2>
            <Link className="hover:underline" href="/about">
              About
            </Link>
            <Link className="hover:underline" href="/">
              Find Store
            </Link>
            <Link className="hover:underline" href="/">
              Categories
            </Link>
            <Link className="hover:underline" href="/">
              Blog
            </Link>
          </div>
          <div className="flex flex-col space-y-1">
            <h2 className="text-[#1C1C1C] text-[1rem] mb-2 font-bold">
              For users
            </h2>
            <Link className="hover:underline" href="/about">
              About
            </Link>
            <Link className="hover:underline" href="/">
              Find Store
            </Link>
            <Link className="hover:underline" href="/">
              Categories
            </Link>
            <Link className="hover:underline" href="/">
              Blog
            </Link>
          </div>

          <div className="flex flex-col space-y-1">
            <h2 className="text-[#1C1C1C] text-[1rem] mb-2 font-bold">
              Get App
            </h2>
            <Link className="hover:underline" href={"/"}>
              <img src="/images/others/applestore.svg" alt="" />
            </Link>
            <Link className="hover:underline" href={"/"}>
              <img src="/images/others/playstore.svg" alt="" />
            </Link>
          </div>
        </div>
      </CenterLayout>
    </div>
  );
};

export default MainFooter;
