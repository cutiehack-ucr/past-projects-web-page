"use client";
import Testimonials from "./components/Testimonials";

import { useMemo, useState } from "react";

type Project = {
  title: string;
  image: string;
  participants: string[];
  year: number;
  event: "Cutie Hack" | "Citrus Hack";
  track: string;
  placement?: "1st Place" | "2nd Place" | "3rd Place";
  category: "AI/ML" | "Hardware" | "Web" | "Other";
  technologies: string[];
  description: string;
  devpost: string;
  featured?: boolean;
  highScorer?: boolean;
};

const projects: Project[] = [
  {
    title: "Project 1",
    image: "",
    participants: ["Student 1", "Student 2"],
    year: 2026,
    event: "Citrus Hack",
    track: "Track 1",
    placement: "1st Place",
    category: "AI/ML",
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
    description:
      "Short description of the project and what the team created during the hackathon.",
    devpost: "#",
    featured: true,
    highScorer: true,
  },
  {
    title: "Project 2",
    image: "",
    participants: ["Student 3", "Student 4"],
    year: 2025,
    event: "Cutie Hack",
    track: "Track 2",
    category: "Web",
    technologies: ["Technology 1", "Technology 2"],
    description:
      "Short description of the project and what the team created during the hackathon.",
    devpost: "#",
    featured: true,
  },
  {
    title: "Project 3",
    image: "",
    participants: ["Student 5", "Student 6"],
    year: 2024,
    event: "Citrus Hack",
    track: "Track 3",
    category: "Hardware",
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
    description:
      "Short description of the project and what the team created during the hackathon.",
    devpost: "#",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [eventFilter, setEventFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [placementFilter, setPlacementFilter] = useState("All");
  const [yearFilter, setYearFilter] = useState("All");

  const featuredProjects = projects.filter((project) => project.featured);

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        const searchTerm = search.toLowerCase();

        const matchesSearch =
          project.title.toLowerCase().includes(searchTerm) ||
          project.participants.some((name) =>
            name.toLowerCase().includes(searchTerm)
          ) ||
          project.track.toLowerCase().includes(searchTerm) ||
          project.technologies.some((technology) =>
            technology.toLowerCase().includes(searchTerm)
          );

        const matchesEvent =
          eventFilter === "All" || project.event === eventFilter;

        const matchesCategory =
          categoryFilter === "All" || project.category === categoryFilter;

        const matchesPlacement =
          placementFilter === "All" ||
          project.placement === placementFilter;

        const matchesYear =
          yearFilter === "All" || project.year === Number(yearFilter);

        return (
          matchesSearch &&
          matchesEvent &&
          matchesCategory &&
          matchesPlacement &&
          matchesYear
        );
      })
      .sort((a, b) => b.year - a.year);
  }, [
    search,
    eventFilter,
    categoryFilter,
    placementFilter,
    yearFilter,
  ]);

  return (
    <main className="projects-page">
      {/* HERO */}
      <section className="projects-hero">
        <p className="eyebrow">CITRUS HACK + CUTIE HACK</p>

        <h1>Past Projects</h1>

        <p className="hero-description">
          Explore projects, winners, and ideas built by hackers from previous
          events.
        </p>
      </section>

      {/* FEATURED WINNERS */}
      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FEATURED WINNERS</p>
            <h2>Recent standouts</h2>
          </div>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <article className="featured-card" key={project.title}>
              <div className="featured-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <span>Project Image</span>
                )}
              </div>

              <div className="featured-card-body">
                <div className="project-meta">
                  <span>{project.event}</span>
                  <span>{project.year}</span>
                </div>

                <h3>{project.title}</h3>

                <p className="participants">
                  {project.participants.join(", ")}
                </p>

                <div className="project-tags">
                  {project.placement && <span>{project.placement}</span>}

                  <span>{project.track}</span>

                  {project.highScorer && <span>High Scorer</span>}
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <a
                  href={project.devpost}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SEARCH + FILTERS */}
      <section className="projects-controls">
        <input
          type="text"
          placeholder="Search projects or participants..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={eventFilter}
          onChange={(event) => setEventFilter(event.target.value)}
        >
          <option value="All">All Events</option>
          <option value="Cutie Hack">Cutie Hack</option>
          <option value="Citrus Hack">Citrus Hack</option>
        </select>

        <select
          value={categoryFilter}
          onChange={(event) => setCategoryFilter(event.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="AI/ML">AI/ML</option>
          <option value="Web">Web</option>
          <option value="Hardware">Hardware</option>
          <option value="Other">Other</option>
        </select>

        <select
          value={placementFilter}
          onChange={(event) => setPlacementFilter(event.target.value)}
        >
          <option value="All">All Placements</option>
          <option value="1st Place">1st Place</option>
          <option value="2nd Place">2nd Place</option>
          <option value="3rd Place">3rd Place</option>
        </select>

        <select
          value={yearFilter}
          onChange={(event) => setYearFilter(event.target.value)}
        >
          <option value="All">All Years</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>
      </section>

      {/* PAST PROJECTS */}
      <section className="projects-section">
        <div className="section-heading">
          <h2>Past Projects</h2>

          <span>
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </span>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <span>Project Image</span>
                )}
              </div>

              <div className="project-card-body">
                <div className="project-meta">
                  <span>{project.event}</span>
                  <span>{project.year}</span>
                </div>

                <h3>{project.title}</h3>

                <p className="participants">
                  {project.participants.join(", ")}
                </p>

                <div className="project-tags">
                  {project.placement && <span>{project.placement}</span>}
                  <span>{project.track}</span>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  href={project.devpost}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Devpost →
                </a>
              </div>
            </article>
          ))}

          {filteredProjects.length === 0 && (
            <div className="no-results">
              <h3>No projects found</h3>
              <p>Try changing your search or filters.</p>
            </div>
          )}
        </div>
      </section>
      <Testimonials />
    </main>
  );
}
