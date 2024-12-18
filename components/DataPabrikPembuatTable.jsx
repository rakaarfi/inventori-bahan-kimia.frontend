'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataPabrikPembuatTable() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/data_pabrik_pembuat/read_data_pabrik_pembuat");
                setData(response.data);
            }
            catch (error) {
                console.error("Error fetching data:", error.message);
                setError(error.message);
            }
        };
        fetchData();
    }, []);

    // Handle update
    const handleUpdate = async (e, id) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const updatedData = Object.fromEntries(formData.entries());

        try {
            const response = await axios.post(
                `http://127.0.0.1:8000/data_pabrik_pembuat/update/${id}`,
                updatedData
            );
            alert("Data updated successfully!");
            console.log(response.data); // Optional: Debugging backend response
        } catch (err) {
            alert("Error updating data: " + err.message);
        }
    };

    // Handle delete
    const handleDelete = async (id) => {
        try {
            await axios.post(`http://127.0.0.1:8000/data_pabrik_pembuat/delete/${id}`);
            alert("Data deleted successfully!");
            setData((prevData) => prevData.filter((item) => item.id !== id));
        } catch (err) {
            alert("Error deleting data: " + err.message);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Daftar Data Pabrik Pembuat</h1>

            {error && <p className="text-red-500">{error}</p>}

            <div className="justify-center items-center min-h-screen min-w-screen">
                <div className="border rounded-3xl p-4 shadow-lg">
                    <table className="table-auto border-collapse border border-gray-300 w-full">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">No</th>
                                <th className="border px-4 py-2">Details</th>
                                <th className="border px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="border px-4 py-2">{index + 1}</td>
                                    <td className="border px-4 py-2">
                                        <form
                                            onSubmit={(e) => handleUpdate(e, item.id)}
                                            className="space-y-2"
                                            id='update-form'
                                        >
                                            <input type="text" name="name" defaultValue={item.name} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="address" defaultValue={item.address} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="city" defaultValue={item.city} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="zipcode" defaultValue={item.zipcode} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="province" defaultValue={item.province} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="contact_person" defaultValue={item.contact_person} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="phone" defaultValue={item.phone} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="extension" defaultValue={item.extension} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="mobile" defaultValue={item.mobile} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="email" defaultValue={item.email} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="description" defaultValue={item.description} required className="border rounded px-2 py-1 w-full" />

                                        </form>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <button
                                            type="submit"
                                            form='update-form'
                                            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
