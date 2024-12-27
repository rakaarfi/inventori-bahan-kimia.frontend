import React, { useState } from 'react';
import LokasiForm from './LokasiForm';

export default function LokasiBahanKimiaDetail({ data, onUpdate, routeUrl }) {
    const [formData, setFormData] = useState({
        room: data.room || "",
        location: data.location || "",
        building: data.building || "",
        department_name: data.department_name || "",
        contact_person: data.contact_person || "",
        phone: data.phone || "",
        extension: data.extension || "",
        mobile: data.mobile || "",
        email: data.email || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(e, data.id, routeUrl, formData);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="border rounded-3xl p-4 shadow-lg">
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
