'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LokasiBahanKimiaTable() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/lokasi_bahan_kimia/read_lokasi_bahan_kimia");
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
                `http://127.0.0.1:8000/lokasi_bahan_kimia/update/${id}`,
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
            await axios.post(`http://127.0.0.1:8000/lokasi_bahan_kimia/delete/${id}`);
            alert("Data deleted successfully!");
            setData((prevData) => prevData.filter((item) => item.id !== id));
        } catch (err) {
            alert("Error deleting data: " + err.message);
        }
    };

    return (
        <div className="container mx-auto p-4">

            {error && <p className="text-red-500">{error}</p>}

            <div className="justify-center items-center min-h-screen min-w-screen">
                <div className="border rounded-3xl p-4 shadow-lg">
                    <table className="table-auto w-full ">
                        <thead>
                            <tr>
                                <th className="border-b border-gray-300 px-4 py-2">No</th>
                                <th className="border-b border-gray-300 px-4 py-2">Details</th>
                                <th className="border-b border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="border-b border-t border-gray-300 px-4 py-2">{index + 1}</td>
                                    <td className="border-b border-t border-gray-300 px-4 py-2">
                                        <form
                                            onSubmit={(e) => handleUpdate(e, item.id)}
                                            className="space-y-2 flex flex-col"
                                            id="update-lokasi"
                                        >
                                            <input type="text" name="room" defaultValue={item.room} required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1 w-full" />

                                            <input type="text" name="location" defaultValue={item.location} required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1" />

                                            <input type="text" name="building" defaultValue={item.building} required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1" />

                                            <input type="text" name="department_name" defaultValue={item.department_name} required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1" />

                                            <input type="text" name="contact_person" defaultValue={item.contact_person} required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1" />

                                            <input type="text" name="phone" defaultValue={item.phone} required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1" />

                                            <input type="text" name="extension" defaultValue={item.extension} required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1" />

                                            <input type="text" name="mobile" defaultValue={item.mobile} required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1" />

                                            <input type="text" name="email" defaultValue={item.email} required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1" />
                                        </form>
                                    </td>
                                    <td className="border-b border-t border-gray-300 px-4 py-2">
                                        <button
                                            type="submit"
                                            form='update-lokasi'
                                            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded mr-2"
                                        >
                                            Edit
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
    );
}
