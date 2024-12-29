import React, { useState } from "react";
import PabrikForm from "./PabrikForm";
import Link from "next/link";
import { ListButton } from "../ButtonComponents";

export default function DataPabrikPembuatDetail({
    data,
    onUpdate,
    routeUrl,
}) {
    const [formData, setFormData] = useState(data);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(e, formData.id, routeUrl);
    };

    return (
        <div className="container mx-auto p-4 font-jkt">
            <div className="border rounded-3xl p-4 shadow-lg dark:bg-[#12171c] bg-[#ffffff]">
                <h1 className="text-2xl font-bold text-center mb-2 whitespace-nowrap">Detail Data Pabrik Pembuat</h1>
                <div className="flex flex-row justify-between items-center mb-4">
                    <ListButton
                        href="/dashboard/data-pabrik-pembuat/detail"
                        text="Daftar Data Pabrik Pembuat"
                    />
                </div>
                <PabrikForm
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    isUpdate={true}
                />
            </div>
        </div>
    );
}
