import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/";

export const handleUpdate = async (e, id, routeUrl) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());

    try {
        const response = await axios.post(
            `${apiUrl}${routeUrl}/update/${id}`,
            updatedData
        );
        alert("Data updated successfully!");

    } catch (err) {
        alert("Error updating data: " + err.message);
    }
};

export const handleDelete = async (id, routeUrl) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this data?");
    if (isConfirmed) {
    try {
        await axios.post(`${apiUrl}${routeUrl}/delete/${id}`);
        alert("Data deleted successfully!");

    } catch (err) {
        alert("Error deleting data: " + err.message);
    }
}
};
