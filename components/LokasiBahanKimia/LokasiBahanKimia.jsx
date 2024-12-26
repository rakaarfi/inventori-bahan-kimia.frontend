'use client'

// import { fetcher } from '@/lib/fetcher';
import React, { useState } from 'react'
import { createData } from '@/utils/api';

export default function LokasiBahanKimia() {
    const [room, setRoom] = useState("");
    const [location, setLocation] = useState("");
    const [building, setBuilding] = useState("");
    const [department_name, setDepartementName] = useState("");
    const [contact_person, setContactPerson] = useState("");
    const [phone, setPhone] = useState("");
    const [extension, setExtension] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted");

        const payload = {
            room,
            location,
            building,
            department_name,
            contact_person,
            phone,
            extension,
            mobile,
            email,
        };

        const routeUrl = "lokasi_bahan_kimia";
    
        console.log("Payload:", payload);

        try {
            await createData({ routeUrl,  payload });
            alert("Data submitted successfully!");
        } 
        catch (error) {
            console.error("Submission error:", error.message);
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="justify-items-center border rounded-3xl p-4 shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Lokasi Bahan Kimia</h1>
                <form onSubmit={handleSubmit}>
                    <table className="table-auto border-collapse">
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">Ruang:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="room" name="room" className="ruang-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required
                                        value={room}
                                        onChange={(e) => setRoom(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Lokasi:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="location" name="location" className="lokasi-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Bangunan:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="building" name="building" className="bangunan-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
                                        value={building}
                                        onChange={(e) => setBuilding(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Departemen/Bagian:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="department_name" name="department_name" className="bangunan-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
                                        value={department_name}
                                        onChange={(e) => setDepartementName(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Contact Person:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="contact_person" name="contact_person" className="contact-bahan block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
                                        value={contact_person}
                                        onChange={(e) => setContactPerson(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">No Telepon</td>
                                <td className="px-4 py-2">
                                    <div className="flex flex-row gap-1">
                                        <input type="text" id="phone" name="phone" className="telepon-lokasi block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <input type="text" id="extension" name="extension" className="extension-lokasi block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" placeholder="Extension" required 
                                            value={extension}
                                            onChange={(e) => setExtension(e.target.value)}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">No HP:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="mobile" name="mobile" className="hp-lokasi block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Email:</td>
                                <td className="px-4 py-2">
                                    <input type="text" id="email" name="email" className="email-lokasi block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6" required 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
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