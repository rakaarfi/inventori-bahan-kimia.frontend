import React from 'react';
import TableHeader from './TableHeader';
import { ButtonDetail, ButtonDelete } from '../ButtonComponents';

export default function LokasiBahanKimiaList({
    data,
    error,
    currentPage,
    routeUrl,
    onDelete,
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
                                            {item.room}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.location}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.building}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {item.department_name}
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
                                        <td className="border border-gray-300 px-4 py-4">
                                            <ButtonDetail href={`/dashboard/lokasi-bahan-kimia/detail/${item.id}`} />
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
