'use client';

import { useState } from 'react';

export default function DataPenerimaanPenggunaan() {
    const [rows, setRows] = useState([
        { tanggal: '', jenisTransaksi: '', jumlah: '', unit: '', keterangan: '' }
    ]);

    // Add new row
    const addNewRow = () => {
        setRows([
            ...rows,
            { tanggal: '', jenisTransaksi: '', jumlah: '', unit: '', keterangan: '' }
        ]);
    };

    // Handle input change
    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newRows = [...rows];
        newRows[index][name] = value;
        setRows(newRows);

        // Add new row if the last row is not empty
        const lastRow = newRows[newRows.length - 1];
        if (Object.values(lastRow).every((val) => val.trim() !== '')) {
            addNewRow();
        }
    };

    // Handle form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Data submitted:', rows);
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="justify-items-center border rounded-3xl p-4 shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Data Penerimaan Penggunaan Bahan Kimia</h1>
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
                                    <td className="border px-4 py-2">________________</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Merek Dagang</td>
                                    <td className="border px-4 py-2">________________</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Jumlah Maksimum Inventori</td>
                                    <td className="border px-4 py-2">________________</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table Lokasi Bahan Kimia */}
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
                                    <td className="border px-4 py-2">________________</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Lokasi</td>
                                    <td className="border px-4 py-2">________________</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Bangunan</td>
                                    <td className="border px-4 py-2">________________</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Table Data Pabrik Pembuat */}
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
                                    <td className="border px-4 py-2">________________</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
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
                                            name="tanggal"
                                            value={row.tanggal}
                                            onChange={(e) => handleInputChange(index, e)}
                                            className="form-control w-full"
                                        />
                                    </td>
                                    <td className="border px-4 py-2">
                                        <select
                                            name="jenisTransaksi"
                                            value={row.jenisTransaksi}
                                            onChange={(e) => handleInputChange(index, e)}
                                            className="form-select w-full"
                                        >
                                            <option value="" disabled selected>Pilih</option>
                                            <option value="Penerimaan">Penerimaan</option>
                                            <option value="Penggunaan">Penggunaan</option>
                                        </select>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <input
                                            type="text"
                                            name="jumlah"
                                            value={row.jumlah}
                                            onChange={(e) => handleInputChange(index, e)}
                                            className="form-control w-full"
                                        />
                                    </td>
                                    <td className="border px-4 py-2">
                                        <select
                                            name="unit"
                                            value={row.unit}
                                            onChange={(e) => handleInputChange(index, e)}
                                            className="form-select w-full"
                                        >
                                            <option value="" disabled selected>Pilih</option>
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
                                        <input
                                            type="text"
                                            name="keterangan"
                                            value={row.keterangan}
                                            onChange={(e) => handleInputChange(index, e)}
                                            className="form-control w-full"
                                        />
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
