import React, { useState } from 'react'
import NavButtons from './headerParts/navButtons'
import SearchHeader from './headerParts/searchHeader';
import PromotionHeader from './headerParts/promotionHeader';


const Header = () => {
    const [open, setOpen] = useState();
    const [value, setValue] = useState({ text: "English", img: "/languages/english.png" })
    const onClick = (img) => (e) => {

        setOpen(false)
        setValue({ text: e.target.textContent, img })

    }
    const openDialog = (e) => {
        e.stopPropagation()
        if (e.target === e.currentTarget) {
            setOpen(!open)
        }
    }
    return (
        <header className='flex items-center flex-col w-full '>


            <PromotionHeader />

            <SearchHeader />





            <NavButtons />


        </header>
    )
}


export default Header