import { useEffect, useState } from "react";
import DevIcon from "./components/DevIcon.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import { externalNavItems, navItems, portfolioData } from "./data/portfolioData.js";
import "./styles/portfolio.css";

const contactRows = [
  { icon: "@", label: "Email", key: "email", href: (value) => "mailto:" + value },
  { icon: "+", label: "Phone", key: "phone", href: (value) => "tel:" + value },
  { icon: "in", label: "LinkedIn", key: "linkedin", href: (value) => "https://" + value },
  { icon: "gh", label: "GitHub", key: "github", href: (value) => "https://" + value },
  // { icon: "loc", label: "Location", key: "location" },
];

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const page = document.documentElement;
      const total = page.scrollHeight - page.clientHeight;
      setScrollPct(total ? (page.scrollTop / total) * 100 : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.dataset.section);
      }),
      { rootMargin: "-40% 0px -55% 0px" },
    );

    navItems.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="portfolio-shell">
      <div className="scroll-progress" style={{ width: scrollPct + "%" }} />

      <nav className={scrolled ? "site-nav site-nav--scrolled" : "site-nav"}>
        <span className="site-nav__brand">{portfolioData.initials}</span>
        <div className="site-nav__links">
          {navItems.map((item) => (
            <button key={item} type="button" className={active === item ? "nav-link nav-link--active" : "nav-link"} onClick={() => scrollTo(item)}>
              {item}
            </button>
          ))}
          {externalNavItems.map((item) => (
            <a key={item.label} className="nav-link nav-link--external" href={item.url || "#"} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          ))}
        </div>
        <button type="button" className="nav-link site-nav__menu" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => <button key={item} type="button" onClick={() => scrollTo(item)}>{item}</button>)}
          {externalNavItems.map((item) => <a key={item.label} href={item.url || "#"} target="_blank" rel="noopener noreferrer">{item.label}</a>)}
        </div>
      )}

      <section id="About" data-section="About" className="section section--hero">
        <div className="container">
          <div className="hero-row">
            <div className="hero-copy">
              <span className="tag">{portfolioData.title}</span>
              <h1>{portfolioData.name.split(" ").map((part) => <span key={part}>{part}</span>)}</h1>
            </div>

            <div className="profile-photo">
              <img src={portfolioData.profileImage} alt={portfolioData.name} />
            </div>
          </div>

          <div className="rule" />

          <div className="about-grid">
            <div>
              <p>
                Full Stack Developer with 2+ years of experience, working across the full stack with React.js, Node.js, and MongoDB.
                Improved API performance through Redis caching and query optimization, and enhanced frontend load speed via lazy
                loading and code splitting. Experienced in REST API design, JWT auth, Redux, Docker, and Agile workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="Skills" data-section="Skills" className="section section--muted">
        <div className="container">
          <p className="section-label">02 - Technical Skills</p>
          {portfolioData.skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <p>{group.label}</p>
              <div className="skill-grid">
                {group.skills.map((skill) => <DevIcon key={skill.name} icon={skill.icon} name={skill.name} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="Experience" data-section="Experience" className="section">
        <div className="container">
          <p className="section-label">03 - Work Experience</p>
          {portfolioData.experience.map((job) => (
            <article key={job.role} className="timeline-card">
              <div className="timeline-card__header">
                <div>
                  <h3>{job.role}</h3>
                  <p>{job.company}, {job.location}</p>
                </div>
                <span className="tag">{job.period}</span>
              </div>
              <div className="tag-list">{job.stack.map((tool) => <span key={tool}>{tool}</span>)}</div>
              <ul className="clean-list bullet-list">{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="Projects" data-section="Projects" className="section section--muted">
        <div className="container">
          <p className="section-label">04 - Projects</p>
          {portfolioData.projects.map((project) => <ProjectCard key={project.name} project={project} />)}
        </div>
      </section>

      <section id="Education" data-section="Education" className="section">
        <div className="container">
          <p className="section-label">05 - Education</p>
          <article className="education-card">
            <div>
              <h3>{portfolioData.education.degree}</h3>
              <p>{portfolioData.education.college}</p>
            </div>
            <div>
              <span className="tag">{portfolioData.education.period}</span>
              <span className="tag tag--dark">CGPA {portfolioData.education.cgpa}</span>
            </div>
          </article>
        </div>
      </section>

      <section id="Contact" data-section="Contact" className="section contact-section">
        <div className="container">
          <p className="section-label">06 - Get In Touch</p>
          <h2>Let's build something together.</h2>
          <div className="contact-list">
            {contactRows.map((row) => {
              const value = portfolioData.contact[row.key];
              const href = row.href?.(value);
              return (
                <div key={row.key} className="contact-row">
                  <div>{row.icon}</div>
                  <span>{row.label}</span>
                  {href ? <a href={href}>{value}</a> : <p>{value}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <strong>{portfolioData.name}</strong>
          <span>{portfolioData.title} - {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}





