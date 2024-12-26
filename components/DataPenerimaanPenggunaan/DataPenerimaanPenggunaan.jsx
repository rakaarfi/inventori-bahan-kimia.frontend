'use client';

import { useState, useEffect } from 'react';
import DropdownChemical from './DropdownChemical';
import DetailsTable from './DetailsTable';
import TransactionForm from './TransactionForm';
import { fetchTotalInventory, createTransactions } from '@/utils/api';


export default function DataPenerimaanPenggunaan({
    initialChemicalMaterials,
    initialLocations,
    initialFactories,
}) {
    const [selectedChemical, setSelectedChemical] = useState(null);
    const [chemicalMaterials] = useState(initialChemicalMaterials);
    const [locations] = useState(initialLocations);
    const [factories] = useState(initialFactories);
    const [errorMessage, setErrorMessage] = useState("");
    const [remainingAmount, setRemainingAmount] = useState(null);
    const [rows, setRows] = useState([
        { date: "", transaction_type: "", amount: "", unit: "", description: "" },
    ]);

    const handleChemicalMaterialChange = async (selectedId) => {
        const chemical = chemicalMaterials.find((item) => item.id === selectedId);
        setSelectedChemical(chemical);

        if (chemical) {
            const { total_received, total_used } = await fetchTotalInventory(selectedId);
            const currentInventory = total_received - total_used;
            setRemainingAmount(chemical.max_amount - currentInventory);
        } else {
            setRemainingAmount(null);
        }

        setErrorMessage("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedChemical) {
            alert("Harap pilih bahan kimia sebelum mengirim.");
            return;
        }

        const newTotalReceived = rows
            .filter((row) => row.transaction_type === "Penerimaan")
            .reduce((sum, row) => sum + parseFloat(row.amount || 0), 0);

        if (remainingAmount !== null && newTotalReceived > remainingAmount) {
            alert(
                `Harap perbaiki kesalahan sebelum mengirim.\nTotal amount exceeds max amount. ` +
                `Remaining amount: ${remainingAmount}.`
            );
            return;
        }

        const payload = rows.map((row) => ({
            ...row,
            id_chemical_material: selectedChemical.id,
        }));

        try {
            await createTransactions(payload);
            alert("Data berhasil disimpan!");
            setRows([{ date: "", transaction_type: "", amount: "", unit: "", description: "" }]);
        } catch (error) {
            console.error("Error submitting data:", error.message);
            alert("Terjadi kesalahan saat menyimpan data.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen ml-56">
            <div className="justify-items-center border rounded-3xl p-4 shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-4">
                    Data Penerimaan Penggunaan Bahan Kimia
                </h1>
                <DropdownChemical
                    chemicalMaterials={chemicalMaterials}
                    selectedChemical={selectedChemical}
                    onChange={handleChemicalMaterialChange}
                />
                <DetailsTable
                    selectedChemical={selectedChemical}
                    locations={locations}
                    factories={factories}
                    remainingAmount={remainingAmount}
                />
                <TransactionForm
                    rows={rows}
                    setRows={setRows}
                    handleSubmit={handleSubmit}
                    errorMessage={errorMessage}
                />
            </div>
        </div>
    );
}
