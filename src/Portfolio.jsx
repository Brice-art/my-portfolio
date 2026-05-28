import { useState, useEffect, useRef } from "react";

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Mono:wght@300;400&family=Syne:wght@400;500;600;700;800&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }

    body {
      background: #f5f4f0;
      color: #1a1a18;
      font-family: 'DM Mono', monospace;
      -webkit-font-smoothing: antialiased;
    }

    ::selection { background: #1a1a18; color: #f5f4f0; }

    .fade-in {
      opacity: 0;
      transform: translateY(18px);
      transition: opacity 0.75s cubic-bezier(0.4,0,0.2,1), transform 0.75s cubic-bezier(0.4,0,0.2,1);
    }
    .fade-in.visible { opacity: 1; transform: translateY(0); }

    @keyframes marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track {
      display: flex;
      width: max-content;
      animation: marquee 30s linear infinite;
    }
    .marquee-track:hover { animation-play-state: paused; }

    .project-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      padding: 4rem 0;
      border-top: 1px solid #1a1a1818;
    }
    .project-row:last-child { border-bottom: 1px solid #1a1a1818; }
    .project-row.reverse { direction: rtl; }
    .project-row.reverse > * { direction: ltr; }

    @media (max-width: 768px) {
      .project-row { grid-template-columns: 1fr; gap: 2rem; direction: ltr !important; }
      .project-row > * { direction: ltr !important; }
    }

    .screenshot-frame {
      position: relative;
      overflow: hidden;
      background: #e8e7e3;
      border: 1px solid #1a1a1812;
      aspect-ratio: 16/10;
    }
    .screenshot-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      display: block;
      transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
    }
    .screenshot-frame:hover img { transform: scale(1.03); }

    .screenshot-placeholder {
      width: 100%;
      height: 100%;
      min-height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ebe9e4;
    }

    .btn-solid {
      display: inline-block;
      padding: 0.6rem 1.3rem;
      border: 1px solid #1a1a18;
      font-family: 'DM Mono', monospace;
      font-size: 0.7rem;
      font-weight: 400;
      letter-spacing: 0.06em;
      text-decoration: none;
      color: #f5f4f0;
      background: #1a1a18;
      transition: background 0.15s ease;
      cursor: pointer;
    }
    .btn-solid:hover { background: #333; }

    .btn-outline {
      display: inline-block;
      padding: 0.6rem 1.3rem;
      border: 1px solid #1a1a1844;
      font-family: 'DM Mono', monospace;
      font-size: 0.7rem;
      font-weight: 400;
      letter-spacing: 0.06em;
      text-decoration: none;
      color: #1a1a18;
      background: transparent;
      transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
      cursor: pointer;
    }
    .btn-outline:hover { background: #1a1a18; color: #f5f4f0; border-color: #1a1a18; }

    .nav-link {
      font-family: 'DM Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.08em;
      text-decoration: none;
      color: #1a1a1877;
      transition: color 0.15s ease;
    }
    .nav-link:hover { color: #1a1a18; }

    .tag {
      font-family: 'DM Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.05em;
      color: #1a1a1866;
      border: 1px solid #1a1a181a;
      padding: 0.18rem 0.5rem;
    }

    .scroll-line {
      width: 1px;
      height: 56px;
      background: #1a1a1833;
      animation: scrollPulse 2s ease-in-out infinite;
    }
    @keyframes scrollPulse {
      0%, 100% { opacity: 0.3; transform: scaleY(1); }
      50%       { opacity: 0.9; transform: scaleY(1.12); }
    }

    .contact-link {
      font-family: 'DM Mono', monospace;
      font-size: 0.7rem;
      letter-spacing: 0.06em;
      padding: 0.65rem 1.4rem;
      border: 1px solid #f5f4f033;
      color: #f5f4f0;
      text-decoration: none;
      background: transparent;
      transition: background 0.15s ease, border-color 0.15s ease;
      display: inline-block;
    }
    .contact-link:hover { background: #f5f4f011; border-color: #f5f4f055; }

    @media (max-width: 640px) {
      .hero-name { font-size: 2.6rem !important; }
      .hero-btns { flex-direction: column; }
    }
  `}</style>
);

function useFadeIn(threshold = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "1.3rem 2.5rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(245,244,240,0.93)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid #1a1a1812" : "1px solid transparent",
      transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s"
    }}>
      <span style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", color: "#1a1a18" }}>
        BAB
      </span>
      <div style={{ display: "flex", gap: "2.5rem" }}>
        {[["Work", "#work"], ["About", "#about"], ["Resume", "#resume"], ["Contact", "#contact"]].map(([l, h]) => (
          <a key={l} href={h} className="nav-link">{l}</a>
        ))}
      </div>
    </nav>
  );
};

const Hero = () => {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 100); return () => clearTimeout(t); }, []);

  const fade = (delay) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "none" : "translateY(16px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`
  });

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column", justifyContent: "center",
      padding: "0 2.5rem", maxWidth: "860px", margin: "0 auto", position: "relative"
    }}>
      <div style={{ ...fade(0.1), fontFamily: "'DM Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.14em", color: "#1a1a1852", marginBottom: "3.5rem" }}>
        RWANDA → JAPAN — SOFTWARE ENGINEERING
      </div>

      <h1
        className="hero-name"
        style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          fontWeight: 300, lineHeight: 1.06, letterSpacing: "-0.01em",
          color: "#1a1a18", marginBottom: "2rem",
          ...fade(0.25)
        }}
      >
        Brice Byiringiro<br />
        <em style={{ fontStyle: "italic", fontWeight: 200, fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}>Full-stack Developer</em>
      </h1>

      <div style={{
        fontFamily: "'DM Mono',monospace", fontSize: "0.7rem",
        letterSpacing: "0.06em", color: "#1a1a1870", marginBottom: "1.75rem",
        ...fade(0.42)
      }}>
        Full-stack Development&nbsp;&nbsp;·&nbsp;&nbsp;Python&nbsp;&nbsp;·&nbsp;&nbsp;Systems Thinking
      </div>

      <p style={{
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: "1.1rem", fontWeight: 400, color: "#1a1a1890",
        maxWidth: "440px", lineHeight: 1.65, marginBottom: "3rem",
        ...fade(0.52)
      }}>
        Engineering background. Transitioning into software through consistent building and learning.
      </p>

      <div className="hero-btns" style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap", ...fade(0.66) }}>
        <a href="https://github.com/Brice-art" target="_blank" rel="noopener noreferrer" className="btn-solid">GitHub ↗</a>
        <a href="#contact" className="btn-outline">Contact</a>
        <a href="/Brice_Byiringiro_Resume.pdf" download className="btn-outline">Download CV</a>
      </div>

      <div style={{
        position: "absolute", bottom: "2.5rem", left: "2.5rem",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        opacity: vis ? 0.45 : 0, transition: "opacity 1s ease 1.3s"
      }}>
        <div className="scroll-line" />
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.52rem", letterSpacing: "0.12em", color: "#1a1a1866", writingMode: "vertical-rl" }}>scroll</span>
      </div>

      <div style={{
        position: "absolute", bottom: "2.5rem", right: "2.5rem",
        fontFamily: "'DM Mono',monospace", fontSize: "0.58rem",
        letterSpacing: "0.1em", color: "#1a1a1830",
        opacity: vis ? 1 : 0, transition: "opacity 1s ease 1.3s"
      }}>
        2026
      </div>
    </section>
  );
};

