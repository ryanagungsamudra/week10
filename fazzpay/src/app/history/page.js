import React from "react";
import Image from "next/image";

import dashboard from "../../assets/home/grid.png";
import transfer from "../../assets/home/arrow-up-side.svg";
import topup from "../../assets/home/plus.png";
import profile from "../../assets/home/user.png";
import logout from "../../assets/home/log-out.png";
import arrowdown from "../../assets/home/arrow-down.png";
import arrowup from "../../assets/home/arrow-up.png";
import graphic from "../../assets/home/graphic.png";
import samuel from "../../assets/samuel.png";
import spotify from "../../assets/spotify.png";
import netflix from "../../assets/netflix.png";
import boby from "../../assets/boby.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SidebarLeft from "@/components/SidebarLeft";

export default function History() {
  const navbarClass = {
    color: "navbar bg-secondary/80 fixed top-0 left-0 z-50s py-6 rounded-b-lg",
    title: "btn btn-ghost normal-case text-[29px] font-bold text-primary",
  };
  return (
    <>
      <Navbar navbarClass={navbarClass} />

      <div className="container mx-auto mt-[5rem] md:flex md:px-[6rem]">
        {/* Left Side Start */}
        <SidebarLeft />
        {/* Left Side End */}

        {/* Right Side Start */}
        <div className="w-full md:w-[70%] md:border">
          <div className="flex items-center pl-6 pt-[2rem] md:hidden">
            <div className="w-[50%] flex-1">
              <h1>
                Hello, <br />
                <span className="font-bold">Ryan Agung Samudra</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center pl-6 w-[89vw] h-[20vh] mt-6 rounded-[20px] bg-primary mx-auto md:w-full md:h-[190px] md:justify-between md:pl-[5rem] md:hidden">
            <div className="md:w-1/2">
              <p className="w-full text-secondary font-normal text-sm pt-4 md:text-[18px]">
                Balance
              </p>
              <h1 className="w-full text-secondary font-bold text-2xl md:text-[40px] md:py-5">
                Rp120.000
              </h1>
              <p className="w-full text-secondary font-semibold text-sm pb-4 md:text-[14px]">
                +62 813-9387-7946
              </p>
            </div>
            <div className="hidden md:flex md:flex-col">
              <div className="btn btn-ghost bg-slate-200 normal-case px-[3.6rem] rounded-[10px] md:w-[162px] md:mb-2 md:mr-10 md:px-[0] md:bg-secondary/20 md:border-secondary md:text-secondary md:text-[18px]">
                Transfer
              </div>
              <div className="btn btn-ghost bg-slate-200 normal-case px-[3.6rem] rounded-[10px] md:w-[162px] md:mt-2 md:mr-10 md:px-[0] md:bg-secondary/20 md:border-secondary md:text-secondary md:text-[18px]">
                Top Up
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-6 md:hidden">
            <div className="btn btn-ghost bg-slate-200 normal-case px-[3.6rem] mr-2 rounded-[10px]">
              Transfer
            </div>
            <div className="btn btn-ghost bg-slate-200 normal-case px-[3.6rem] ml-2 rounded-[10px]">
              Top Up
            </div>
          </div>
          <div className="md:flex md:mt-[5rem]">
            {/* main-center start */}
            <div className="md:w-full">
              <div className="flex justify-between px-8 pt-8 md:-mt-[4rem]">
                <h1 className="font-bold text-[18px]">Transaction History</h1>
                <select className="select w-1/5 max-w-xs mt-[-0.7rem]">
                  <option disabled selected>
                    Select Filter
                  </option>
                  <option>Name</option>
                  <option>Status</option>
                  <option>Amount</option>
                </select>
              </div>
              {/* Transaction history start */}
              <div className="flex flex-wrap pb-10">
                <div className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 md:shadow-none">
                  <div className="w-[20%]">
                    <Image
                      className="w-[60%] p-2"
                      src={samuel}
                      alt=""
                    />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Samuel Suhi</h1>
                    <p className="text-sm font-normal">Transfer</p>
                  </div>
                  <div className="w-[35%]">
                    <h1 className="text-lg font-bold text-end text-[#1EC15F]">
                      +Rp50.000
                    </h1>
                  </div>
                </div>
                <div className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 md:shadow-none">
                  <div className="w-[20%] ">
                    <Image
                      className="w-[60%] p-2"
                      src={spotify}
                      alt=""
                    />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Spotify</h1>
                    <p className="text-sm font-normal">Subscription</p>
                  </div>
                  <div className="w-[35%]">
                    <h1 className="text-lg font-bold text-end text-[#FF5B37]">
                      -Rp49.000
                    </h1>
                  </div>
                </div>
                <div className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 md:shadow-none">
                  <div className="w-[20%]">
                    <Image
                      className="w-[60%] p-2"
                      src={netflix}
                      alt=""
                    />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Netflix</h1>
                    <p className="text-sm font-normal">Subscription</p>
                  </div>
                  <div className="w-[35%]">
                    <h1 className="text-lg font-bold text-end text-[#FF5B37]">
                      -Rp149.000
                    </h1>
                  </div>
                </div>
                <div className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 md:shadow-none">
                  <div className="w-[20%]">
                    <Image
                      className="w-[60%] p-2"
                      src={boby}
                      alt=""
                    />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Bobi Sammy</h1>
                    <p className="text-sm font-normal">Transfer</p>
                  </div>
                  <div className="w-[35%]">
                    <h1 className="text-lg font-bold text-end text-[#1EC15F]">
                      +Rp1.150.000
                    </h1>
                  </div>
                </div>
                <div className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 md:shadow-none">
                  <div className="w-[20%]">
                    <Image
                      className="w-[60%] p-2"
                      src={boby}
                      alt=""
                    />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Bobi Sammy</h1>
                    <p className="text-sm font-normal">Transfer</p>
                  </div>
                  <div className="w-[35%]">
                    <h1 className="text-lg font-bold text-end text-[#1EC15F]">
                      +Rp1.150.000
                    </h1>
                  </div>
                </div>
                <div className="flex items-center pl-6 pr-6 h-20 shadow-lg w-full mb-4 md:shadow-none">
                  <div className="w-[20%]">
                    <Image
                      className="w-[60%] p-2"
                      src={boby}
                      alt=""
                    />
                  </div>
                  <div className="w-[45%]">
                    <h1 className="text-base font-bold">Bobi Sammy</h1>
                    <p className="text-sm font-normal">Transfer</p>
                  </div>
                  <div className="w-[35%]">
                    <h1 className="text-lg font-bold text-end text-[#1EC15F]">
                      +Rp1.150.000
                    </h1>
                  </div>
                </div>
              </div>
              {/* Transaction history end */}
            </div>
            {/* main-center-end */}
          </div>
        </div>
        {/* Right Side End */}
      </div>

      <Footer />
    </>
  );
}
