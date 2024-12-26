export default function LokasiBahanKimiaTable({ 
    data, 
    error, 
    onUpdate, 
    onDelete, 
    routeUrl,
    currentPage 
}) {
    return (
        <div className="container mx-auto p-4">
            
            {error && <p className="text-red-500">{error}</p>}

            <div className="justify-center items-center min-h-screen min-w-screen">
                <div className="border rounded-3xl p-4 shadow-lg">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="border-b border-gray-300 px-4 py-2">No</th>
                                <th className="border-b border-gray-300 px-4 py-2">Details</th>
                                <th className="border-b border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="border-b border-t border-gray-300 px-4 py-2">
                                        {index + 1 + (currentPage - 1) * 10}
                                    </td>
                                    <td className="border-b border-t border-gray-300 px-4 py-2">
                                        <form
                                            onSubmit={(e) => onUpdate(e, item.id, `${routeUrl}`)}
                                            className="space-y-2 flex flex-col"
                                            id={`update-form-${item.id}`}
                                        >
                                            <input
                                                type="text"
                                                name="room"
                                                defaultValue={item.room}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1 w-full"
                                            />

                                            <input
                                                type="text"
                                                name="location"
                                                defaultValue={item.location}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            />

                                            <input
                                                type="text"
                                                name="building"
                                                defaultValue={item.building}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            />

                                            <input
                                                type="text"
                                                name="department_name"
                                                defaultValue={item.department_name}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            />

                                            <input
                                                type="text"
                                                name="contact_person"
                                                defaultValue={item.contact_person}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            />

                                            <input
                                                type="text"
                                                name="phone"
                                                defaultValue={item.phone}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            />

                                            <input
                                                type="text"
                                                name="extension"
                                                defaultValue={item.extension}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            />

                                            <input
                                                type="text"
                                                name="mobile"
                                                defaultValue={item.mobile}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            />

                                            <input
                                                type="text"
                                                name="email"
                                                defaultValue={item.email}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            />
                                        </form>
                                    </td>
                                    <td className="border-b border-t border-gray-300 px-4 py-2">
                                        <button
                                            type="submit"
                                            form={`update-form-${item.id}`}
                                            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => onDelete(item.id, `${routeUrl}`)}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
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
    );
}
