import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const handleSearch = async (criteria) => {
        setLoading(true);
        setError('');
        try {
            const data = await fetchUserData(criteria);
            setUserData(data);
            // Assuming the GitHub API returns an object with total_count
            setTotalPages(Math.ceil(data.total_count / 30)); // Adjust based on your items per page
        } catch (error) {
            setError('Looks like we can’t find the user.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl">GitHub User Search</h1>
            <Search onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div className="mt-4">
                {userData.length > 0 && userData.map((user) => (
                    <div key={user.id} className="border p-4 mb-2 flex items-center">
                        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mr-4" />
                        <div>
                            <h2 className="text-lg font-semibold">{user.login}</h2>
                            <p>Location: {user.location || 'N/A'}</p>
                            <p>Repositories: {user.public_repos}</p>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View Profile</a>
                        </div>
                    </div>
                ))}
            </div>
            {totalPages > 1 && page < totalPages && (
                <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} className="bg-blue-500 text-white p-2 rounded">
                    Load More
                </button>
            )}
        </div>
    );
};

export default App;

