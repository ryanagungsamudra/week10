'use client'
import Image from 'next/image'
import ava from '../assets/ava.png'
import bgPrimary from '../assets/landingPage/bg-primary.png'
import innerHero from '../assets/landingPage/png-phone.png'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Home() {
  const navbarClass = {
    color : "navbar bg-primary/80 fixed top-0 left-0 z-50 py-6 rounded-b-lg",
    title : "btn btn-ghost normal-case text-[29px] font-bold text-secondary",
  }
  return (
    <div className='container'>
      {/* Navbar start */}
      <Navbar navbarClass={navbarClass}/>
      {/* Navbar End */}
      <Image className='absolute -z-10' src={bgPrimary} />
      <div className='container absolute -bottom-[13.5rem] z-0'>
          <div className='flex flex-wrap'>

            <div className='md:w-1/2 lg:w-1/2 pl-28 pt-24'>
              <h1 className='text-secondary font-extrabold text-[60px]'>Awesome App <br/>For Saving Time.</h1>
            <p className='text-secondary font-normal text-[18px] pt-16'>We bring you a mobile app for banking problems that <br/>oftenly wasting much of your times.</p>
              <div className='btn btn-primary bg-secondary text-primary px-12 mt-16'>Try It Free</div>
            </div>

            <div className='md:w-1/2 lg:w-1/2'>
              <Image src={innerHero}/>
            </div>
          </div>
      </div>
    </div>
  )
}
