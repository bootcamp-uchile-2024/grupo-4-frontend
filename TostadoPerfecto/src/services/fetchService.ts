export const getProducts = async (endpoint: string) => {
    
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;

};