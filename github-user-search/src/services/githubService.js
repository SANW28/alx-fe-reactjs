import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

// Fetch user data with advanced query parameters
export const fetchUserData = async (query) => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}?q=${query}`);
        return response.data.items; // Returns the list of users
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};
