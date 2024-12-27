import React from "react";

export default function TableHeader() {
    const headers = [
        "No",
        "Room",
        "Location",
        "Building",
        "Department Name",
        "Contact Person",
        "Phone",
        "Extension",
        "Mobile",
        "Email",
    ];
    const headerActions = "Actions";

    return (
        <thead>
            <tr>
                {headers.map((header) => (
                    <th key={header} className="border border-gray-300 px-4 py-2">
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
