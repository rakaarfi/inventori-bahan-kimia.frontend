'use client';

import React, { useState } from 'react';
import LokasiForm from './LokasiForm';
import { createData } from '@/utils/api';

export default function LokasiBahanKimia() {
    const [formData, setFormData] = useState({
        room: "",
        location: "",
        building: "",
        department_name: "",
        contact_person: "",
        phone: "",
        extension: "",
        mobile: "",
        email: "",
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

        const routeUrl = "lokasi_bahan_kimia";

        try {
            await createData({ routeUrl, payload: formData });
            alert("Data submitted successfully!");
            setFormData({
                room: "",
                location: "",
                building: "",
                department_name: "",
                contact_person: "",
                phone: "",
                extension: "",
                mobile: "",
                email: "",
            });
        } catch (error) {
            console.error("Submission error:", error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="border rounded-3xl p-4 shadow-lg w-full my-5">
                <h1 className="text-2xl font-bold mb-4 text-center">Lokasi Bahan Kimia</h1>
                <LokasiForm
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}
