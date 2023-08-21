import axiosInstance from '@/utils/axios.instance';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const categoriesInfo = [
    { heading: "#For Women", tagline: "Sale 10% Off Almost Everything.", categoryName: "Women" },
    { heading: "#For Men", tagline: "Big Sale off Final Sale Items. Caught in the moment.", categoryName: "Men" },
    { heading: "#For Kids", tagline: "Sale 40% Off Almost Everything.", categoryName: "Kids" },
]

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function getCategories() {
            try {
                const { data } = await axiosInstance.get("/categories/all")

                const categoryDataUpdated = data.map(category => {
                    categoriesInfo.forEach(categoryInfo => {
                        if (categoryInfo.categoryName === category.categoryName) {
                            category = { ...category, ...categoryInfo }
                            console.log(category)
                        }
                    })
                    return category
                })

                setCategories(categoryDataUpdated)
            } catch (error) {
                console.log(error)
            }
        }
        getCategories()

    }, [])



    return (
        <div className="flex mt-4 justify-between px-10 gap-5 w-full">


            {categories.map(category => {
                const imageSrc = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/categories/categoryImage/${category._id}/${category?.images[0]}`;
                return (
                    <Category
                        key={category._id}
                        imageSrc={imageSrc}
                        heading={category.heading}
                        tagline={category.tagline}
                    />
                )
            })}
        </div>
    )
}


function Category({ imageSrc, heading, tagline }) {
    const [hover, setHover] = useState(false)


    return (
        <div className="w-[32%] relative max-w-[435px] bg-slate-400 h-[585px] overflow-hidden cursor-pointer flex items-end"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>

            <div className="w-full h-full absolute top-0">
                <Image src={imageSrc} className="w-full h-full " unoptimized alt="" width={440} height={585} />
                <div className={`absolute w-full h-full duration-200 blur-md ${hover ? "opacity-50" : "opacity-0"} bg-white top-0`}>
                </div>
            </div>
            <div className="z-10 relative text-c-black mb-14 ml-5">
                <div className="mb-10">
                    <h1 className="text-c-black text-[40px] font-[600]">{heading}</h1>
                    <h4 className="text-3xs font-[500]">{tagline}</h4>
                </div>
                <button className="text-2xs font-[600] duration-200 border-b-c-black py-1.5 hover:text-c-orange hover:border-b-c-orange border-b-2">
                    Discover Now
                </button>
            </div>
        </div>
    )
}

export default Categories