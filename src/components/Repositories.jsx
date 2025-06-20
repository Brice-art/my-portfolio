import React, { useEffect, useState } from "react";

const GITHUB_USER = "Brice-art";

const languageColors = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Java: "#b07219",
  C: "#555555",
  Cpp: "#f34b7d",
  // Add more as needed
};

const languageBadge = (lang) => (
  <img
    key={lang}
    src={`https://img.shields.io/badge/${encodeURIComponent(lang)}-${
      languageColors[lang] ? languageColors[lang].replace("#", "") : "gray"
    }?style=flat&logo=${lang.toLowerCase()}&logoColor=white`}
    alt={lang}
    style={{ height: 24, marginRight: 6, verticalAlign: "middle" }}
  />
);

const reactBadge = (
  <img
    key="React"
    src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB"
    alt="React"
    style={{ height: 24, marginRight: 6, verticalAlign: "middle" }}
  />
);

// Add backend/database badge definitions
const backendBadges = {
  express: {
    name: "Express",
    color: "#000000",
    logo: "express",
  },
  node: {
    name: "Node.js",
    color: "#339933",
    logo: "node.js",
  },
  django: {
    name: "Django",
    color: "#092E20",
    logo: "django",
  },
  flask: {
    name: "Flask",
    color: "#000000",
    logo: "flask",
  },
  fastapi: {
    name: "FastAPI",
    color: "#009688",
    logo: "fastapi",
  },
  // Add more as needed
};

const dbBadges = {
  mongodb: {
    name: "MongoDB",
    color: "#47A248",
    logo: "mongodb",
  },
  postgresql: {
    name: "PostgreSQL",
    color: "#336791",
    logo: "postgresql",
  },
  mysql: {
    name: "MySQL",
    color: "#4479A1",
    logo: "mysql",
  },
  sqlite: {
    name: "SQLite",
    color: "#003B57",
    logo: "sqlite",
  },
  redis: {
    name: "Redis",
    color: "#DC382D",
    logo: "redis",
  },
  // Add more as needed
};

const techBadge = (key, dict) => {
  const tech = dict[key];
  if (!tech) return null;
  return (
    <img
      key={tech.name}
      src={`https://img.shields.io/badge/${encodeURIComponent(
        tech.name
      )}-${tech.color.replace("#", "")}?style=flat&logo=${tech.logo}&logoColor=white`}
      alt={tech.name}
      style={{ height: 24, marginRight: 6, verticalAlign: "middle" }}
    />
  );
};

const fetchWithAuth = (url) =>
  fetch(url, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

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
