export default function DropdownChemical({ chemicalMaterials, selectedChemical, onChange }) {
    return (
        <div className="mb-4">
            <select
                name="id_chemical_material"
                className="form-select w-full"
                onChange={(e) => onChange(parseInt(e.target.value))}
                value={selectedChemical?.id || ""}
                required
            >
                <option value={""} disabled>Pilih Bahan Kimia</option>
                {chemicalMaterials.map((chemical) => (
                    <option key={chemical.id} value={chemical.id}>
                        {chemical.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
