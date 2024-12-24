import React from 'react';

export default function LokasiBahanKimiaDetail({
    data,
    onUpdate,
    onDelete,
    apiUrl,
    routeUrl,
}) {
    return (
        <div className="container mx-auto p-4">
            <div className="border rounded-3xl p-4 shadow-lg">
                <form
                    onSubmit={(e) => onUpdate(e, data.id, `${apiUrl}${routeUrl}`)}
                    className="space-y-2 flex flex-col"
                >
                    <table className="table-auto w-full text-sm">
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Room</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="room"
                                        defaultValue={data.room}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Location</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="location"
                                        defaultValue={data.location}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Building</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="building"
                                        defaultValue={data.building}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Department Name</td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="text"
                                        name="department_name"
                                        defaultValue={data.department_name}
                                        className="border border-gray-300 rounded px-2 py-1 w-full"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Contact Person</td>
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
                                <td className="border px-4 py-2 font-bold">Phone</td>
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
                                <td className="border px-4 py-2 font-bold">Mobile</td>
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
                                        type="email"
                                        name="email"
                                        defaultValue={data.email}
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
