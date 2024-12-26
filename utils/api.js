import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/";

// Create
export const createTransactions = async (payload) => {
    const response = await axios.post(`${apiUrl}data_penerimaan_penggunaan/create/`, {
        transactions: payload,
    });
    return response.data;
};

export const createData = async ({ routeUrl, payload}) => {
    const response = await axios.post(`${apiUrl}${routeUrl}/create/`, payload);
    return response.data;
};

// Read
export const fetchTotalInventory = async (chemicalId) => {
    const response = await axios.get(`${apiUrl}data_penerimaan_penggunaan/total/${chemicalId}`);
    return response.data;
};

export const fetchData = async (routeUrl) => {
    const response = await axios.get(`${apiUrl}${routeUrl}/read`);
    return response.data;
}

export const fetchPaginatedData = async ({ 
    routeUrl, 
    responseKey, 
    currentPage, 
    search, 
    setData, 
    setCurrentPage, 
    setTotalPages, 
    setError
}) => {
    try {
        const url = `${apiUrl}${routeUrl}/${responseKey}?page=${currentPage}&search=${search}`;
        const response = await axios.get(url);
        const { data, page, total_pages } = response.data[responseKey];

        setData(data);
        setCurrentPage(page);
        setTotalPages(total_pages);   
        
    } catch (error) {
        console.error("Error fetching data:", error.message);
        setError(error.message);
    }
};

// Read by ID
export const readById = async ({ routeUrl, id }) => {
    const response = await axios.get(`${apiUrl}${routeUrl}/read/${id}`);
    return response.data;
};

// Update


// Delete