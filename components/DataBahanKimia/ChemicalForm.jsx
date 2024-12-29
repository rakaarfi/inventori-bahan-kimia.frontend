'use client';

import React from 'react';
import { ButtonSaveChanges, ButtonSubmit } from "../ButtonComponents";
import fields from './fields';

export default function ChemicalForm({
    formData,
    onChange,
    onSubmit,
    dynamicOptions = {},
    isUpdate = false,
    showSubmitButton = true,
}) {
    return (
        <form onSubmit={onSubmit}>
            <table className="table-auto border-collapse w-full">
                <tbody>
                    {fields.map((field) => (
                        <tr key={field.name}>
                            <td className="px-4 py-2">{field.label}:</td>
                            <td className="px-4 py-2">
                                {field.type === "text" && (
                                    <input
                                        type="text"
                                        name={field.name}
                                        value={formData[field.name] || ""}
                                        onChange={onChange}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                        required
                                    />
                                )}
                                {field.type === "number" && (
                                    <input
                                        type="number"
                                        name={field.name}
                                        value={formData[field.name] || ""}
                                        onChange={onChange}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                        required
                                    />
                                )}
                                {field.type === "textarea" && (
                                    <textarea
                                        name={field.name}
                                        value={formData[field.name] || ""}
                                        onChange={onChange}
                                        rows="2"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                        required
                                    />
                                )}
                                {field.type === "select" && (
                                    <select
                                        name={field.name}
                                        value={formData[field.name] || ""}
                                        onChange={onChange}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                        required
                                    >
                                        <option value="" disabled>
                                            Pilih {field.label}
                                        </option>
                                        {(dynamicOptions[field.name] || field.options).map((option) =>
                                            typeof option === "string" ? (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ) : (
                                                <option key={option.id} value={option.id}>
                                                    {option.name || option.room || option.label}
                                                </option>
                                            )
                                        )}
                                    </select>
                                )}
                            </td>
                        </tr>
                    ))}
                    {showSubmitButton && (
                        <tr>
                            <td colSpan={2} className="text-right align-bottom">
                                {isUpdate ? <ButtonSaveChanges /> : <ButtonSubmit />}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </form>
    );
}
