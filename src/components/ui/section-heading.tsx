type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:mb-4 sm:text-sm sm:tracking-[0.22em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="bg-gradient-to-r from-white via-blue-50 to-blue-200 bg-clip-text text-3xl font-semibold tracking-normal text-transparent sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted sm:mt-5 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
