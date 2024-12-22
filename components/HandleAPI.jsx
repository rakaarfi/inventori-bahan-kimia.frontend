import axios from "axios";

export const handleUpdate = async (e, id, url) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());

    try {
        const response = await axios.post(
            `${url}/update/${id}`,
            updatedData
        );
        alert("Data updated successfully!");

    } catch (err) {
        alert("Error updating data: " + err.message);
    }
};

export const handleDelete = async (id, url) => {
    try {
        await axios.post(`${url}/delete/${id}`);
        alert("Data deleted successfully!");

    } catch (err) {
        alert("Error deleting data: " + err.message);
    }
};

export const fetchData = async ({ apiUrl, currentPage, search, setData, setCurrentPage, setTotalPages, setError }) => {
    try {
        const response = await axios.get(
            `${apiUrl}/list_lokasi_bahan_kimia?page=${currentPage}&search=${search}`
        );
        const { data, page, total_pages } = response.data.list_lokasi_bahan_kimia;

        setData(data);
        setCurrentPage(page);
        setTotalPages(total_pages);
    } catch (error) {
        console.error("Error fetching data:", error.message);
        setError(error.message);
    }
};
