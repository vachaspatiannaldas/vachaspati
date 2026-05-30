import { useEffect, useState } from "react";

export default function MediaLightbox({ items, startIdx, onClose }) {
  const [idx, setIdx] = useState(startIdx);
  const item = items[idx];

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setIdx((current) => Math.min(current + 1, items.length - 1));
      if (event.key === "ArrowLeft") setIdx((current) => Math.max(current - 1, 0));
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [items.length, onClose]);

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__content" onClick={(event) => event.stopPropagation()}>
        {item.type === "video" ? (
          <video src={item.url} controls autoPlay className="lightbox__media" />
        ) : (
          <img src={item.url} alt={item.caption || "Project media"} className="lightbox__media" />
        )}
        {item.caption && <p className="lightbox__caption">{item.caption}</p>}
        <div className="lightbox__controls">
          <button type="button" onClick={() => setIdx((current) => Math.max(current - 1, 0))} disabled={idx === 0}>Prev</button>
          <span>{idx + 1} / {items.length}</span>
          <button type="button" onClick={() => setIdx((current) => Math.min(current + 1, items.length - 1))} disabled={idx === items.length - 1}>Next</button>
        </div>
      </div>
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close media preview">x</button>
    </div>
  );
}
