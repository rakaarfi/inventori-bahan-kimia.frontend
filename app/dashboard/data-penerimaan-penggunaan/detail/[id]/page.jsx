"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { handleUpdate } from "@/utils/api";
import DataPenerimaanPenggunaanDetail from "@/components/DataPenerimaanPenggunaan/DataPenerimaanPenggunaanDetail";
import { readById } from "@/utils/api";


export default function page() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const routeUrl = "data_penerimaan_penggunaan";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await readById({ routeUrl, id });
                setData({
                    ...responseData.data_penerimaan_penggunaan,
                    chemical_material_name: responseData.chemical_material_name
                });
            } catch (err) {
                setError("Failed to fetch data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!data) return <p>No data found</p>;

    return (
        <>
        <div className="lg:mx-[20rem] mx-[9rem] lg:my-0 my-24">
            
            <DataPenerimaanPenggunaanDetail
                data={data}
                error={error}
                onUpdate={handleUpdate}
                routeUrl={routeUrl}
            />
        </div>
    </>
    );
}