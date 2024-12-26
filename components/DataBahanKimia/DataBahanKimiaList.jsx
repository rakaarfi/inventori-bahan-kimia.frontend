import Link from 'next/link';
import React from 'react';

export default function DataBahanKimiaList({
    data,
    lokasiBahanKimia,
    dataPabrikPembuat,
    error,
    onDelete,
    routeUrl,
    currentPage,
}) {
    return (
        <div className="container mx-auto p-4">

            {error && <p className="text-red-500">{error}</p>}

            <div className="justify-center items-center min-h-screen min-w-screen">
                <div className="border rounded-3xl p-4 shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-xs">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">No</th>
                                    <th className="border border-gray-300 px-4 py-2">Ruang</th>
                                    <th className="border border-gray-300 px-4 py-2">Nama Bahan Kimia</th>
                                    <th className="border border-gray-300 px-4 py-2">Nama Dagang</th>
                                    <th className="border border-gray-300 px-4 py-2">Rumus Kimia</th>
                                    <th className="border border-gray-300 px-4 py-2">Pabrik Pembuat</th>
                                    <th className="border border-gray-300 px-4 py-2">Karakteristik</th>
                                    <th className="border border-gray-300 px-4 py-2">Jumlah Inventori Maksimal</th>
                                    <th className="border border-gray-300 px-4 py-2">Satuan</th>
                                    <th className="border border-gray-300 px-4 py-2">Keterangan</th>
                                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            {index + 1 + (currentPage - 1) * 10}
                                        </td>
                                        {lokasiBahanKimia.find((loc) => loc.id === item.id_location) && (
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                {lokasiBahanKimia.find((loc) => loc.id === item.id_location).room}
                                            </td>
                                        )}
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            {item.name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.trade_name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.chemical_formula}
                                        </td>
                                        {dataPabrikPembuat.find((factory) => factory.id === item.id_factory) && (
                                            <td className="border border-gray-300 px-4 py-2">
                                                {dataPabrikPembuat.find((factory) => factory.id === item.id_factory).name}
                                            </td>
                                        )}
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.characteristic}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.max_amount}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.unit}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.description}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-4">
                                            <Link
                                                href={`/dashboard/data-bahan-kimia/detail/${item.id}`}
                                                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
                                            >
                                                Detail
                                            </Link>
                                            <button
                                                onClick={() => onDelete(item.id, `${routeUrl}`)}
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded my-2"
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
        </div>
    );
}
