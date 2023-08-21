import Link from 'next/link'
import React from 'react'

const NavButtons = () => {
    return (
        <div className="flex w-full justify-between my-4 max-w-[1200px] px-5">
            <nav className="flex items-center w-3/5 gap-10 ">
                <Link href="/" className="text-5xs text-c-black hover:text-c-orange duration-200">Home</Link>
                <Link href="/shop" className="text-5xs text-c-black hover:text-c-orange duration-200  ">Shop</Link>
                <Link href="/aboutus" className="text-5xs text-c-black hover:text-c-orange duration-200">About us</Link>
                <Link href="/contactus" className="text-5xs text-c-black hover:text-c-orange duration-200">Contact us</Link>
            </nav>

            <div className="">
                <span className="text-4xs text-[#747474]">Call Free Support <Link href="tel:+923434425939" className="hover:text-c-orange duration-200">+92-343-4425939</Link></span>
            </div>
        </div>
    )
}

export default NavButtons