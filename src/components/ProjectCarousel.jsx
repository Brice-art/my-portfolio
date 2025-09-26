import React, { useEffect, useState } from "react";

const GITHUB_USER = "Brice-art";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const languageColors = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
};
const languageBadge = (lang) => (
  <img
    key={lang}
    src={`https://img.shields.io/badge/${encodeURIComponent(lang)}-${
      languageColors[lang]?.replace("#", "") || "gray"
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

const fetchWithAuth = (url) =>
  fetch(url, { headers: { Authorization: `token ${GITHUB_TOKEN}` } });

const ProjectCarousel = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const itemsPerPage = 2;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetchWithAuth(
          `https://api.github.com/users/${GITHUB_USER}/starred`
        );
        if (!response.ok) throw new Error("Failed to fetch repos");
        const starred = await response.json();
        const owned = starred.filter((repo) => repo.owner.login === GITHUB_USER);

        setRepositories(owned);
      } catch (err) {
        console.error("Error fetching repositories:", err);
        setRepositories([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  // autoplay effect
  useEffect(() => {
    if (repositories.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + itemsPerPage) % repositories.length);
    }, 8000); 
    return () => clearInterval(interval);
  }, [repositories]);

  if (loading) return <div>Loading projects...</div>;

  const totalPages = Math.ceil(repositories.length / itemsPerPage);

  const goToPage = (pageIndex) => {
    setCurrent(pageIndex * itemsPerPage);
  };

  const visible = repositories.slice(current, current + itemsPerPage);
  const projectsToShow =
    visible.length < itemsPerPage
      ? [...visible, ...repositories.slice(0, itemsPerPage - visible.length)]
      : visible;

  const activePage = Math.floor(current / itemsPerPage);

  return (
    <div className="project-carousel">
      <div className="carousel-track">
        {projectsToShow.map((repo) => (
          <div key={repo.id} className="carousel-item">
            <h3>{repo.name}</h3>
            <div className="project-badges">
              {repo.language && languageBadge(repo.language)}
              {repo.hasReact && reactBadge}
            </div>
            <p>{repo.description || "No description available."}</p>
            <a
              href={repo.html_url}
              className="repository-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>

      {/* dots below */}
      <div className="carousel-dots">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`dot ${i === activePage ? "active" : ""}`}
            onClick={() => goToPage(i)}
          >
            ●
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
