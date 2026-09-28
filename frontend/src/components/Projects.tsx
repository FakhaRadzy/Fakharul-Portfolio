import { useEffect, useState } from "react";
import type { Project } from "../data/projects";
import ChapterHeading from "./ChapterHeading";
import { API_BASE_URL } from "../lib/api";

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
      <div className="border-1-4 border-chapter-projects bg-ink/5 rounded-r-xl px-6 py-8">
        <ChapterHeading
          number="IV"
          title="Projects"
          colorClass="text-chapter-projects"
        />
        {loading && <p className="text-ink-muted">Loading projects...</p>}

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-ink/15 rounded-lg p-6 bg-paper transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-ink-muted text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2"></div>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-chapter-projects/10 text-chapter-projects px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
