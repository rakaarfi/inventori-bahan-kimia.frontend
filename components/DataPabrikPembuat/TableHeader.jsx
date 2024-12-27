import React from "react";

export default function TableHeader() {
    const headers = [
        "No",
        "Nama",
        "Alamat",
        "Kota",
        "Kode Pos",
        "Provinsi",
        "Nama Contact Person",
        "No Telepon",
        "Extension",
        "No Hp",
        "Email",
        "Keterangan",
    ];

    const headerActions = "Actions";

    return (
        <thead>
            <tr>
                {headers.map((header, index) => (
                    <th
                        key={index}
                        className="border border-gray-300 px-4 py-2"
                    >
                        {header}
                    </th>
                ))}
                <th className="border border-gray-300 px-4 py-2" colSpan={2}>
                    {headerActions}
                </th>
            </tr>
        </thead>
    );
}
