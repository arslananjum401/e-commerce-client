import React from 'react'
import Header from "../components/header"
const Layout = ({ Fragment = true, children }) => {
    return Fragment ? (
        <>
            <Header />
            {children}
        </>
    ) : (
        <>
            <Header />
            <main {...props}>{children}</main>
        </>
    );
}

export default Layout