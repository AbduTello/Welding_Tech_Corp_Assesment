type SectionHeaderProps = {
  // Matches the section's aria-labelledby
  id: string;
  title: string;
  intro: React.ReactNode;
};

// Heading and intro line shared by the homepage bands. Colours come from the
// section, so it works on light and dark backgrounds.
export default function SectionHeader({
  id,
  title,
  intro,
}: SectionHeaderProps) {
  return (
    <>
      <h2
        id={id}
        className="max-w-2xl font-heading text-3xl font-medium text-balance sm:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-pretty opacity-75 sm:text-lg">
        {intro}
      </p>
    </>
  );
}
