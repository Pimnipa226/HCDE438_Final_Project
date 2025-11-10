const apiKey = '_6DSAq7bsmePBPdHc_Fuec85Q2Dgz8KMbn4oOM97Drc';

export async function fetchImages(query) {
    if (!query) return [];
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`)
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}
