import { skills } from "../data/resume";
import ChapterHeading from "./ChapterHeading";

function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-20">
      <div className="border-1-4 border-chapter-skills bg-ink/5 rounded-r-xl px-6 py-8">
        <ChapterHeading
          number="III"
          title="Skills"
          colorClass="text-chapter-skills"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="border border-ink/15 rounded-lg p-5 bg-paper transition hover:-translate-y-1 hover:shadow.md"
            >
              <h3 className="font-semibold mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm bg-chapter-skills/10 text-chapter-skills px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
