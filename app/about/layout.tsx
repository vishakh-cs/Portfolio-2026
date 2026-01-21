export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="about-layout">
      {children}
    </section>
  );
}
