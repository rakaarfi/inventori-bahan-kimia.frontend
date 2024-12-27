import React from 'react';
import TableHeader from './TableHeader';
import { ButtonDelete, ButtonDetail } from '../ButtonComponents';

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
                            <TableHeader />
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
                                            <ButtonDetail href={`/dashboard/data-pabrik-pembuat/detail/${item.id}`} />
                                        </td>
                                        <td className="border border-gray-300 px-4 py-4">
                                            <ButtonDelete
                                                onClick={() => onDelete(item.id, routeUrl)}
                                            />
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
