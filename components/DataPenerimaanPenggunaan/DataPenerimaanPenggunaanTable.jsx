export default function DataPenerimaanPenggunaanTable({
    data,
    chemicalMaterials,
    transactionsType,
    error,
    onUpdate,
    onDelete,
    routeUrl,
    currentPage
}) {
    return (
        <div className="container mx-auto p-4">

            {error && <p className="text-red-500">{error}</p>}

            <table className="table-auto w-full border-collapse border border-gray-200">
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
                                    id={`update-data-${item.id}`}
                                >
                                    <select
                                        name="id_chemical_material"
                                        defaultValue={item.id_chemical_material}
                                        className="w-full border px-2 py-1 rounded"
                                    >
                                        {chemicalMaterials.map((material) => (
                                            <option key={material.id} value={material.id}>
                                                {material.name}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="date"
                                        name="date"
                                        defaultValue={item.date}
                                        className="w-full border px-2 py-1 rounded"
                                    />
                                    <select
                                        name="transaction_type"
                                        defaultValue={item.transaction_type}
                                        className="w-full border px-2 py-1 rounded"
                                    >
                                        {transactionsType.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="number"
                                        step="any"
                                        name="amount"
                                        defaultValue={item.amount}
                                        className="w-full border px-2 py-1 rounded"
                                    />
                                    <select
                                        id="unit"
                                        name="unit"
                                        defaultValue={item.unit}
                                        className="w-full border px-2 py-1 rounded"
                                    >
                                        <option value={""} disabled>Pilih</option>
                                        <option value="Gram">Gram</option>
                                        <option value="Kilogram">Kilogram</option>
                                        <option value="Kiloliter">Kiloliter</option>
                                        <option value="Kotak">Kotak</option>
                                        <option value="Kilo">Kilo</option>
                                        <option value="Mililiter">Mililiter</option>
                                        <option value="Ton">Ton</option>
                                    </select>
                                    <input
                                        type="text"
                                        name="description"
                                        defaultValue={item.description}
                                        className="w-full border px-2 py-1 rounded"
                                    />
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
    );
}
