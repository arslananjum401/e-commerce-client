import React from 'react'
import PagesDropdown from '../Dropdowns/pagesDropwDown'
import LangauagesDrowdown from '../Dropdowns/langauagesDrowdown'

const PromotionHeader = () => {
    return (
        <div className="bg-c-black w-full flex justify-center items-center h-9   px-7">

            <div className="max-w-[1200px] w-full justify-between flex items-center ">





                <div className="flex text-white text-6xs gap-3 ">
                    <p className="">Free Delivery:
                        <span className="text-c-gray-font"> Take advantage of our time to save event</span>
                    </p>
                    |
                    <p className="">Free Returns *
                        <span className="text-c-gray-font"> Satisfaction guaranteed</span>
                    </p>

                </div>


                <div className="flex w-1/5">
                    <PagesDropdown />
                    <LangauagesDrowdown />
                </div>





            </div>

        </div>
    )
}

export default PromotionHeader