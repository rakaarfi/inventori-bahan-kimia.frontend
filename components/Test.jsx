// components/TableLokasiBahanKimia.jsx
import React from "react";

const Test = () => {
    return (
        <table class="table-auto border-separate border-spacing-0 w-full">
            <thead>
                <tr>
                    <th class="border-b border-t border-gray-300 px-4 py-2">Header 1</th>
                    <th class="border-b border-t border-gray-300 px-4 py-2">Header 2</th>
                    <th class="border-b border-t border-gray-300 px-4 py-2">Header 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-b border-t border-gray-300 px-4 py-2">Row 1, Col 1</td>
                    <td class="border-b border-t border-gray-300 px-4 py-2">Row 1, Col 2</td>
                    <td class="border-b border-t border-gray-300 px-4 py-2">Row 1, Col 3</td>
                </tr>
                <tr>
                    <td class="border-b border-t border-gray-300 px-4 py-2">Row 2, Col 1</td>
                    <td class="border-b border-t border-gray-300 px-4 py-2">Row 2, Col 2</td>
                    {/* <td class="border-b border-t border-gray-300 px-4 py-2">Row 2, Col 3</td> */}
                    <td class="px-4 py-2">
                        <input type="text" class="w-full border border-gray-300 rounded px-2 py-1" />
                    </td>
                </tr>
            </tbody>
        </table>

    );
};

export default Test;
