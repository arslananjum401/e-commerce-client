import useCloseDrowpdown from "@/helpers/useCloseDrowpdown.js";
import { faAngleDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useState, useMemo, useEffect } from "react"
function PagesDropdown() {
    const router = useRouter()
    const [open, setOpen] = useState();
    const [value, setValue] = useState({ text: "My Account", path: "/account" })
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
    const pages = useMemo(() => [
        { text: "My Wishlist", path: "/wishlist" },
        { text: "My Account", path: "/account" },
        { text: "Sign in", path: "/signin" },
        { text: "Compare Products", path: "/compare" }
    ], [])
    useEffect(() => {
        let check = false;
        pages.forEach((page) => {
            if (page.path === router.pathname) {
                check = { path: page.path, text: page.text }
            }
        })
        if (check) {
            setValue(check)
        } else
            setValue({ text: "My Account", path: "/account" })

    }, [router, pages])


    const Option = ({ text, path, index }) => {

        const onClick = () => {
            if (router.pathname !== path) {
                router.push(path)
            }
        }

        return (
            path !== router.pathname ?
                <span onClick={onClick} className={`flex items-center gap-2 duration-200 mx-3 text-c-gray-text hover:text-c-orange py-1.5 ${index < (pages.length - 1) ? "border-b-c-gray-font border-b-[1px]" : ""}`}>
                    {text}
                </span>
                : null
        )
    }
    useCloseDrowpdown("pagesDowndown", setOpen)
    return (
        <div className="flex cursor-pointer relative w-36 bg-c-gray-light items-center justify-center rounded-l-full min-w-[120px] text-5xs"
            onClick={openDialog}
            id="pagesDowndown"
        >
            <span className="pointer-events-none flex items-center gap-1" >
                <span onClick={onClick} className="mx-1 text-white hover:text-c-orange py-1">
                    {value.text}
                </span>

                <FontAwesomeIcon
                    icon={faAngleDown}
                    className={`text-c-gray-font duration-200 relative top-0.5 ${open ? "rotate-180" : "rotate-0"}`}
                />
            </span>
            <div className={`w-full overflow-hidden duration-[400ms] ease-linear flex flex-col absolute top-[calc(100%_+_12px)] bg-white text-c-gray-text shadow-slate-400 shadow-md`}

                style={{
                    maxHeight: open ? "324px" : "0px",

                }}
            >
                {pages.map((page, index) => {
                    return (
                        <Option key={index} path={page.path} text={page.text} index={index} />

                    )
                })}

            </div>
        </div>
    )
}


export default PagesDropdown