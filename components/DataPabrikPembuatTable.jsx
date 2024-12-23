'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataPabrikPembuatTable( { data, error, onUpdate, onDelete, apiUrl }) {
    return (
        <div className="container mx-auto p-4">

            {error && <p className="text-red-500">{error}</p>}

            <div className="justify-center items-center min-h-screen min-w-screen">
                <div className="border rounded-3xl p-4 shadow-lg">
                    <table className="table-auto border-collapse border border-gray-300 w-full">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">No</th>
                                <th className="border px-4 py-2">Details</th>
                                <th className="border px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="border px-4 py-2">{index + 1}</td>
                                    <td className="border px-4 py-2">
                                        <form
                                            onSubmit={(e) => onUpdate(e, item.id, apiUrl)}
                                            className="space-y-2"
                                            id='update-form'
                                        >
                                            <input type="text" name="name" defaultValue={item.name} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="address" defaultValue={item.address} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="city" defaultValue={item.city} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="zipcode" defaultValue={item.zipcode} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="province" defaultValue={item.province} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="contact_person" defaultValue={item.contact_person} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="phone" defaultValue={item.phone} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="extension" defaultValue={item.extension} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="mobile" defaultValue={item.mobile} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="email" defaultValue={item.email} required className="border rounded px-2 py-1 w-full" />
                                            <input type="text" name="description" defaultValue={item.description} required className="border rounded px-2 py-1 w-full" />

                                        </form>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <button
                                            type="submit"
                                            form='update-form'
                                            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => onDelete(item.id, apiUrl)}
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
    )
}
