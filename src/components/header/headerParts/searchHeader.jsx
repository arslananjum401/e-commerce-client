import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import CategoriesDropDown from '../Dropdowns/categoriesDropdown'
import Image from 'next/image'
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

const SearchHeader = () => {
    const router = useRouter()
    return (
        <div className="flex flex-row justify-between items-center w-full py-4 max-w-[1200px]   px-5">

            <div className="w-1/12 lg:w-1/5 cursor-default">
                <Image className="cursor-pointer " src={"/raha-black.gif"} alt="" height={30} width={30}
                    onClick={() => router.push("/")} />
            </div>

            <div className="flex flex-row border-c-gray-dark border-[1.5px] w-1/2 pr-3 rounded-full shadow-sm max-w-[550px]"
            >
                <CategoriesDropDown >
                    <span className="text-center hover:bg-[#dedede] py-1 duration-300">All Categories</span>
                    <span className="text-center hover:bg-[#dedede] py-1 duration-300">Men</span>
                    <span className="text-center hover:bg-[#dedede] py-1 duration-300">Women</span>
                    <span className="text-center hover:bg-[#dedede] py-1 duration-300">Kids</span>
                </CategoriesDropDown>

                <div className="rounded-full flex flex-row gap-2 items-center w-4/5 justify-between ">
                    <input type="search" placeholder="Search product" className="text-c-gray-dark text-5xs py-3 px-3 outline-none border-none flex-1" />
                    <FontAwesomeIcon icon={faSearch} className='text-c-gray-font' />
                </div>
            </div>

            <div className="flex flex-row gap-3 items-center justify-center w-1/3  lg:w-1/5">

                <span className="flex flex-row gap-4 text-c-black text-5xs">
                    <Link href="/login" className="hover:text-c-orange duration-300">Login</Link>
                    /
                    <Link href="/register" className="hover:text-c-orange duration-300">Register</Link>
                </span>
                <span className="border-c-gray-font rounded-3xl text-c-gray-text  border-[1px] px-3 py-2 cursor-pointer hover:border-c-orange hover:text-c-orange duration-200 flex items-center">
                    <FontAwesomeIcon icon={faCartShopping} className='mr-2' />
                    <span className="whitespace-nowrap">2 Item(S)</span>
                </span>
            </div>

        </div>
    )
}

export default SearchHeader