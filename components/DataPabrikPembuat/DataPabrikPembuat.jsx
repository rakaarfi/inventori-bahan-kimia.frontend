'use client';

import React, { useState } from "react";
import PabrikForm from "./PabrikForm";
import { createData } from "@/utils/api";

export default function DataPabrikPembuat() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        city: "",
        zipcode: "",
        province: "",
        contact_person: "",
        phone: "",
        extension: "",
        mobile: "",
        email: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const routeUrl = "data_pabrik_pembuat";

        try {
            await createData({ routeUrl, payload: formData });
            alert("Data submitted successfully!");
            setFormData({
                name: "",
                address: "",
                city: "",
                zipcode: "",
                province: "",
                contact_person: "",
                phone: "",
                extension: "",
                mobile: "",
                email: "",
                description: "",
            });
        } catch (error) {
            console.error("Submission error:", error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="border rounded-3xl p-4 shadow-lg w-full my-5">
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
