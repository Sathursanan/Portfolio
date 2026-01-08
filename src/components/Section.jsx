import Container from "./Container";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="relative z-10 py-14 sm:py-16">
      <Container>
        <div className="flex items-center justify-center mb-10">
          <div className="h-px flex-1 bg-white/10" />
          <div className="mx-4 rounded-md bg-white/5 px-5 py-2 text-sm font-semibold tracking-wide border border-white/10 shadow-glow">
            {title}
          </div>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {children}
      </Container>
    </section>
  );
}
