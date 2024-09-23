import axios from 'axios';

// Function to fetch user data from GitHub based on advanced search criteria
export const fetchUserData = async (query) => {
    try {
        // Base GitHub search URL
        const url = `https://api.github.com/search/users?q=${query}`;

        // Make API call using Axios
        const response = await axios.get(url);

        // Return the items (list of users) from the response
        return response.data.items;
    } catch (error) {
        console.error('Error fetching data from GitHub API:', error);
        throw error;
    }
};
