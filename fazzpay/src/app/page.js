'use client'
import Image from 'next/image'
import ava from '../assets/ava.png'
import bgPrimary from '../assets/landingPage/bg-primary.png'
import innerHero from '../assets/landingPage/png-phone.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='container'>
      {/* Navbar start */}
      <div className="navbar bg-primary/80 fixed top-0 left-0 z-50 px-6 py-6 rounded-b-lg">
        <div className="flex-1">
          <Link href='/' className="btn btn-ghost normal-case text-[29px] font-bold text-secondary">FazzPay</Link>
        </div>
        <div className="flex-none gap-2">
          <Link href='login' className='btn btn-primary bg-primary text-secondary outline outline-1'>Login</Link>
          <Link href='signup' className='btn btn-primary bg-secondary text-primary hover:bg-slate-200 hover:text-primary'>Sign Up</Link>
          {/* Dropdown start */}
          {/* <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full outline outline-secondary/60 outline-2">
                <Image src={ava} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div> */}
          {/* Dropdown end */}
        </div>
      </div>
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
