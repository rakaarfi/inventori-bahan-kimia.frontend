import Link from 'next/link';
import React from 'react';

export default function DataPenerimaanPenggunaanList({
    data,
    chemicalMaterials,
    error,
    onDelete,
    routeUrl,
    currentPage,
}) {

    if (!chemicalMaterials.length) {
        return <p>Loading chemical materials...</p>;
    }
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
                                    <th className="border border-gray-300 px-4 py-2">Nama Bahan Kimia</th>
                                    <th className="border border-gray-300 px-4 py-2">Tanggal</th>
                                    <th className="border border-gray-300 px-4 py-2">Tipe Transaksi</th>
                                    <th className="border border-gray-300 px-4 py-2">Jumlah</th>
                                    <th className="border border-gray-300 px-4 py-2">Satuan</th>
                                    <th className="border border-gray-300 px-4 py-2">Deskripsi</th>
                                    <th className="border border-gray-300 px-4 py-2" colSpan={2}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            {index + 1 + (currentPage - 1) * 10}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {chemicalMaterials.find(
                                                (chemicalMaterial) =>
                                                    chemicalMaterial.id === item.id_chemical_material
                                            )?.name || "Unknown"}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            {item.date}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.transaction_type}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            {item.amount}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.unit}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.description}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-4">
                                            <Link
                                                href={`/dashboard/data-penerimaan-penggunaan/detail/${item.id}`}
                                                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
                                            >
                                                Detail
                                            </Link>
                                        </td>
                                        <td className="border border-gray-300 px-4 py-4">
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
