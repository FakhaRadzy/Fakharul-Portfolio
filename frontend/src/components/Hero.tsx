import { profile } from "../data/resume";

function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-32">
      <p className="text-xs tracking-[0.2em] uppercase text-ink-muted mb-4">
        A portfolio, in chapters
      </p>
      <h1 className="text-5xl font-extrabold tracking-tight mb-3">
        {profile.name}
      </h1>
      <p className="font-display italic text-xl text-ink-muted mb-2">
        {profile.title}
      </p>
      <p className="text-ink-muted mb-10">{profile.location}</p>

      <div className="flex justify-center flex-wrap gap-4">
        <a
          href="#contact"
          className="bg-chapter-contact text-paper px-6 py-3 rounded-lg font-medium"
        >
          Get in touch
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="border border-ink/20 px-6 py-3 rounded-lg font-medium hover:bg-ink/5 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Hero;
