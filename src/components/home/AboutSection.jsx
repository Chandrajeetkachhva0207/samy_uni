import { Link } from "react-router-dom";
import Icon from "../Icon.jsx";
import founder from "../../assets/founder.jpg";
import { about } from "../../data/siteData.js";

export default function AboutSection() {
  return (
    <section className="about-strip">
      <div className="container about-strip__grid">
        {/* About content */}
        <div className="about-strip__left">
          <span className="eyebrow eyebrow--blue">
            ABOUT SAMSY
          </span>

          <h2>{about.heading}</h2>

          <p>{about.text}</p>

          <Link
            to="/about"
            className="btn btn--outline btn--sm"
          >
            Our Vision &amp; Mission →
          </Link>
        </div>

        {/* Statistics and founder signature */}
        <div className="about-strip__mid">
          <ul className="stats">
            {about.stats.map((s, index) => (
              <li
                key={s.label}
                style={{ "--about-index": index }}
              >
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>

          <div className="signature">
            <span className="signature__sign">
              {about.founder}
            </span>

            <strong>
              {about.founder}
              <span
                className="flag flag--sm"
                aria-hidden="true"
              />
            </strong>

            <small>Founder</small>
          </div>
        </div>

        {/* Founder image */}
        <div className="about-strip__photo">
          <div className="about-strip__photo-glow" />

          <img
            src={founder}
            alt={about.founder}
            loading="lazy"
          />
        </div>

        {/* Founder quote */}
        <blockquote className="about-strip__quote">
          <span
            className="about-strip__quote-mark"
            aria-hidden="true"
          >
            “
          </span>

          <p>“{about.quote}”</p>

          <footer>
            <strong>– {about.founder}</strong>
            <span>{about.founderRole}</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "6px" }}>
              {about.instagram && (
                <a
                  href={about.instagram}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#93c5fd",
                    fontSize: "12px",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  <Icon name="instagram" size={14} /> @pradipjadhav_1
                </a>
              )}
              {about.linkedin && (
                <a
                  href={about.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#93c5fd",
                    fontSize: "12px",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  <Icon name="linkedin" size={14} /> LinkedIn
                </a>
              )}
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}