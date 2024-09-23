import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState(''); // State for storing the username input
  const [user, setUser] = useState(null); // State for storing fetched user data
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(''); // State for storing error messages

  const handleInputChange = (event) => {
    setUsername(event.target.value); // Capturing input value using event.target.value
  };

  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent form submission

    setLoading(true); // Start loading
    setError(''); // Reset any previous error
    setUser(null); // Clear previous user data

    try {
      const data = await fetchUserData(username); // Fetch user data using the username
      setUser(data); // Set user data to state
    } catch (err) {
      setError("Looks like we can't find the user"); // Set error message if user not found
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange} // Handle input change
          placeholder="Search for a GitHub user"
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p>{error}</p>} {/* Show error message if there's an error */}
      {user && (
        <div>
          <h3>{user.login}</h3>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;



