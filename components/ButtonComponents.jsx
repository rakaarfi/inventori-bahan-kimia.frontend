import Link from "next/link";
import React from "react";

export const ButtonEdit = ({ onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded mr-2"
    >
        Edit
    </button>
);

export const ButtonSubmit = ({ onClick }) => (
    <button
        type="submit"
        onClick={onClick}
        className="text-white bg-[#4F4789] hover:bg-[#736BB3] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
    >
        Submit
    </button>
);

export const ButtonSaveChanges = ({ type = "submit" }) => (
    <button
        type={type}
        className="bg-[#FF700A] hover:bg-[#FFA05C] text-white font-bold py-1 px-3 rounded"
    >
        Save Changes
    </button>
);

export const ButtonDelete = ({ onClick }) => (
    <button
        onClick={onClick}
        className="bg-[#880D1E] hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
    >
        Delete
    </button>
);

export const ButtonDetail = ({ href }) => (
    <Link
        href={href}
        className="bg-[#FF700A] hover:bg-[#FFA05C] text-white font-bold py-1 px-3 rounded"
    >
        Detail
    </Link>
);

export const PlusButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="bg-[#548C2F] hover:bg-green-700 text-white font-bold w-10 h-10 flex items-center justify-center rounded"
    >
        +
    </button>
)

export const MinusButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="bg-[#880D1E] hover:bg-red-700 text-white font-bold w-10 h-10 flex items-center justify-center rounded"
    >
        -
    </button>
)

export const InputButton = ({ href, text }) => (
    <Link href={href} className="bg-[#4F4789] text-white px-4 py-2 rounded mx-10 mt-4 whitespace-nowrap">
        {text}
    </Link>
)

export const ListButton = ({ href, text }) => (
    <Link href={href} className="bg-[#4F4789] text-white px-4 py-2 rounded mx-10 mt-4">
        {text}
    </Link>
)