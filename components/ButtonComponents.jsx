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
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
    >
        Submit
    </button>
);

export const ButtonSaveChanges = ({ type = "submit" }) => (
    <button
        type={type}
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
    >
        Save Changes
    </button>
);

export const ButtonDelete = ({ onClick }) => (
    <button
        onClick={onClick}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
    >
        Delete
    </button>
);

export const ButtonDetail = ({ href }) => (
    <Link
        href={href}
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
    >
        Detail
    </Link>
);
