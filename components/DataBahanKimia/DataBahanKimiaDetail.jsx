'use client';

import React, { useState, useEffect, use } from 'react';
import { fetchData } from '@/utils/api';

export default function DataBahanKimiaDetail({
    data,
    routeUrl,
    onUpdate,
    error,
    characteristics
}) {

    const [lokasiBahanKimia, setLokasiBahanKimia] = useState([]);
    const [dataPabrikPembuat, setDataPabrikPembuat] = useState([]);
    const [loadingLokasi, setLoadingLokasi] = useState(false);
    const [loadingPabrik, setLoadingPabrik] = useState(false);

    // Fungsi untuk mengambil data lokasi bahan kimia
    const fetchLokasiBahanKimia = async () => {
        if (lokasiBahanKimia.length === 0) {
            setLoadingLokasi(true);
            try {
                const response = await fetchData('lokasi_bahan_kimia');
                setLokasiBahanKimia(response);
            } catch (err) {
                console.error("Failed to fetch lokasi bahan kimia", err);
            } finally {
                setLoadingLokasi(false);
            }
        }
    };

    // Fungsi untuk mengambil data pabrik pembuat
    const fetchDataPabrikPembuat = async () => {
        if (dataPabrikPembuat.length === 0) {
            setLoadingPabrik(true);
            try {
                const response = await fetchData('data_pabrik_pembuat');
                setDataPabrikPembuat(response);
            } catch (err) {
                console.error("Failed to fetch data pabrik pembuat", err);
            } finally {
                setLoadingPabrik(false);
            }
        }
    };

    useEffect(() => {
        fetchDataPabrikPembuat();
    }, []);

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
                                <td className="border px-4 py-2 font-bold">Ruang</td>
                                <td className="border px-4 py-2">
                                    {/* Dropdown for Lokasi */}
                                    <select
                                        name="id_location"
                                        defaultValue={data.id_location}
                                        required
                                        className="border border-gray-300 rounded px-2 py-1 mb-1"
                                        onFocus={fetchLokasiBahanKimia}
                                    >
                                        {data.location_room && (
                                            <option value={data.id_location}>
                                                {data.location_room}
                                            </option>
                                        )}
                                        {lokasiBahanKimia.map((loc) => (
                                            <option key={loc.id} value={loc.id}>
                                                {loc.room}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Nama Bahan Kimia</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="name"
                                        defaultValue={data.name}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Nama Dagang</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="trade_name"
                                        defaultValue={data.trade_name}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Rumus Kimia</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="chemical_formula"
                                        defaultValue={data.chemical_formula}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Pabrik Pembuat</td>
                                <td className="border px-4 py-2">
                                    {/* Dropdown for Pabrik Pembuat */}
                                    <select
                                        name="id_factory"
                                        defaultValue={data.id_factory}
                                        required
                                        className="border border-gray-300 rounded px-2 py-1 mb-1"
                                        onFocus={fetchDataPabrikPembuat}
                                    >
                                        {data.factory_name && (
                                            <option value={data.id_factory}>
                                                {data.factory_name}
                                            </option>
                                        )}
                                        {dataPabrikPembuat.map((factory) => (
                                            <option key={factory.id} value={factory.id}>
                                                {factory.name}
                                            </option>
                                        ))}
                                    </select>

                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Karakteristik</td>
                                <td className="border px-4 py-2">
                                    <select
                                        name="characteristic"
                                        defaultValue={data.characteristic}
                                        required
                                        className="border border-gray-300 rounded px-2 py-1 mb-1"
                                    >
                                        {characteristics.map((char) => (
                                            <option key={char} value={char}>
                                                {char}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Jumlah Inventori Maksimal</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="max_amount"
                                        defaultValue={data.max_amount}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Satuan</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="unit"
                                        defaultValue={data.unit}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
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
