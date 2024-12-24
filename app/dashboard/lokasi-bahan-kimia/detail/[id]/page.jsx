"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import LokasiBahanKimiaDetail from "@/components/LokasiBahanKimiaDetail";
import Link from "next/link";
import { handleUpdate, handleDelete } from "@/components/HandleAPI";

export default function page() {
    const { id } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiUrl = "http://127.0.0.1:8000/";
    const routeUrl = "lokasi_bahan_kimia";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}${routeUrl}/read/${id}`);
                setData(response.data);
            } catch (err) {
                setError("Failed to fetch data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        
        if (id) {
            fetchData();
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!data) return <p>No data found</p>;

    return (
        <>
        <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
            <h1 className="text-2xl font-bold text-center mb-4 whitespace-nowrap">Detail Lokasi Bahan Kimia</h1>
            <div className="flex flex-row justify-between items-center">
                <Link href="/dashboard/lokasi-bahan-kimia/detail" className="bg-blue-500 text-white px-4 py-2 rounded mx-10 mt-4">
                    Daftar Lokasi Bahan Kimia
                </Link>
            </div>
            <LokasiBahanKimiaDetail
                data={data}
                onUpdate={handleUpdate}
                apiUrl={apiUrl}
                routeUrl={routeUrl}
            />
        </div>
    </>
    );
}