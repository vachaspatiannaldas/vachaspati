import { useMemo, useState } from "react";

const plainIcons = new Set(["express", "github", "django", "apachesolr", "amazonwebservices"]);

const iconAliases = {
  apachesolr: "solr",
};

const preferredVariants = {
  amazonwebservices: ["original-wordmark", "plain-wordmark", "original", "plain"],
  django: ["plain", "plain-wordmark", "original", "original-wordmark"],
  solr: ["original", "plain", "original-wordmark", "plain-wordmark"],
};

const externalFallbacks = {
  apachesolr: ["https://cdn.simpleicons.org/apachesolr/0a0a0a"],
};

const defaultVariants = ["original", "plain", "original-wordmark", "plain-wordmark"];

function getIconUrls(icon) {
  const deviconSlug = iconAliases[icon] || icon;
  const variants = preferredVariants[deviconSlug] || defaultVariants;
  const deviconUrls = variants.map(
    (variant) => "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + deviconSlug + "/" + deviconSlug + "-" + variant + ".svg",
  );

  return [...deviconUrls, ...(externalFallbacks[icon] || [])];
}

export default function DevIcon({ icon, name }) {
  const [urlIndex, setUrlIndex] = useState(0);
  const iconUrls = useMemo(() => getIconUrls(icon), [icon]);
  const hasFallback = urlIndex >= iconUrls.length;

  return (
    <div className="dev-icon" title={name}>
      {hasFallback ? (
        <div className="dev-icon__fallback">{name[0]}</div>
      ) : (
        <img
          src={iconUrls[urlIndex]}
          alt={name}
          width="28"
          height="28"
          className={plainIcons.has(icon) ? "dev-icon__image dev-icon__image--plain" : "dev-icon__image"}
          onError={() => setUrlIndex((current) => current + 1)}
        />
      )}
      <span>{name}</span>
    </div>
  );
}
