'use client';

import React, { useState, useEffect } from "react";
import { fetchData } from "@/utils/api";
import ChemicalForm from "./ChemicalForm";
import Link from "next/link";
import { ListButton } from "../ButtonComponents";

export default function DataBahanKimiaDetail({
    data,
    routeUrl,
    onUpdate,
}) {
    const [formData, setFormData] = useState(data);
    const [dynamicOptions, setDynamicOptions] = useState({});

    useEffect(() => {
        fetchData("lokasi_bahan_kimia").then((response) =>
            setDynamicOptions((prev) => ({ ...prev, id_location: response }))
        );
        fetchData("data_pabrik_pembuat").then((response) =>
            setDynamicOptions((prev) => ({ ...prev, id_factory: response }))
        );
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Validasi Jumlah
        if (name === "max_amount" && parseFloat(value) < 0) {
            alert("Jumlah tidak boleh negatif.");
            return;
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(e, formData.id, routeUrl);
    };

    return (
        <div className="container mx-auto p-4 font-jkt">
            <div className="border rounded-3xl p-4 shadow-lg dark:bg-[#12171c] bg-[#ffffff]">
                <h1 className="text-2xl font-bold text-center mb-2 whitespace-nowrap">Detail Data Bahan Kimia</h1>
                <div className="flex flex-row justify-between items-center mb-4">
                    <ListButton
                        href="/dashboard/data-bahan-kimia/detail"
                        text="Daftar Data Bahan Kimia"
                    />
                </div>
                <ChemicalForm
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    dynamicOptions={dynamicOptions}
                />
            </div>
        </div>
    );
}
