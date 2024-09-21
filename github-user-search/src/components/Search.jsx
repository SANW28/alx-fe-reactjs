import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") setUsername(value);
        if (name === "location") setLocation(value);
        if (name === "minRepos") setMinRepos(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ username, location, minRepos });
    };

    return (
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username"
                value={username} 
                onChange={handleInputChange} 
                placeholder="Enter GitHub username" 
                required 
                className="p-2 border rounded"
            />
            <input 
                type="text" 
                name="location" 
                value={location} 
                onChange={handleInputChange} 
                placeholder="Enter Location" 
                className="p-2 border rounded"
            />
            <input 
                type="number" 
                name="minRepos" 
                value={minRepos} 
                onChange={handleInputChange} 
                placeholder="Minimum Repositories" 
                className="p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Search
            </button>
        </form>
    );
};

export default Search;
