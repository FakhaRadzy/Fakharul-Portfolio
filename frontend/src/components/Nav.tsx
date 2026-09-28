function Nav() {
  const links = [
    { href: "#about", label: "About", color: "bg-chapter-about" },
    {
      href: "#experience",
      label: "Experience",
      color: "bg-chapter-experience",
    },
    { href: "#skills", label: "Skills", color: "bg-chapter-skills" },
    { href: "#projects", label: "Projects", color: "bg-chapter-projects" },
    { href: "#contact", label: "Contact", color: "bg-chapter-contact" },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-ink/10">
      <div className="max-w-4xl mx-auto px-6 py-4 flex gap-6 text-sm font-medium">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center gap-2 hover:opacity-70 transition"
          >
            <span className={`w-2 h-2 rounded-full ${link.color}`} />
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
