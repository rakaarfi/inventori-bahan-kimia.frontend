import React from 'react';
import fields from './fields';
import { ButtonSubmit, ButtonSaveChanges } from '../ButtonComponents';

export default function LokasiForm({
    formData,
    onChange,
    onSubmit,
    isUpdate = false,
    showSubmitButton = true,
}) {
    return (
        <form onSubmit={onSubmit}>
            <table className="table-auto border-collapse w-full">
                <tbody>
                    {fields.map((field) => (
                        <tr key={field.name}>
                            <td className="px-2 py-2">{field.label}:</td>
                            <td className="px-2 py-2">
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
                                {field.type === "email" && (
                                    <input
                                        type="email"
                                        name={field.name}
                                        value={formData[field.name] || ""}
                                        onChange={onChange}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                        required
                                    />
                                )}
                                {field.type === "tel" && (
                                    <input
                                        type="tel"
                                        name={field.name}
                                        value={formData[field.name] || ""}
                                        onChange={onChange}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                                        required
                                    />
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