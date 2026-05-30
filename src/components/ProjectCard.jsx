import { useState } from "react";
import MediaLightbox from "./MediaLightbox.jsx";

export default function ProjectCard({ project }) {
  const [lightbox, setLightbox] = useState(null);
  const media = project.media || [];

  return (
    <article className="project-card">
      <div className="project-card__body">
        <div className="project-card__header">
          <h3>{project.name}</h3>
          <div className="project-card__links">
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live</a>}
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.stack.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
        <ul className="clean-list bullet-list">
          {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      </div>

      {media.length > 0 && (
        <div className="project-media">
          <p>Screenshots / Demo</p>
          <div className="project-media__grid">
            {media.map((item, index) => (
              <button key={item.url} type="button" onClick={() => setLightbox(index)} className="project-media__item">
                {item.type === "video" ? (
                  <>
                    <video src={item.url} muted loop autoPlay playsInline preload="metadata" />
                    <span className="project-media__badge">Demo</span>
                  </>
                ) : (
                  <img src={item.url} alt={item.caption || project.name} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {lightbox !== null && <MediaLightbox items={media} startIdx={lightbox} onClose={() => setLightbox(null)} />}
    </article>
  );
}
