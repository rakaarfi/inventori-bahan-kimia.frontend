import React, { useState } from 'react';
import LokasiForm from './LokasiForm';
import Link from 'next/link';
import { ListButton } from '../ButtonComponents';

export default function LokasiBahanKimiaDetail({
    data,
    onUpdate,
    routeUrl
}) {
    const [formData, setFormData] = useState(data);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(e, data.id, routeUrl, formData);
    };

    return (
        <div className="container mx-auto p-4 font-jkt">
            <div className="border rounded-3xl p-4 shadow-lg dark:bg-[#12171c] bg-[#ffffff]">
                <h1 className="text-2xl font-bold text-center mb-2 whitespace-nowrap">Detail Lokasi Bahan Kimia</h1>
                <div className="flex flex-row justify-between items-center mb-4">
                    <ListButton
                        href="/dashboard/lokasi-bahan-kimia/detail"
                        text="Daftar Lokasi Bahan Kimia"
                    />
                </div>
                <LokasiForm
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    isUpdate={true}
                />
            </div>
        </div>
    );
}
