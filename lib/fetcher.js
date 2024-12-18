// lib/fetcher.js
export async function fetcher(url, method = "GET", body = null) {
    const options = {
        method, // Default: GET
        headers: {
            "Content-Type": "application/json", // Set header content type to JSON
        },
    };

    console.log({url, method, body});

    if (body) {
        options.body = JSON.stringify(body); // Convert body to JSON if provided
    }

    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}
