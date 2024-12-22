'use client';

import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import axios from 'axios';
import DataPabrikPembuatTable from '@/components/DataPabrikPembuatTable'
import React, { useState, useEffect } from 'react'

export default function page() {
    const [data, setData] = useState([]);

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/data_pabrik_pembuat/read");
                setData(response.data);
            }
            catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
                <h1 className="text-2xl font-bold text-center mb-4 whitespace-nowrap">Daftar Data Pabrik Pembuat</h1>
                <Link href="/data-pabrik-pembuat/add" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 whitespace-nowrap">
                    Input Data Pabrik Pembuat
                </Link>
                <DataPabrikPembuatTable data={data} />
            </div>
        </>
    )
}
