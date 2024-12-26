'use client';

import React, { useState } from 'react';
import { fetchData } from '@/utils/api';

export default function DataPenerimaanPenggunaanDetail({
    data,
    routeUrl,
    onUpdate,
    error
}) {

    const [dataBahanKimia, setDataBahanKimia] = useState([]);
    const [loadingBahanKimia, setLoadingBahanKimia] = useState(false);

    // Fungsi untuk mengambil data lokasi bahan kimia
    const fetchDataBahanKimia = async () => {
        if (dataBahanKimia.length === 0) {
            setLoadingBahanKimia(true);
            try {
                const response = await fetchData('data_bahan_kimia');
                setDataBahanKimia(response);
            } catch (err) {
                console.error("Failed to fetch data bahan kimia", err);
            } finally {
                setLoadingBahanKimia(false);
            }
        }
    };

    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="container mx-auto p-4">
            <div className="border rounded-3xl p-4 shadow-lg">
                <form
                    onSubmit={(e) => onUpdate(e, data.id, `${routeUrl}`)}
                    className="space-y-2 flex flex-col"
                >
                    <table className="table-auto w-full text-sm">
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Nama Bahan Kimia</td>
                                <td className="border px-4 py-2">
                                    {/* Dropdown for Nama Bahan Kimia */}
                                    <select
                                        name="id_chemical_material"
                                        defaultValue={data.id_chemical_material}
                                        required
                                        className="border border-gray-300 rounded px-2 py-1 mb-1"
                                        onFocus={fetchDataBahanKimia}
                                    >
                                        {data.chemical_material_name && (
                                            <option value={data.id_chemical_material}>
                                                {data.chemical_material_name}
                                            </option>
                                        )}
                                        {dataBahanKimia.map((chemical) => (
                                            <option key={chemical.id} value={chemical.id}>
                                                {chemical.name}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Tanggal</td>
                                <td className="border px-4 py-2">
                                    <input
                                        id="startDate"
                                        type="date"
                                        name="date"
                                        defaultValue={data.date}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Tipe Transaksi</td>
                                <td className="border px-4 py-2">
                                    <select
                                        name="transaction_type"
                                        defaultValue={data.transaction_type} id="transaction_type"
                                    >
                                        <option value={""} disabled>Pilih</option>
                                        <option value="Penerimaan">Penerimaan</option>
                                        <option value="Penggunaan">Penggunaan</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Jumlah</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="number"
                                        step="any"
                                        id="amount"
                                        name="amount"
                                        defaultValue={data.amount}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Satuan</td>
                                <td className="border px-4 py-2">
                                    <select
                                        name="unit"
                                        id="unit"
                                        defaultValue={data.unit}
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
                                <td className="border px-4 py-2 font-bold">Keterangan</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="description"
                                        defaultValue={data.description}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
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
