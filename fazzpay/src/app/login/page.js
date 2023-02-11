'use client'
import Link from 'next/link'
import Image from 'next/image'
import hero from '../../assets/authbackground.png'
import innerHero from '../../assets/png-phone.png'

export default function Login() {
  return (
    <div className="container">
      <div className="flex flex-wrap">
        {/* Hero start */}
        {/* desktop start*/}
        <div className="hidden md:w-[60%] lg:w-[60%] md:block lg:block relative">
          <Image className="bg-auto bg-no-repeat bg-center absolute" src={hero} alt="hero" />
          <Link href='/' className="absolute text-secondary text-[29px] font-bold top-8 left-20">FazzPay</Link>
          <Image className="absolute left-32 top-24" src={innerHero} alt="" />
          <h2 className="absolute text-secondary text-[24px] font-bold bottom-[6rem] left-20">App that Covering Banking Needs.</h2>
          <p className="absolute text-secondary text-[16px] font-normal -bottom-[2rem] left-20">FazzPay is an application that focussing in banking needs for all users <br />in the world. Always updated and
            always following world trends. <br />5000+ users registered in FazzPay everyday with worldwide <br />users coverage.</p>
        </div>
        {/* desktop end*/}
        {/* Hero end */}
        {/* FORM Start */}
        <div className="w-full self-center md:w-[40%] lg:w-[40%]">
          <Link href='/'><h1 className="text-center text-primary font-bold text-[26px] mt-10 md:hidden lg:hidden">Fazzpay</h1></Link>
          <h2 className="text-center text-[#3A3D42] font-bold text-[24px] mt-16 md:hidden lg:hidden">Login</h2>
          {/* desktop start */}
          <h1 className="hidden md:block md:pl-12 md:mt-16 md:text-[24px] md:font-bold lg:mt-28">Start Accessing Banking Needs<br /> With All Devices and All Platforms<br /> With 30.000+ Users</h1>
          <h2 className="hidden md:block md:pl-12 md:mt-8 md:text-[16px] md:font-normal md:leading-[30px]">Transfering money is eassier than ever, you can access<br /> FazzPay wherever you are. Desktop, laptop, mobile phone?<br /> we cover all of that for you!</h2>
          {/* desktop end*/}
          <div className="container flex flex-wrap">
            <p className="text-center mx-auto text-[#3A3D4299] font-normal text-[16px] mt-4 md:hidden lg:hidden">Login to your existing account to access <br />all the features in FazzPay.</p>
            <input type="text" placeholder="Enter your e-mail" className="border-t-transparent border-r-transparent border-l-transparent mx-auto input input-bordered w-full max-w-[85vw] mt-16 md:w-[80%]" />
            <input type="password" placeholder="Enter your password" className="border-t-transparent border-r-transparent border-l-transparent mx-auto input input-bordered w-full max-w-[85vw] mt-4 md:w-[80%] md:mt-12" />
            <Link href='/resetpassword' className="mx-auto text-[#3A3D42CC] pl-[11rem] mt-4 md:pl-[17.5rem]">Forgot password?</Link>
            <button className="btn btn-ghost normal-case bg-[#DADADA] hover:bg-primary hover:text-secondary px-[8.7rem] mt-16 mx-auto md:w-[80%] md:mt-[5.5rem]">Login</button>
          </div>
          <p className="font-normal text-[16px] text-[#3A3D42] text-center mt-4 pb-14">Don’t have an account? Let’s <Link href="/signup"><span className="text-primary font-bold">Sign Up</span></Link></p>
        </div>
        {/* FORM end */}
      </div>
    </div>
  )
}
