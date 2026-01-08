import Card from "./ui/Card";
import { FaUserGraduate } from "react-icons/fa";

const items = [
  { range: "2025 - 2026", title: "FULL STACK DEVELOPMENT", org: "UKI Technology School" },
  { range: "2021 - 2024", title: "ADVANCED LEVEL CERTIFICATE", org: "Jaffna Central College" },
  { range: "2019 - 2021", title: "ORDINARY LEVEL CERTIFICATE ", org: "Jaffna Central College" },
];

export default function Education() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <Card className="p-10 flex items-center justify-center min-h-[320px]">
        <div className="text-center">
          <div className="mx-auto h-28 w-28 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-white/10 shadow-glow flex items-center justify-center">
            <span className="text-5xl">🎓</span>
          </div>
          <p className="mt-5 text-white/70 text-sm">
            Replace this with your education illustration / SVG if you want.
          </p>
        </div>
      </Card>

      <div className="space-y-5">
        {items.map((it) => (
          <Card key={it.title} className="p-6">
            <div className="text-emerald-300 text-sm font-semibold mb-2">
              {it.range}
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <FaUserGraduate className="text-purple-300" />
              </div>
              <div>
                <div className="text-lg font-extrabold tracking-wide">
                  {it.title}
                </div>
                <div className="text-white/70 mt-1">{it.org}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
