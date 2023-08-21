import useCloseDrowpdown from '@/helpers/useCloseDrowpdown.js';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { Router, useRouter } from 'next/router';
import React, { useState, useEffect, useMemo } from 'react'

const CategoriesDropDown = ({ children, width = true }) => {

    const [open, setOpen] = useState();
    const [value, setValue] = useState("All Categories")
    const onClick = (e) => {

        setOpen(false)
        setValue(e.target.textContent)

    }
    const openDialog = (e) => {
        e.stopPropagation()
        if (e.target === e.currentTarget) {
            setOpen(!open)
        }
    }

    useCloseDrowpdown("CategoriesDropDown", setOpen)
    return (
        <div className={`flex cursor-pointer relative w-1/5 bg-c-gray-light items-center justify-center rounded-l-full min-w-[120px] bg-[#dedede] text-5xs`} onClick={openDialog}
            id="CategoriesDropDown">
            <span className="pointer-events-none" >
                <span className="text-c-gray-text text-center mr-2 pointer-events-none">
                    {value}
                </span>
                <FontAwesomeIcon icon={faCaretDown} className={`text-c-gray-font duration-200 ${open ? "rotate-180" : "rotate-0"} `} />
            </span>
            <div className="w-full overflow-hidden duration-200 ease-linear flex flex-col absolute top-[calc(100%_+_5px)]  rounded-xl bg-white text-c-gray-text shadow-md"

                style={{
                    maxHeight: open ? "324px" : "0px",
                    maxWidth: open ? "320px" : "20px"
                }}
            >
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, { onClick })
                )}

            </div>
        </div >
    )
}


export default CategoriesDropDown