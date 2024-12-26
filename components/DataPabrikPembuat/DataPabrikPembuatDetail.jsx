import React from 'react';

export default function DataPabrikPembuatDetail({
    data,
    onUpdate,
    routeUrl,
}) {
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
                                <td className="border px-4 py-2 font-bold">Nama</td>
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
                                <td className="border px-4 py-2 font-bold">Alamat</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="address"
                                        defaultValue={data.address}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Kota</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="city"
                                        defaultValue={data.city}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Kode Pos</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="zipcode"
                                        defaultValue={data.zipcode}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Provinsi</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="province"
                                        defaultValue={data.province}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Nama Contact Person</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="contact_person"
                                        defaultValue={data.contact_person}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">No Telepon</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="phone"
                                        defaultValue={data.phone}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Extension</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="extension"
                                        defaultValue={data.extension}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">No Hp</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="mobile"
                                        defaultValue={data.mobile}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Email</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="email"
                                        defaultValue={data.email}
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
