'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DataBahanKimia() {
    const [locations, setLocations] = useState([]);
    const [factories, setFactories] = useState([]);
    const [name, setName] = useState("");
    const [trade_name, setTradeName] = useState("");
    const [chemical_formula, setChemicalFormula] = useState("");
    const [id_factory, setIdFactory] = useState("");
    const [id_location, setIdLocation] = useState("");
    const [characteristic, setCharacteristic] = useState("");
    const [max_amount, setMaxAmount] = useState("");
    const [unit, setUnit] = useState("");
    const [description, setDescription] = useState("");


    const apiUrl = "http://127.0.0.1:8000";

    // Fetch data for locations and factories
    useEffect(() => {
        const fetchData = async () => {
            try {
                const locationResponse = await axios.get(`${apiUrl}/lokasi_bahan_kimia/read`);
                const factoryResponse = await axios.get(`${apiUrl}/data_pabrik_pembuat/read`);
                setLocations(locationResponse.data);
                setFactories(factoryResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");

        const payload = {
            name,
            trade_name,
            chemical_formula,
            id_factory: parseInt(id_factory),
            id_location: parseInt(id_location),
            characteristic,
            max_amount: parseFloat(max_amount),
            unit,
            description,
        };

        try {
            const response = await axios.post(`${apiUrl}/data_bahan_kimia/create/`, payload);
            alert("Data berhasil disimpan!");
        } catch (error) {
            console.error("Error submitting data:", error.message);
            alert("Terjadi kesalahan saat menyimpan data.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="justify-items-center border rounded-3xl p-4 shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Data Bahan Kimia</h1>
                <form onSubmit={handleSubmit}>
                    <table className="table-auto border-collapse">
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">Ruang:</td>
                                <td className="px-4 py-2">
                                    <select
                                        id="room"
                                        name="id_location"
                                        className="block w-full rounded-md bg-white px-3 py-1.5"
                                        required
                                        value={id_location}
                                        onChange={(e) => setIdLocation(e.target.value)}
                                    >
                                        <option disabled defaultValue={""}>
                                            Pilih Ruang
                                        </option>
                                        {locations.map((location) => (
                                            <option key={location.id} value={location.id}>
                                                {location.room}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Nama Bahan Kimia:</td>
                                <td className="px-4 py-2">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="lokasi-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Nama Dagang:</td>
                                <td className="px-4 py-2">
                                    <input
                                        type="text"
                                        id="trade_name"
                                        name="trade_name"
                                        className="bangunan-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                        required
                                        value={trade_name}
                                        onChange={(e) => setTradeName(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Rumus Kimia:</td>
                                <td className="px-4 py-2">
                                    <input
                                        type="text"
                                        id="chemical_formula"
                                        name="chemical_formula"
                                        className="bangunan-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                        required
                                        value={chemical_formula}
                                        onChange={(e) => setChemicalFormula(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Pabrik Pembuat:</td>
                                <td className="px-4 py-2">
                                    <select
                                        id="factory_name"
                                        name="id_factory"
                                        className="block w-full rounded-md bg-white px-3 py-1.5"
                                        required
                                        value={id_factory}
                                        onChange={(e) => setIdFactory(e.target.value)}
                                    >
                                        <option disabled defaultValue={""}>
                                            Pilih Pabrik
                                        </option>
                                        {factories.map((factory) => (
                                            <option key={factory.id} value={factory.id}>
                                                {factory.name}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Karakteristik:</td>
                                <td className="px-4 py-2">
                                    <select
                                        id="characteristic"
                                        name="characteristic"
                                        className="karakteristik-bahan p-2.5 block w-full rounded-md bg-white text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                        required
                                        value={characteristic}
                                        onChange={(e) => setCharacteristic(e.target.value)}>
                                        <option disabled defaultValue={""}>
                                            Pilih Karakteristik
                                        </option>
                                        <option value="Flammable">Flammable</option>
                                        <option value="Toxic">Toxic</option>
                                        <option value="Corrosive">Corrosive</option>
                                        <option value="Explosive">Explosive</option>
                                        <option value="Carcinogen">Carcinogen</option>
                                        <option value="Iritating">Iritating</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Jumlah Inventori Maksimal:</td>
                                <td className="px-4 py-2">
                                    <div className="flex flex-row gap-1">
                                        <input
                                            type="number"
                                            step="any"
                                            id="max_amount"
                                            name="max_amount"
                                            className="jumlah-max-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                            required
                                            value={max_amount}
                                            onChange={(e) => setMaxAmount(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            id="unit"
                                            name="unit"
                                            className="satuan-max-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                            placeholder="Satuan"
                                            required
                                            value={unit}
                                            onChange={(e) => setUnit(e.target.value)}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Keterangan:</td>
                                <td className="px-4 py-2">
                                    <textarea
                                        name="description"
                                        id="description"
                                        rows="2"
                                        className="informasi-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                        required
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="text-right align-bottom p-4">
                                    <button
                                        type="submit"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    >
                                        Submit
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}