export default function DropdownChemical({ chemicalMaterials, selectedChemical, onChange }) {
    return (
        <div className="mb-4">
            <select
                name="id_chemical_material"
                className="block w-[400px] rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#55c0b8] sm:text-sm/6"
                onChange={(e) => onChange(parseInt(e.target.value))}
                value={selectedChemical?.id || ""}
                required
            >
                <option value={""} disabled >
                    Pilih Bahan Kimia
                </option>
                {chemicalMaterials.map((chemical) => (
                    <option key={chemical.id} value={chemical.id}>
                        {chemical.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
