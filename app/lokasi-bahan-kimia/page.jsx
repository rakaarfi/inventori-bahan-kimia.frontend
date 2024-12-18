"use client";

import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
// import { fetcher } from "@/lib/fetcher";

import LokasiBahanKimiaTable from "@/components/LokasiBahanKimiaTable";


export default function page() {
    const [data, setData] = useState([]);

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/lokasi_bahan_kimia/read_lokasi_bahan_kimia");
                setData(response.data);
            }
            catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };
        fetchData();
    }, []);

    const handleUpdate = async (id, updatedData) => {
        try {
            axios.post(`http://127.0.0.1:8000/lokasi_bahan_kimia/update/${id}`, updatedData);
            console.log(`Updated ID: ${id}`);
            alert("Data updated successfully!", `${id}`);
        }
        catch (err) {
            console.error("Error updating data:", err.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            axios.post(`http://127.0.0.1:8000/lokasi_bahan_kimia/delete/${id}`);
            console.log(`Deleted ID: ${id}`);
            alert("Data deleted successfully!", `${id}`);
        }
        catch (err) {
            console.error("Error deleting data:", err.message);
        }
    };

    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
                <h1 className="text-2xl font-bold text-center mb-4 whitespace-nowrap">Daftar Lokasi Bahan Kimia</h1>
                <Link href="/lokasi-bahan-kimia/add" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 whitespace-nowrap">
                    Input Lokasi Bahan Kimia
                </Link>
                <LokasiBahanKimiaTable data={data} />
            </div>
        </>
    );
}
