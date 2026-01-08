export default function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.03] shadow-glow ${className}`}
    >
      {children}
    </div>
  );
}
