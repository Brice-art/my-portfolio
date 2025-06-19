import React, { useEffect, useState } from 'react';

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Brice-art/repos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setRepositories([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  if (loading) {
    return <div>Loading repositories...</div>;
  }

  return (
    <div className="repository-container">
      <div className="repositories-list">
        {repositories.map(repo => (
          <div key={repo.id} className="repository-item">
            <h3>{repo.name}</h3>
            <p>{repo.description || 'No description available.'}</p>
            <a href={repo.html_url} className="repository-link" target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositories;