const Currently = () => {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="fade-in" style={{ maxWidth: "860px", margin: "0 auto", padding: "0 2.5rem 5rem" }}>
      <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.68rem", letterSpacing: "0.07em", color: "#1a1a1852", lineHeight: 2 }}>
        Currently — learning backend architecture, cleaner Python design, and REST API patterns.
      </p>
    </div>
  );
};

const About = () => {
  const ref = useFadeIn();
  return (
    <section id="about" style={{ padding: "7rem 2.5rem", background: "#eeecea" }}>
      <div ref={ref} className="fade-in" style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(90px,18%,160px) 1fr",
          gap: "clamp(2rem,6vw,5rem)",
          alignItems: "start"
        }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.14em", color: "#1a1a1850", paddingTop: "0.35rem" }}>
            00 / ABOUT
          </span>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,4vw,2.75rem)", fontWeight: 300, lineHeight: 1.3, color: "#1a1a18", marginBottom: "2rem" }}>
              From civil structures<br /><em>to software systems.</em>
            </h2>
            <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.76rem", lineHeight: 2, color: "#1a1a1883", marginBottom: "1.25rem" }}>
              Originally from Rwanda. Studied civil engineering in Japan. Somewhere in that process I got more interested in how software systems are designed than how bridges are.
            </p>
            <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.76rem", lineHeight: 2, color: "#1a1a1883", marginBottom: "1.25rem" }}>
              I've been building my way in backend APIs, databases, OOP patterns, and full-stack projects. Most of my learning comes from building actual things and understanding why they break.
            </p>
            <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.76rem", lineHeight: 2, color: "#1a1a1883" }}>
              English ( Fluent ) · Japanese ( Fluent, BJT 430 ) · Kinyarwanda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const skills = [
  "Python", "Node.js", "PHP / Laravel", "REST APIs", "SQL / PostgreSQL",
  "MongoDB", "React", "JavaScript", "Git", "OOP", "DSA", "MVC Pattern",
  "JWT Auth", "Express.js", "Linux CLI"
];

