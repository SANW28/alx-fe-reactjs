import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');

    // Handle input change for each field
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'location') setLocation(value);
        if (name === 'minRepos') setMinRepos(value);
    };

    // Handle form submission and call the onSearch prop
    const handleSubmit = (e) => {
        e.preventDefault();
        const query = `username:${username} location:${location} repos:>${minRepos}`;
        onSearch(query); // Pass the constructed query to the parent component
    };

    return (
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
                placeholder="Enter Location"
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
    );
};

export default Search;


