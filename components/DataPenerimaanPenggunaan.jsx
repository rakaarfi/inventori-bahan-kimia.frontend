'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataPenerimaanPenggunaan() {
    const [rows, setRows] = useState([
        { date: "", transaction_type: "", amount: "", unit: "", description: "" },
    ]);

    const [chemicalMaterials, setChemicalMaterials] = useState([]);
    const [selectedChemical, setSelectedChemical] = useState(null);
    const [locations, setLocations] = useState([]);
    const [factories, setFactories] = useState([]);

    const apiUrl = "http://127.0.0.1:8000";

    // Fetch data for chemical materials, locations and factories
    useEffect(() => {
        const fetchData = async () => {
            try {
                const chemicalMaterialsResponse = await axios.get(`${apiUrl}/data_bahan_kimia/read`);
                const locationsResponse = await axios.get(`${apiUrl}/lokasi_bahan_kimia/read`);
                const factoriesResponse = await axios.get(`${apiUrl}/data_pabrik_pembuat/read`);
                setChemicalMaterials(chemicalMaterialsResponse.data);
                setLocations(locationsResponse.data);
                setFactories(factoriesResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };
        fetchData();
    }, []);

    // Handle selection of chemical material
    const handleChemicalMaterialChange = (event) => {
        const selectedId = parseInt(event.target.value);
        const chemical = chemicalMaterials.find((item) => item.id === selectedId);
        setSelectedChemical(chemical);
    };

    // Add new row
    const addNewRow = () => {
        setRows([
            ...rows,
            { date: "", transaction_type: "", amount: "", unit: "", description: "" },
        ]);
    };

    const removeRow = (index) => {
        if (rows.length > 1) {
            const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
            setRows(updatedRows);
        }
    };

    // Handle input change in rows
    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedRows = [...rows];
        updatedRows[index][name] = value;
        setRows(updatedRows);
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!selectedChemical) {
            alert("Harap pilih bahan kimia sebelum mengirim.");
            return;
        }
    
        const payload = rows
            .filter((row) => Object.values(row).some((val) => val.trim() !== ""))
            .map((row) => ({
                ...row,
                id_chemical_material: selectedChemical.id, // Pastikan kolom ini memiliki nilai valid
            }));
    
        try {
            await axios.post(`${apiUrl}/data_penerimaan_penggunaan/create/`, {
                transactions: payload,
            });
            alert("Data berhasil disimpan!");
            setRows([{ date: "", transaction_type: "", amount: "", unit: "", description: "" }]); // Reset rows
        } catch (error) {
            console.error("Error submitting data:", error.message);
            alert("Terjadi kesalahan saat menyimpan data.");
        }
    };
    

    return (
        <div className="flex justify-center items-center min-h-screen ml-56">
            <div className="justify-items-center border rounded-3xl p-4 shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-4">
                    Data Penerimaan Penggunaan Bahan Kimia
                </h1>
                {/* Dropdown for selecting chemical material */}
                <div className="mb-4">
                    <select
                        name="id_chemical_material"
                        id="chemicalMaterial"
                        className="form-select w-full"
                        onChange={handleChemicalMaterialChange}
                        value={selectedChemical?.id || ""}
                        required
                    >
                        <option value={""} disabled>Pilih Bahan Kimia</option>
                        {chemicalMaterials.map((chemical) => (
                            <option key={chemical.id} value={chemical.id}>
                                {chemical.name}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Details of the selected chemical material */}
                <div className="flex flex-row gap-8 p-4">
                    {/* Table Data Bahan Kimia */}
                    <div className="w-1/3">
                        <table className="table-auto border-collapse border border-gray-300 w-full">
                            <thead>
                                <tr>
                                    <th colSpan="2" className="border px-4 py-2 bg-gray-200 text-center">
                                        Data Bahan Kimia
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2 whitespace-nowrap min-w-[150px]">Nama Bahan Kimia</td>
                                    <td className="border px-4 py-2">
                                        {selectedChemical?.name || "__________"}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Merek Dagang</td>
                                    <td className="border px-4 py-2">
                                        {selectedChemical?.trade_name || "__________"}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Jumlah Maksimum Inventori</td>
                                    <td className="border px-4 py-2">
                                        {selectedChemical
                                            ? `${selectedChemical.max_amount} ${selectedChemical.unit}`
                                            : "__________"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Location Data */}
                    <div className="w-1/3">
                        <table className="table-auto border-collapse border border-gray-300 w-full">
                            <thead>
                                <tr>
                                    <th colSpan="2" className="border px-4 py-2 bg-gray-200 text-center">
                                        Lokasi Bahan Kimia
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">Ruang</td>
                                    <td className="border px-4 py-2">
                                        {locations.find((loc) => loc.id === selectedChemical?.id_location)?.room ||
                                            "__________"}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Lokasi</td>
                                    <td className="border px-4 py-2">
                                        {locations.find((loc) => loc.id === selectedChemical?.id_location)?.location ||
                                            "__________"}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Bangunan</td>
                                    <td className="border px-4 py-2">
                                        {locations.find((loc) => loc.id === selectedChemical?.id_location)?.building ||
                                            "__________"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Factory Data */}
                    <div className="w-1/3">
                        <table className="table-auto border-collapse border border-gray-300 w-full">
                            <thead>
                                <tr>
                                    <th colSpan="2" className="border px-4 py-2 bg-gray-200 text-center">
                                        Data Pabrik Pembuat
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2 whitespace-nowrap min-w-[150px]">Nama Pabrik Pembuat</td>
                                    <td className="border px-4 py-2">
                                        {factories.find((fac) => fac.id === selectedChemical?.id_factory)?.name ||
                                            "__________"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Form for transactions */}
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
                                            id="startDate"
                                            type="date"
                                            name="date"
                                            value={row.date}
                                            onChange={(e) => handleInputChange(index, e)}
                                            className="form-control w-full"
                                        />
                                    </td>
                                    <td className="border px-4 py-2">
                                        <select
                                            id='transaction_type'
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
                                            id="amount"
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
                    <div className="text-right mt-4">
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
