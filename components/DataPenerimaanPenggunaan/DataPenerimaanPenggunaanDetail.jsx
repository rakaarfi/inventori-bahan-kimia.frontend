'use client';

import React, { useEffect, useState } from 'react';
import { fetchData } from '@/utils/api';
import Link from 'next/link';
import { ListButton } from '../ButtonComponents';

export default function DataPenerimaanPenggunaanDetail({
    data,
    routeUrl,
    onUpdate,
    error
}) {
    const [formData, setFormData] = useState(data);
    const [chemical, setChemical] = useState([]);

    useEffect(() => {
        const fetchChemicalMaterials = async () => {
            const responseData = await fetchData('data_bahan_kimia');
            setChemical(responseData);
        }

        fetchChemicalMaterials();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Validasi Jumlah
        if (name === "amount" && parseFloat(value) < 0) {
            alert("Jumlah tidak boleh negatif.");
            return;
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(e, formData.id, routeUrl);
    };

    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="container mx-auto p-4 font-jkt">
            <div className="border rounded-3xl p-4 shadow-lg dark:bg-[#12171c] bg-[#ffffff]">
                <h1 className="text-2xl font-bold text-center mb-4 whitespace-nowrap">Detail Data Penerimaan Penggunaan</h1>
                <div className="flex flex-row justify-between items-center mb-4">
                    <ListButton
                        href="/dashboard/data-penerimaan-penggunaan/detail"
                        text="Daftar Data Penerimaan Penggunaan"
                    />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-2 flex flex-col"
                >
                    <table className="table-auto w-full text-sm">
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 font-bold">Nama Bahan Kimia</td>
                                <td className="px-4 py-2">
                                    {/* Dropdown for Nama Bahan Kimia */}
                                    <select
                                        name="id_chemical_material"
                                        value={formData.id_chemical_material}
                                        required
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                        onChange={handleChange}
                                    >
                                        {chemical && chemical.map((chemical) => (
                                            <option key={chemical.id} value={chemical.id}>
                                                {chemical.name}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-bold">Tanggal</td>
                                <td className="px-4 py-2">
                                    <input
                                        id="startDate"
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-bold">Tipe Transaksi</td>
                                <td className="px-4 py-2">
                                    <select
                                        name="transaction_type"
                                        onChange={handleChange}
                                        required
                                        value={formData.transaction_type}
                                        id="transaction_type"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                    >
                                        <option value={""} disabled>Pilih</option>
                                        <option value="Penerimaan">Penerimaan</option>
                                        <option value="Penggunaan">Penggunaan</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-bold">Jumlah</td>
                                <td className="px-4 py-2">
                                    <input
                                        type="number"
                                        step="any"
                                        id="amount"
                                        name="amount"
                                        onChange={handleChange}
                                        value={formData.amount}
                                        required
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-bold">Satuan</td>
                                <td className="px-4 py-2">
                                    <select
                                        name="unit"
                                        id="unit"
                                        onChange={handleChange}
                                        required
                                        value={formData.unit}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                    >
                                        <option value={""} disabled>Pilih</option>
                                        <option value="Gram">Gram</option>
                                        <option value="Kilogram">Kilogram</option>
                                        <option value="Kiloliter">Kiloliter</option>
                                        <option value="Kotak">Kotak</option>
                                        <option value="Kilo">Kilo</option>
                                        <option value="Mililiter">Mililiter</option>
                                        <option value="Ton">Ton</option>
                                    </select>

                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-bold">Keterangan</td>
                                <td className="px-4 py-2">
                                    <input
                                        type="text"
                                        name="description"
                                        onChange={handleChange}
                                        required
                                        value={formData.description}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-4 text-right">
                        <button
                            type="submit"
                            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded mr-2"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
