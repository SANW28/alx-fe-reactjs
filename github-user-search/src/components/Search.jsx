import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Assuming you have this service set up

const Search = () => {
    // State variables for form inputs, search results, loading, and error states
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [results, setResults] = useState([]); // Store search results
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(''); // Error state

    // Handle input changes for all input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'location') setLocation(value);
        if (name === 'minRepos') setMinRepos(value);
    };

    // Handle form submission and fetch data
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        setError(''); // Clear previous errors

        try {
            // Construct query using advanced search fields
            const query = `${username ? `username:${username}` : ''} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>${minRepos}` : ''}`;
            
            const data = await fetchUserData(query); // Fetch data using async/await

            if (data.length > 0) {
                setResults(data); // Store results in state
            } else {
                setError('Looks like we can’t find the user');
            }
        } catch (err) {
            setError('Looks like we can’t find the user'); // Display error message on failure
        } finally {
            setLoading(false); // End loading
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">GitHub User Search</h1>
            {/* Search form */}
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                {/* Username input */}
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Enter GitHub username"
                    className="p-2 border rounded"
                />
                {/* Location input */}
                <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleInputChange}
                    placeholder="Enter location"
                    className="p-2 border rounded"
                />
                {/* Minimum Repositories input */}
                <input
                    type="number"
                    name="minRepos"
                    value={minRepos}
                    onChange={handleInputChange}
                    placeholder="Minimum Repositories"
                    className="p-2 border rounded"
                />
                {/* Submit button */}
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Search
                </button>
            </form>

            {/* Display loading message */}
            {loading && <p>Loading...</p>}

            {/* Display error message */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Display search results */}
            <div className="mt-4">
                {results.length > 0 && results.map((user) => (
                    <div key={user.id} className="border p-4 mb-2 flex items-center">
                        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mr-4" />
                        <div>
                            <h2 className="text-lg font-semibold">{user.login}</h2>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                View Profile
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;


