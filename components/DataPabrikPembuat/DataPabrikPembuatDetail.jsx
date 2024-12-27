import React, { useState } from "react";
import PabrikForm from "./PabrikForm";

export default function DataPabrikPembuatDetail({ data, onUpdate, routeUrl }) {
    const [formData, setFormData] = useState({
        name: data.name || "",
        address: data.address || "",
        city: data.city || "",
        zipcode: data.zipcode || "",
        province: data.province || "",
        contact_person: data.contact_person || "",
        phone: data.phone || "",
        extension: data.extension || "",
        mobile: data.mobile || "",
        email: data.email || "",
        description: data.description || "",
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
