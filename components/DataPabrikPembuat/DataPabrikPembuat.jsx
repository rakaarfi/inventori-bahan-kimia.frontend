'use client';

import React, { useState } from "react";
import PabrikForm from "./PabrikForm";
import { createData } from "@/utils/api";

export default function DataPabrikPembuat() {
    const [formData, setFormData] = useState({});
    const routeUrl = "data_pabrik_pembuat";

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
                    Data Pabrik Pembuat
                </h1>
                <PabrikForm
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}
