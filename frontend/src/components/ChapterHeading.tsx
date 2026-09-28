interface ChapterHeadingProps {
  number: string;
  title: string;
  colorClass: string;
}

function ChapterHeading({ number, title, colorClass }: ChapterHeadingProps) {
  return (
    <div className="mb-8">
      <p
        className={`text-xs tracking-[0.2em] uppercase font-semibold mb-2 ${colorClass}`}
      >
        Chapter {number}
      </p>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
}

export default ChapterHeading;
