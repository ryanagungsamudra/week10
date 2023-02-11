import React from 'react'
import ava from '../../assets/ava.png'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto">
        <div className="flex items-center pl-6 pt-4">
            <div className="w-[20%]">
                <Image className="w-[70%]" src={ava} alt="" />
            </div>
            <div className="w-[60%]">
                <h1>Hello, <br /><span className="font-bold">Robert Chandler</span></h1>
            </div>
            <div className="w-[20%]">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap items-center pl-6 w-[89vw] h-[20vh] mt-6 rounded-[20px] bg-primary mx-auto">
            <p className="w-full text-secondary font-normal text-sm pt-4">Balance</p>
            <h1 className="w-full text-secondary font-bold text-2xl">Rp120.000</h1>
            <p className="w-full text-secondary font-semibold text-sm pb-4">+62 813-9387-7946</p>
        </div>
        <div className="flex justify-center pt-6">
            <div className="btn btn-ghost bg-slate-200 normal-case px-[3.6rem] mr-2 rounded-[10px]">Transfer</div>
            <div className="btn btn-ghost bg-slate-200 normal-case px-[3.6rem] ml-2 rounded-[10px]">Top Up</div>
        </div>
        <div className="flex justify-between px-8 pt-8">
            <h1 className="font-bold text-[18px]">Transaction History</h1>
            <p className="font-semibold text-[14px] text-primary">See all</p>
        </div>
        {/* Transaction history start */}
        <div className="flex items-center py-6 pl-6 shadow-lg">
            <div className="w-[20%]">
                <Image className="w-[70%]" src={ava} alt="" />
            </div>
            <div className="w-[50%]">
                <h1 className="text-base font-bold">Ryan Agung Samudra</h1>
                <p className="text-sm font-normal">Transfer</p>
            </div>
            <div className="w-[30%]">
                <h1 className="text-lg font-bold text-[#1EC15F]">+Rp50.000</h1>
            </div>
        </div>
        <div className="flex items-center py-6 pl-6 shadow-lg">
            <div className="w-[20%]">
                <Image className="w-[70%]" src={ava} alt="" />
            </div>
            <div className="w-[50%]">
                <h1 className="text-base font-bold">Ryan Agung Samudra</h1>
                <p className="text-sm font-normal">Subscription</p>
            </div>
            <div className="w-[30%]">
                <h1 className="text-lg font-bold text-[#FF5B37]">-Rp49.000</h1>
            </div>
        </div>
        <div className="flex items-center py-6 pl-6 shadow-lg">
            <div className="w-[20%]">
                <Image className="w-[70%]" src={ava} alt="" />
            </div>
            <div className="w-[50%]">
                <h1 className="text-base font-bold">Ryan Agung Samudra</h1>
                <p className="text-sm font-normal">Subscription</p>
            </div>
            <div className="w-[30%]">
                <h1 className="text-lg font-bold text-[#FF5B37]">-Rp149.000</h1>
            </div>
        </div>
        <div className="flex items-center py-6 pl-6 shadow-lg pb-16">
            <div className="w-[20%]">
                <Image className="w-[70%]" src={ava} alt="" />
            </div>
            <div className="w-[50%]">
                <h1 className="text-base font-bold">Ryan Agung Samudra</h1>
                <p className="text-sm font-normal">Transfer</p>
            </div>
            <div className="w-[30%]">
                <h1 className="text-lg font-bold text-[#1EC15F]">+Rp150.000</h1>
            </div>
        </div>
        {/* Transaction history end */}
    </div>
  )
}
