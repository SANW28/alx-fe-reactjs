import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (criteria) => {
        setLoading(true);
        setError('');
        try {
            const data = await fetchUserData(criteria);
            if (data.length > 0) {
                setUserData(data[0]); // Assuming you want the first user
            } else {
                setError('Looks like we can’t find the user.');
            }
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
            {loading && <p>Loading...</p>} {/* Loading state */}
            {error && <p className="text-red-500">{error}</p>} {/* Error message */}
            {userData && ( // Display user info if available
                <div className="mt-4 border p-4 flex items-center">
                    <img src={userData.avatar_url} alt={userData.login} className="w-16 h-16 rounded-full mr-4" />
                    <div>
                        <h2 className="text-lg font-semibold">{userData.login}</h2>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                            View Profile
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;


