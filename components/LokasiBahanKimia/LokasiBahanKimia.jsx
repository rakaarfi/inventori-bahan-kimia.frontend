'use client';

import React, { useState } from 'react';
import LokasiForm from './LokasiForm';
import { createData } from '@/utils/api';

export default function LokasiBahanKimia() {
    const [formData, setFormData] = useState({});
    const routeUrl = "lokasi_bahan_kimia";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createData({ routeUrl, payload: formData });
            alert("Data submitted successfully!");
        } catch (error) {
            console.error("Submission error:", error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen font-jkt">
            <div className="border rounded-3xl p-10 shadow-lg w-full my-5 dark:bg-[#12171c] bg-[#ffffff]">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Lokasi Bahan Kimia
                </h1>
                <LokasiForm
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}
