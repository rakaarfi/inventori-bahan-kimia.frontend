'use client';

import React, { useState, useEffect } from "react";
import { fetchData, createData } from "@/utils/api";
import ChemicalForm from "./ChemicalForm";

export default function DataBahanKimia() {
    const [formData, setFormData] = useState({});
    const [dynamicOptions, setDynamicOptions] = useState({});
    const routeUrl = "data_bahan_kimia";

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createData({ routeUrl, payload: formData });
            alert("Data berhasil disimpan!");
        } catch (error) {
            console.error("Error submitting data:", error.message);
            alert("Terjadi kesalahan saat menyimpan data.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen font-jkt">
            <div className="border rounded-3xl p-10 shadow-lg w-full my-5 dark:bg-[#12171c] bg-[#ffffff]">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Data Bahan Kimia
                </h1>
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
