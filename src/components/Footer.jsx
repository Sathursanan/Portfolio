import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-white/[0.02]">
      <Container>
        <div className="text-center text-white/60 text-sm">
          © {new Date().getFullYear()} SATHU — All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
