import useCloseDrowpdown from '@/helpers/useCloseDrowpdown';
import { faAngleDown, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react'

function LangauagesDrowdown() {
    const [open, setOpen] = useState();
    const [language, setValue] = useState({ text: "English", img: "/languages/english.png" })
    const onClick = (img, text) => () => {
        console.log({ text: text, img })
        setOpen(false)
        setValue({ text: text, img })

    }
    const openDialog = (e) => {
        e.stopPropagation()
        if (e.target === e.currentTarget) {
            setOpen(!open)
        }
    }

    useCloseDrowpdown("langauagesDrowdown", setOpen)
    return (

        <div className={`flex cursor-pointer relative w-30 bg-c-gray-light items-center justify-center rounded-l-full min-w-[120px] text-5xs`} onClick={openDialog}
            id="langauagesDrowdown">

            <span className="pointer-events-none flex items-center gap-3" >
                <span onClick={onClick} className="flex items-center gap-2 justify-center duration-200 mx-1 text-white hover:text-c-orange py-1">
                    <Image src={language.img} alt="" width={15} height={10} />
                    {language.text}
                </span>
                <FontAwesomeIcon
                    icon={faAngleDown}
                    className={`text-c-gray-font duration-200 relative top-0.5 ${open ? "rotate-180" : "rotate-0"} `}
                />

            </span>




            <div className={`w-full overflow-hidden duration-[320ms] ease-out flex flex-col absolute top-[calc(100%_+_12px)] bg-white text-c-gray-text shadow-slate-400 shadow-md`}

                style={{
                    maxHeight: open ? "324px" : "0px",

                }}
            >

                {
                    language.text !== "English"
                        ? <span onClick={onClick("/languages/english.png", "English")} className="flex items-center gap-2 duration-200 border-b-c-gray-text border-b-[1px] mx-1 text-c-gray-text hover:text-c-orange py-1">
                            <Image src={"/languages/english.png"} alt="" width={15} height={10} />
                            English
                        </span>
                        : null
                }

                {
                    language.text !== "French"
                        ? <span onClick={onClick("/languages/french.jpg", "French")} className="flex  items-center gap-2 duration-200 border-b-c-gray-text border-b-[1px] mx-1 text-c-gray-text hover:text-c-orange py-1">
                            <Image src={"/languages/french.jpg"} alt="" width={15} height={10} />
                            French
                        </span>
                        : null
                }
                {
                    language.text !== "German"
                        ? <span onClick={onClick("/languages/german.png", "German")} className="flex  items-center gap-2 duration-200 mx-1 text-c-gray-text hover:text-c-orange py-1 pb-2  ">
                            <Image src={"/languages/german.png"} alt="" width={15} height={10} />
                            German
                        </span>
                        : null
                }






            </div>
        </div >
    )
}


export default LangauagesDrowdown