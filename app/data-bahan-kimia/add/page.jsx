import DataBahanKimia from '@/components/DataBahanKimia'
import { Navbar } from '@/components/Navbar'
import React from 'react'

export default function page() {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
                <DataBahanKimia />
            </div>
        </>
    )
}