const Skills = () => {
  const doubled = [...skills, ...skills];
  return (
    <section style={{ padding: "5rem 0", borderTop: "1px solid #1a1a180f", borderBottom: "1px solid #1a1a180f", overflow: "hidden" }}>
      <div className="marquee-track">
        {doubled.map((s, i) => (
          <span key={i} style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.1em",
            color: i % 2 === 0 ? "#1a1a18" : "#1a1a1850",
            whiteSpace: "nowrap",
            padding: "0 2.2rem"
          }}>
            {s}&nbsp;&nbsp;&nbsp;—
          </span>
        ))}
      </div>
    </section>
  );
};

const projects = [
  {
    index: "01",
    title: "Agakayi Notes App",
    url: "https://agakayi.xyz",
    github: "https://github.com/Brice-art/Agakayi",
    screenshot: "/screenshots/agakayi.png",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    description:
      "Full-stack note management app on the MERN stack. The backend handles JWT-based auth, RESTful routing, and CRUD via MongoDB. Frontend communicates through a clean API layer; no page reloads, real-time updates.",
    focus: "Backend architecture · API integration · secure auth flow"
  },
  {
    index: "02",
    title: "Rshift Chrome Extension",
    url: null,
    github: "https://github.com/Brice-art",
    screenshot: "/screenshots/rshift.png",
    stack: ["JavaScript", "DOM API", "Google Calendar API", "OAuth 2.0", "Chrome Extensions"],
    description:
      "Extracts shift data from a rendered scheduling page using DOM manipulation, then exports it to Google Calendar via OAuth-authenticated API calls. One-click, zero manual entry.",
    focus: "DOM parsing · OAuth flow · browser extension architecture"
  },
  {
    index: "03",
    title: "MyStore E-Commerce (Raw PHP)",
    url: null,
    github: "https://github.com/Brice-art",
    screenshot: "/screenshots/myStore.png",
    stack: ["PHP", "MySQL", "MVC Pattern", "OOP", "SQL"],
    description:
      "E-commerce platform built with raw PHP and no framework, intentionally. Admin dashboard, cart, user/admin auth, product search. The constraint forces deep understanding of MVC, OOP, and SQL without abstraction layers.",
    focus: "MVC from scratch · OOP depth · raw SQL without ORMs"
  }
];

const ScreenshotPlaceholder = ({ title }) => (
  <div className="screenshot-placeholder">
    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.12em", color: "#1a1a1833" }}>
      {title}
    </span>
  </div>
);

const ProjectImage = ({ src, alt, title }) => {
  const [err, setErr] = useState(false);
  return (
    <div className="screenshot-frame">
      {err || !src
        ? <ScreenshotPlaceholder title={title} />
        : <img src={src} alt={alt} onError={() => setErr(true)} />
      }
    </div>
  );
};

