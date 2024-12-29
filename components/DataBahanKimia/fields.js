const fields = [
    { label: "Ruang", name: "id_location", type: "select", options: [] }, // Options to be dynamically loaded
    { label: "Nama Bahan Kimia", name: "name", type: "text" },
    { label: "Nama Dagang", name: "trade_name", type: "text" },
    { label: "Rumus Kimia", name: "chemical_formula", type: "text" },
    { label: "Pabrik Pembuat", name: "id_factory", type: "select", options: [] }, // Options to be dynamically loaded
    { label: "Karakteristik", name: "characteristic", type: "select", options: ["Flammable", "Toxic", "Corrosive", "Explosive", "Carcinogen", "Iritating"] },
    { label: "Jumlah Inventori Maksimal", name: "max_amount", type: "number" },
    { label: "Satuan", name: "unit", type: "select", options: ["Gram", "Kilogram", "Kiloliter", "Kotak", "Kilo", "Mililiter", "Ton"] },
    { label: "Keterangan", name: "description", type: "textarea" },
];

export default fields;
