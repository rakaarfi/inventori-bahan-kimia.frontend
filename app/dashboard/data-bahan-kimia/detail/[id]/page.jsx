"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { handleUpdate } from "@/utils/api";
import DataBahanKimiaDetail from "@/components/DataBahanKimia/DataBahanKimiaDetail";
import { readById } from "@/utils/api";


export default function page() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const routeUrl = "data_bahan_kimia";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await readById({ routeUrl, id });
                setData({
                    ...responseData.data_bahan_kimia,
                    factory_name: responseData.factory_name,
                    location_room: responseData.location_room,
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

            <DataBahanKimiaDetail
                data={data}
                onUpdate={handleUpdate}
                routeUrl={routeUrl}
            />
        </div>
    </>
    );
}