const Work = () => {
  const ref = useFadeIn();
  return (
    <section id="work" style={{ padding: "7rem 2.5rem" }}>
      <div ref={ref} className="fade-in" style={{ maxWidth: "860px", margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "4rem" }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.14em", color: "#1a1a1850" }}>
            01 / SELECTED WORK
          </span>
          <a
            href="https://github.com/Brice-art"
            target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.63rem", letterSpacing: "0.05em", color: "#1a1a1860", textDecoration: "none", borderBottom: "1px solid #1a1a1830", paddingBottom: "2px", transition: "color 0.15s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#1a1a18"}
            onMouseLeave={e => e.currentTarget.style.color = "#1a1a1860"}
          >
            All on GitHub ↗
          </a>
        </div>

        <div>
          {projects.map((p, i) => (
            <div key={p.index} className={`project-row${i % 2 === 1 ? " reverse" : ""}`}>
              <ProjectImage src={p.screenshot} alt={p.title} title={p.title} />
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.08em", color: "#1a1a1838" }}>{p.index}</span>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.1rem", fontWeight: 600, color: "#1a1a18", letterSpacing: "-0.01em" }}>
                    {p.title}
                  </h3>
                </div>
                <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.72rem", lineHeight: 1.9, color: "#1a1a1877" }}>
                  {p.description}
                </p>
                <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.04em", color: "#1a1a1850" }}>
                  Focus: {p.focus}
                </p>
                <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
                  {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", paddingTop: "0.25rem" }}>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-solid">Live ↗</a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-outline">GitHub ↗</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Resume = () => {
  const ref = useFadeIn();
  return (
    <section id="resume" style={{ padding: "7rem 2.5rem", background: "#eeecea" }}>
      <div ref={ref} className="fade-in" style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(90px,18%,160px) 1fr",
          gap: "clamp(2rem,6vw,5rem)",
          alignItems: "start"
        }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.14em", color: "#1a1a1850", paddingTop: "0.35rem" }}>
            02 / RESUME
          </span>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,4vw,2.65rem)", fontWeight: 300, lineHeight: 1.3, color: "#1a1a18", marginBottom: "2rem" }}>
              Qualifications &<br /><em>background.</em>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2.5rem" }}>
              {[
                ["Languages", "EN · JP · RW"],
                ["Certifications", "TOEIC 930 · BJT 430"],
                ["Background", "Associate's in Civil Engineering, Japan"],
                ["Location", "Kigali, Rwanda ・ Tokyo, Japan"]
              ].map(([label, val]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.1em", color: "#1a1a1850", marginBottom: "0.3rem" }}>{label}</div>
                  <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.73rem", color: "#1a1a18" }}>{val}</div>
                </div>
              ))}
            </div>
            <div style={{ border: "1px solid #1a1a1815", marginBottom: "1.5rem", background: "#f0ede8" }}>
              <object data="/Brice_Byiringiro_Resume.pdf" type="application/pdf" width="100%" height="520">
                <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.72rem", color: "#1a1a1866", padding: "2rem" }}>
                  PDF preview unavailable.{" "}
                  <a href="/Brice_Byiringiro_Resume.pdf" style={{ color: "#1a1a18", textDecoration: "underline" }}>Download directly.</a>
                </p>
              </object>
            </div>
            <a href="/Brice_Byiringiro_Resume.pdf" download className="btn-solid">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const ref = useFadeIn();
  return (
    <section id="contact" style={{ padding: "8rem 2.5rem 6rem", background: "#1a1a18" }}>
      <div ref={ref} className="fade-in" style={{ maxWidth: "860px", margin: "0 auto" }}>
        <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.14em", color: "#f5f4f038", marginBottom: "3rem" }}>
          03 / CONTACT
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "clamp(2.5rem,6vw,4.5rem)",
          fontWeight: 300, lineHeight: 1.1,
          color: "#f5f4f0", marginBottom: "1.5rem"
        }}>
          Still learning.<br />
          <em>Still building.</em>
        </h2>
        <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.73rem", lineHeight: 2, color: "#f5f4f060", maxWidth: "400px", marginBottom: "3.5rem" }}>
          Open to conversations about backend development, learning, or anything interesting.
        </p>
        <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap", marginBottom: "5.5rem" }}>
          <a href="mailto:bricealibyilingiro@gmail.com" className="contact-link">Email ↗</a>
          <a href="https://github.com/Brice-art" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/briceali/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn ↗</a>
        </div>
        <div style={{
          borderTop: "1px solid #f5f4f012",
          paddingTop: "2rem",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem"
        }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.1em", color: "#f5f4f030" }}>
            BYIRINGIRO BRICE ALI — KIGALI, RWANDA
          </span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.1em", color: "#f5f4f030" }}>
            © 2026
          </span>
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <main>
        <Hero />
        <Currently />
        <About />
        <Skills />
        <Work />
        <Resume />
        <Contact />
      </main>
    </>
  );
}