import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (username) => {
        setLoading(true);
        setError('');
        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (error) {
            setError('Looks like we can’t find the user.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>GitHub User Search</h1>
            <Search onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData && (
                <div>
                    <img src={userData.avatar_url} alt={userData.name} />
                    <h2>{userData.name}</h2>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default App;
