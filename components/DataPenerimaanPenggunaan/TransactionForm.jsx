import { InputData, SelectData, TextareaData } from "./FormInputs";
import { ButtonSubmit, PlusButton, MinusButton } from "../ButtonComponents";

export default function TransactionForm({
    rows,
    setRows,
    handleSubmit,
    errorMessage,
    selectedChemical,
}) {
    const addNewRow = () => setRows([...rows, { date: "", transaction_type: "", amount: "", unit: "", description: "" }]);
    const removeRow = (index) => setRows(rows.filter((_, i) => i !== index));

    const optionsTransactionType = [
        { value: "Penerimaan", label: "Penerimaan" },
        { value: "Penggunaan", label: "Penggunaan" },
    ];

    const handleInputChange = async (index, e) => {
        const { name, value } = e.target;
        const updatedRows = [...rows];
        updatedRows[index][name] = value;

        // Validasi Jumlah
        if (name === "amount" && parseFloat(value) < 0) {
            alert("Jumlah tidak boleh negatif.");
            return;
        }

        setRows(updatedRows);
    };

    return (
        <form onSubmit={handleSubmit}>
            <table className="table-auto border-collapse w-full border border-gray-300">
                <thead>
                    <tr>
                        <th colSpan="6" className="border px-4 py-2 bg-gray-200 text-center text-xl">
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
                        <th className="border px-4 py-2">Kelola Baris</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} className="data-row">
                            <td className="border px-4 py-2">
                                <InputData
                                    type="date"
                                    name="date"
                                    value={row.date}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <SelectData
                                    name="transaction_type"
                                    disabledValue="Pilih"
                                    value={row.transaction_type}
                                    options={optionsTransactionType}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </td>
                            <td className="border px-4 py-2">
                                <InputData
                                    type="number"
                                    name="amount"
                                    value={row.amount}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            </td>
                            <td className="border px-4 py-2">
                                {selectedChemical?.unit || "__________"}
                            </td>
                            <td className="border px-4 py-2">
                                <TextareaData
                                    name="description"
                                    value={row.description}
                                    onChange={(e) => handleInputChange(index, e)}
                                    rows="2"
                                />
                            </td>
                            <td className="border px-4 py-2 text-center">
                                {index === 0 ? (
                                    <PlusButton onClick={addNewRow} />
                                ) : (
                                    <div className="flex flex-row gap-2">
                                        <PlusButton onClick={addNewRow} />
                                        <MinusButton onClick={() => removeRow(index)} />
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className="text-right mt-4">
                <ButtonSubmit />
            </div>
        </form>
    );
}
