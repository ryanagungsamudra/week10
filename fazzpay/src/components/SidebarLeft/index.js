import Image from "next/image";
import React from "react";
import dashboard from "../../assets/home/grid.png";
import transfer from "../../assets/home/arrow-up-side.svg";
import topup from "../../assets/home/plus.png";
import profile from "../../assets/home/user.png";
import logout from "../../assets/home/log-out.png";

export default function SidebarLeft() {
  return (
    <div className="hidden md:block md:w-[30%] md:shadow-lg md:pl-[1rem]">
      <div className="inline-flex w-full mt-[4.5rem]">
        <Image src={dashboard} alt="" />
        <p className="text-lg font-bold ml-8">Dashboard</p>
      </div>
      <div className="inline-flex w-full py-[2.5rem]">
        <Image src={transfer} alt="" />
        <p className="text-lg font-bold ml-8">Transfer</p>
      </div>
      <div className="inline-flex w-full cursor-pointer">
        <Image src={topup} alt="" />
        {/* <p className="text-lg font-bold ml-8">Top Up</p> */}
        <label
          htmlFor="my-modal-3"
          className="text-lg font-bold ml-8 cursor-pointer"
        >
          Top Up
        </label>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        {/* Modal start */}
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Top Up</h3>
            <p className="py-4">Enter the amount of money, and click submit</p>
            <input placeholder="input amount" className="border rounded-2xl placeholder:px-4 py-4" />
          </div>
        </div>
        {/* Modal End */}
      </div>

      <div className="inline-flex w-full py-[2.5rem]">
        <Image src={profile} alt="" />
        <p className="text-lg font-bold ml-8">Profile</p>
      </div>
      <div className="inline-flex w-full mt-[24rem]">
        <Image src={logout} alt="" />
        <p className="text-lg font-bold ml-8">Logout</p>
      </div>
    </div>
  );
}
