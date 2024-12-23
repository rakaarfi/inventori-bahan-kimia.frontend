export default function DataBahanKimiaTable({
    data,
    characteristics,
    lokasiBahanKimia,
    dataPabrikPembuat,
    error,
    onUpdate,
    onDelete,
    apiUrl,
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
                                            onSubmit={(e) => onUpdate(e, item.id, `${apiUrl}${routeUrl}`)}
                                            className="space-y-2 flex flex-col"
                                            id={`update-data-${item.id}`}
                                        >
                                            {/* Dropdown for Lokasi */}
                                            <select
                                                name="id_location"
                                                defaultValue={item.id_location}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            >
                                                {lokasiBahanKimia.map((loc) => (
                                                    <option key={loc.id} value={loc.id}>
                                                        {loc.room}
                                                    </option>
                                                ))}
                                            </select>
                                            <input
                                                type="text"
                                                name="name"
                                                defaultValue={item.name}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1 w-full"
                                            />
                                            <input
                                                type="text"
                                                name="trade_name"
                                                defaultValue={item.trade_name}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            />
                                            <input
                                                type="text"
                                                name="chemical_formula"
                                                defaultValue={item.chemical_formula}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            />
                                            {/* Dropdown for Pabrik */}
                                            <select
                                                name="id_factory"
                                                defaultValue={item.id_factory}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            >
                                                {dataPabrikPembuat.map((factory) => (
                                                    <option key={factory.id} value={factory.id}>
                                                        {factory.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <select
                                                name="characteristic"
                                                defaultValue={item.characteristic}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            >
                                                {characteristics.map((char) => (
                                                    <option key={char} value={char}>
                                                        {char}
                                                    </option>
                                                ))}
                                            </select>
                                            <input
                                                type="number"
                                                name="max_amount"
                                                defaultValue={item.max_amount}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            />
                                            <input
                                                type="text"
                                                name="unit"
                                                defaultValue={item.unit}
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            />
                                            <textarea
                                                name="description"
                                                defaultValue={item.description}
                                                rows="2"
                                                required
                                                className="border border-gray-300 rounded px-2 py-1 mb-1"
                                            ></textarea>
                                        </form>
                                    </td>
                                    <td className="border-b border-t border-gray-300 px-4 py-2">
                                        <button
                                            type="submit"
                                            form={`update-data-${item.id}`}
                                            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => onDelete(item.id, `${apiUrl}${routeUrl}`)}
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
