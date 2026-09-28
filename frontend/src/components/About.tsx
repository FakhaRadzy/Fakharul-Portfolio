import { profile } from "../data/resume";
import ChapterHeading from "./ChapterHeading";

function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-20">
      <div className="border-1-4 border-chapter-about bg-ink/5 rounded-r-xl px-6 py-8">
        <ChapterHeading
          number="I"
          title="About"
          colorClass="text-chapter-about"
        />
        <p className="text-ink-muted leading-relaxed text-lg">
          {profile.summary}
        </p>
      </div>
    </section>
  );
}

export default About;
