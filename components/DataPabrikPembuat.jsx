'use client';

import React, { useState } from "react";
import axios from "axios";

export default function DataPabrikPembuat() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [province, setProvince] = useState("");
    const [contact_person, setContactPerson] = useState("");
    const [phone, setPhone] = useState("");
    const [extension, setExtension] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");

        const payload = {
            name,
            address,
            city,
            zipcode,
            province,
            contact_person,
            phone,
            extension,
            mobile,
            email,
            description
        };

        console.log("Payload:", payload);

        try {
            await axios.post("http://127.0.0.1:8000/data_pabrik_pembuat/create_data_pabrik_pembuat", payload);
            alert("Data submitted successfully!");
        } 
        catch (error) {
            console.error("Submission error:", error.message);
        }
    }
    

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="justify-items-center border rounded-3xl p-4 shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Data Pabrik Pembuat</h1>
                <form onSubmit={handleSubmit}>
                    <table className="table-auto border-collapse">
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">Nama:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="name" name="name" className="nama-pabrik block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Alamat:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="address" name="address" className="alamat-pabrik block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Kota:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="city" name="city" className="kota-pabrik block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Kode Pos:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="zipcode" name="zipcode" className="kodepos-pabrik block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
                                        value={zipcode}
                                        onChange={(e) => setZipcode(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Provinsi:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="province" name="province" className="provinsi-pabrik block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
                                        value={province}
                                        onChange={(e) => setProvince(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Nama Contact Person:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="contact_person" name="contact_person" className="nama-kontak-pabrik block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
                                        value={contact_person}
                                        onChange={(e) => setContactPerson(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">No Telepon:</td>
                                <td className="px-4 py-2">
                                    <div className="flex flex-row gap-1">
                                        <input type="text" id="phone" name="phone" className="telepon-pabrik block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <input type="text" id="extension" name="extension" className="extension-pabrik block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" placeholder="Extension" 
                                            value={extension}
                                            onChange={(e) => setExtension(e.target.value)}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">No HP:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="mobile" name="mobile" className="hp-pabrik block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Email:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="email" name="email" className="email-pabrik block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Keterangan:</td>
                                <td className="px-4 py-2">
                                    <textarea name="description" id="description" rows="2" className="informasi-pabrik block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
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