import Link from 'next/link';
import React from 'react';

export default function DataPabrikPembuatList({
    data,
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
                                    <th className="border border-gray-300 px-4 py-2">Nama</th>
                                    <th className="border border-gray-300 px-4 py-2">Alamat</th>
                                    <th className="border border-gray-300 px-4 py-2">Kota</th>
                                    <th className="border border-gray-300 px-4 py-2">Kode Pos</th>
                                    <th className="border border-gray-300 px-4 py-2">Provinsi</th>
                                    <th className="border border-gray-300 px-4 py-2">Nama Contact Person</th>
                                    <th className="border border-gray-300 px-4 py-2">No Telepon</th>
                                    <th className="border border-gray-300 px-4 py-2">Extension</th>
                                    <th className="border border-gray-300 px-4 py-2">No Hp</th>
                                    <th className="border border-gray-300 px-4 py-2">Email</th>
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
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.address}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.city}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.zipcode}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.province}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.contact_person}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.phone}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.extension}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.mobile}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.email}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.description}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-4">
                                            <Link
                                                href={`/dashboard/data-pabrik-pembuat/detail/${item.id}`}
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
