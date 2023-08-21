import React, { useEffect } from 'react'

const useCloseDrowpdown = (id, cb) => {
    useEffect(() => {
        document.addEventListener("click", (event) => {
            const targetElement = document.getElementById(id)
            if (event.target !== targetElement) {
                if (cb) {
                    cb(false)
                }
            }

        })
        return () => {
            document.removeEventListener("click", (event) => {
                const targetElement = document.getElementById(id)
                if (event.target !== targetElement) {
                    if (cb) {
                        cb(false)
                    }
                }

            })
        }
    }, [id, cb])
}

export default useCloseDrowpdown