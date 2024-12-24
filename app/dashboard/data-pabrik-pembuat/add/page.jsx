import React from 'react'

import { Navbar } from "@/components/Navbar";
import DataPabrikPembuat from '@/components/DataPabrikPembuat';

export default function page() {
    return (
        <>
            <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
                <DataPabrikPembuat />
            </div>
        </>
    )
}