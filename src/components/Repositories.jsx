import React, { useEffect, useState } from "react";

const GITHUB_USER = "Brice-art";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; // Use VITE_ prefix for Vite

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
        const response = await fetchWithAuth(
          `https://api.github.com/users/${GITHUB_USER}/repos`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Enhance each repo with languages, React, backend, and db badges
        const enhancedRepos = await Promise.all(
          data.map(async (repo) => {
            // Fetch languages
            let languages = [];
            try {
              const langRes = await fetchWithAuth(
                `https://api.github.com/repos/${GITHUB_USER}/${repo.name}/languages`
              );
              if (langRes.ok) {
                const langData = await langRes.json();
                languages = Object.keys(langData);
              }
            } catch {}

            // Check for React, backend, and DB in all package.json locations
            let hasReact = false;
            let backendTech = [];
            let dbTech = [];
            const pkgPaths = [
              "package.json",
              "client/package.json",
              "server/package.json",
              "frontend/package.json",
              "backend/package.json",
              "Frontend/package.json",
              "Backend/package.json",
            ];
            for (const path of pkgPaths) {
              try {
                const pkgRes = await fetchWithAuth(
                  `https://api.github.com/repos/${GITHUB_USER}/${repo.name}/contents/${path}`
                );
                if (pkgRes.ok) {
                  const pkgData = await pkgRes.json();
                  if (pkgData.content) {
                    const decoded = atob(pkgData.content.replace(/\n/g, ""));
                    const pkgJson = JSON.parse(decoded);
                    // React detection
                    if (
                      (pkgJson.dependencies && pkgJson.dependencies.react) ||
                      (pkgJson.devDependencies && pkgJson.devDependencies.react) ||
                      (pkgJson.peerDependencies && pkgJson.peerDependencies.react)
                    ) {
                      hasReact = true;
                    }
                    // Backend/DB detection
                    const allDeps = {
                      ...(pkgJson.dependencies || {}),
                      ...(pkgJson.devDependencies || {}),
                    };
                    // Backend
                    if (allDeps["express"] && !backendTech.includes("express"))
                      backendTech.push("express");
                    if ((allDeps["node"] || pkgJson.engines?.node) && !backendTech.includes("node"))
                      backendTech.push("node");
                    if (allDeps["django"] && !backendTech.includes("django"))
                      backendTech.push("django");
                    if (allDeps["flask"] && !backendTech.includes("flask"))
                      backendTech.push("flask");
                    if (allDeps["fastapi"] && !backendTech.includes("fastapi"))
                      backendTech.push("fastapi");
                    // Database
                    if (allDeps["mongodb"] && !dbTech.includes("mongodb")) dbTech.push("mongodb");
                    if (allDeps["pg"] && !dbTech.includes("postgresql")) dbTech.push("postgresql");
                    if (allDeps["mysql"] && !dbTech.includes("mysql")) dbTech.push("mysql");
                    if (allDeps["sqlite3"] && !dbTech.includes("sqlite")) dbTech.push("sqlite");
                    if (allDeps["redis"] && !dbTech.includes("redis")) dbTech.push("redis");
                  }
                }
              } catch {
                // Ignore errors for missing package.json files
              }
            }

            return {
              ...repo,
              languages,
              hasReact,
              backendTech,
              dbTech,
            };
          })
        );

        setRepositories(enhancedRepos);
      } catch (error) {
        console.error("Error fetching repositories:", error);
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
        {repositories.map((repo) => (
          <div key={repo.id} className="repository-item">
            <h3>{repo.name}</h3>
            <div className="project-badges">
              {repo.hasReact && reactBadge}
              {repo.languages.map((lang) => languageBadge(lang))}
              {repo.backendTech && repo.backendTech.map((tech) => techBadge(tech, backendBadges))}
              {repo.dbTech && repo.dbTech.map((db) => techBadge(db, dbBadges))}
            </div>
            <p>{repo.description || "No description available."}</p>
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
