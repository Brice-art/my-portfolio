import React, { useEffect, useState } from "react";

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
  express: { name: "Express", color: "#000000", logo: "express" },
  node: { name: "Node.js", color: "#339933", logo: "node.js" },
  django: { name: "Django", color: "#092E20", logo: "django" },
  flask: { name: "Flask", color: "#000000", logo: "flask" },
  fastapi: { name: "FastAPI", color: "#009688", logo: "fastapi" },
};

const dbBadges = {
  mongodb: { name: "MongoDB", color: "#47A248", logo: "mongodb" },
  postgresql: { name: "PostgreSQL", color: "#336791", logo: "postgresql" },
  mysql: { name: "MySQL", color: "#4479A1", logo: "mysql" },
  sqlite: { name: "SQLite", color: "#003B57", logo: "sqlite" },
  redis: { name: "Redis", color: "#DC382D", logo: "redis" },
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

export default function Repositories() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStarredRepos() {
      try {
        const response = await fetch("https://api.github.com/users/Brice-art/starred");
        if (!response.ok) throw new Error("Failed to fetch starred repos");
        const data = await response.json();

        // ⭐ Filter: Only show starred repos that belong to you
        const myStarred = data.filter(repo => repo.owner.login === "Brice-art");

        // Enhance each repo with language, React, backend, and DB badges
        const enhanced = await Promise.all(
          myStarred.map(async (repo) => {
            // Languages
            let languages = [];
            try {
              const langRes = await fetch(repo.languages_url);
              if (langRes.ok) {
                const langData = await langRes.json();
                languages = Object.keys(langData);
              }
            } catch {}

            // Try to detect React, backend, DB tech from package.json (if JS project)
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
                const pkgRes = await fetch(
                  `https://api.github.com/repos/${repo.owner.login}/${repo.name}/contents/${path}`
                );
                if (pkgRes.ok) {
                  const pkgData = await pkgRes.json();
                  if (pkgData.content) {
                    const decoded = atob(pkgData.content.replace(/\n/g, ""));
                    const pkgJson = JSON.parse(decoded);

                    if (
                      pkgJson.dependencies?.react ||
                      pkgJson.devDependencies?.react ||
                      pkgJson.peerDependencies?.react
                    ) {
                      hasReact = true;
                    }

                    const allDeps = {
                      ...(pkgJson.dependencies || {}),
                      ...(pkgJson.devDependencies || {}),
                    };

                    if (allDeps["express"] && !backendTech.includes("express")) backendTech.push("express");
                    if ((allDeps["node"] || pkgJson.engines?.node) && !backendTech.includes("node")) backendTech.push("node");
                    if (allDeps["django"] && !backendTech.includes("django")) backendTech.push("django");
                    if (allDeps["flask"] && !backendTech.includes("flask")) backendTech.push("flask");
                    if (allDeps["fastapi"] && !backendTech.includes("fastapi")) backendTech.push("fastapi");

                    if (allDeps["mongodb"] && !dbTech.includes("mongodb")) dbTech.push("mongodb");
                    if (allDeps["pg"] && !dbTech.includes("postgresql")) dbTech.push("postgresql");
                    if (allDeps["mysql"] && !dbTech.includes("mysql")) dbTech.push("mysql");
                    if (allDeps["sqlite3"] && !dbTech.includes("sqlite")) dbTech.push("sqlite");
                    if (allDeps["redis"] && !dbTech.includes("redis")) dbTech.push("redis");
                  }
                }
              } catch {
                // ignore missing files
              }
            }

            return { ...repo, languages, hasReact, backendTech, dbTech };
          })
        );

        setRepos(enhanced);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStarredRepos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="repository-container">
      <div className="repositories-list">
        {repos.map((repo) => (
          <div key={repo.id} className="repository-item">
            <h3>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.full_name}
              </a>
            </h3>
            <div className="project-badges">
              {repo.hasReact && reactBadge}
              {repo.languages && repo.languages.map((lang) => languageBadge(lang))}
              {repo.backendTech && repo.backendTech.map((tech) => techBadge(tech, backendBadges))}
              {repo.dbTech && repo.dbTech.map((db) => techBadge(db, dbBadges))}
            </div>
            <p>{repo.description || "No description"}</p>
            <p className="text-xs text-gray-500">
              ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
