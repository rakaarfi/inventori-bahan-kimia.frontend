export default function TransactionForm({ rows, setRows, handleSubmit, errorMessage }) {
    const addNewRow = () => setRows([...rows, { date: "", transaction_type: "", amount: "", unit: "", description: "" }]);
    const removeRow = (index) => setRows(rows.filter((_, i) => i !== index));

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedRows = [...rows];
        updatedRows[index][name] = value;
        setRows(updatedRows);
    };

    return (
        <form onSubmit={handleSubmit}>
            <table className="table-auto border-collapse w-full border border-gray-300">
                <thead>
                    <tr>
                        <th colSpan="5" className="border px-4 py-2 bg-gray-200 text-center text-xl">
                            Penerimaan Penggunaan Bahan Kimia
                        </th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Tanggal</th>
                        <th className="border px-4 py-2">Jenis Transaksi</th>
                        <th className="border px-4 py-2">Jumlah</th>
                        <th className="border px-4 py-2">Unit</th>
                        <th className="border px-4 py-2">Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} className="data-row">
                            <td className="border px-4 py-2">
                                <input
                                    type="date"
                                    name="date"
                                    value={row.date}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className="form-control w-full"
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <select
                                    name="transaction_type"
                                    value={row.transaction_type}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className="form-select w-full"
                                    required
                                >
                                    <option value={""} disabled>Pilih</option>
                                    <option value="Penerimaan">Penerimaan</option>
                                    <option value="Penggunaan">Penggunaan</option>
                                </select>
                            </td>
                            <td className="border px-4 py-2">
                                <input
                                    type="number"
                                    step="any"
                                    name="amount"
                                    value={row.amount}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className="form-control w-full"
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <select
                                    id="unit"
                                    name="unit"
                                    value={row.unit}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className="form-select w-full"
                                    required
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
                            </td>
                            <td className="border px-4 py-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    value={row.description}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className="form-control w-full"
                                >
                                </textarea>
                            </td>
                            <td className="border px-4 py-2 text-center">
                                {index === 0 ? (
                                    <button
                                        type="button"
                                        className="text-green-500 hover:text-green-700"
                                        onClick={addNewRow}
                                    >
                                        +
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            type="button"
                                            className="text-green-500 hover:text-green-700 mr-2"
                                            onClick={addNewRow}
                                        >
                                            +
                                        </button>
                                        <button
                                            type="button"
                                            className="text-red-500 hover:text-red-700"
                                            onClick={() => removeRow(index)}
                                        >
                                            -
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className="text-right mt-4">
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
