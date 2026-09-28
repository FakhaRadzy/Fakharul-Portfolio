import { experience } from "../data/resume";
import ChapterHeading from "./ChapterHeading";

function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
      <div className="border-1-4 border-chapter-experience bg-ink/5 rounded-r-xl px-6 py-8">
        <ChapterHeading
          number="II"
          title="Experience"
          colorClass="text-chapter-experience"
        />

        <div className="space-y-12">
          {experience.map((entry) => (
            <div key={entry.company}>
              <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                <h3 className="text-xl font-semibold">{entry.role}</h3>
                <span className="text-sm text-ink-muted">{entry.period}</span>
              </div>
              <p className="text-chapter-experience font-medium mb-4">
                {entry.company}
              </p>

              {entry.bullets && (
                <ul className="list-disc list-inside space-y-2 text-ink-muted">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}

              {entry.projects && (
                <div className="space-y-4">
                  {entry.projects.map((project) => (
                    <div
                      key={project.name}
                      className="border-1-2 border-ink/15 pl-4"
                    >
                      <p className="font-medium">
                        {project.name}{" "}
                        <span className="text-ink-muted font-normal">
                          — {project.category}
                        </span>
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-ink-muted mt-1">
                        {project.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
