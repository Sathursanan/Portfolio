import Container from "./Container";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function GradientWord({ children, from = "from-pink-500", to = "to-purple-500" }) {
  return (
    <span className={`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent`}>
      {children}
    </span>
  );
}

function CodeCard() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] shadow-glow overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
        <span className="h-3 w-3 rounded-full bg-red-400/90" />
        <span className="h-3 w-3 rounded-full bg-yellow-300/90" />
        <span className="h-3 w-3 rounded-full bg-green-400/90" />
      </div>

      <pre className="p-6 text-[13px] leading-6 overflow-auto">
        <code className="text-white/90">
          <span className="text-pink-400">const</span>{" "}
          <span className="text-white">coder</span> <span className="text-white/60">=</span>{" "}
          <span className="text-white/90">{"{"}</span>
          {"\n"}  <span className="text-white">name</span>: <span className="text-yellow-200">'SATHU'</span>,
          {"\n"}  <span className="text-white">skills</span>: [
          <span className="text-yellow-200">'React'</span>,{" "}
          <span className="text-yellow-200">'NodeJS'</span>,{" "}
          <span className="text-yellow-200">'Python'</span>,{" "}
          <span className="text-yellow-200">'Express'</span>,{" "}
          <span className="text-yellow-200">'HTML'</span>,{" "}
          <span className="text-yellow-200">'Tailwind'</span>,{" "}
          <span className="text-yellow-200">'MongoDB'</span>,{" "}
          <span className="text-yellow-200">'JavaScript'</span>,{" "}
          <span className="text-yellow-200">'AWS'</span>
          ],
          {"\n"}  <span className="text-white">hardWorker</span>: <span className="text-emerald-300">true</span>,
          {"\n"}  <span className="text-white">quickLearner</span>: <span className="text-emerald-300">true</span>,
          {"\n"}  <span className="text-white">problemSolver</span>: <span className="text-emerald-300">true</span>,
          {"\n"}  <span className="text-emerald-400">hireable</span>: <span className="text-pink-400">function</span>(){" "}
          <span className="text-white/90">{"{"}</span>
          {"\n"}    <span className="text-pink-400">return</span> (
          {"\n"}      <span className="text-cyan-300">this</span>.hardWorker{" "}
          <span className="text-white/60">&amp;&amp;</span>
          {"\n"}      <span className="text-cyan-300">this</span>.problemSolver{" "}
          <span className="text-white/60">&amp;&amp;</span>
          {"\n"}      <span className="text-cyan-300">this</span>.skills.length{" "}
          <span className="text-white/60">&gt;=</span> <span className="text-emerald-300">5</span>
          {"\n"}    );
          {"\n"}  {"}"};
          {"\n"}{"};"}
        </code>
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative z-10 pt-12 sm:pt-16 pb-8">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Hello,
              <br />
              This is{" "}
              <GradientWord from="from-pink-500" to="to-purple-500">
                SATHU
              </GradientWord>
              , I'm a
              <br />
              Professional{" "}
              <GradientWord from="from-emerald-400" to="to-cyan-400">
                Full Stack Developer
              </GradientWord>
              .
            </h1>

            <div className="mt-8 flex items-center gap-3 text-xl">
              <a className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition" href="#">
                <FaGithub />
              </a>
              <a className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition" href="#">
                <FaLinkedinIn />
              </a>
              <a className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition" href="#">
                <FaFacebookF />
              </a>
              <a className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition" href="#">
                <SiGmail />
              </a>
              <a className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition" href="#">
                <FaTwitter />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold border border-white/20 bg-white/5 hover:bg-white/10 transition"
              >
                CONTACT ME <span className="text-white/70">👋</span>
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold bg-gradient-to-r from-pink-500 to-purple-500 shadow-glow2 hover:opacity-90 transition"
              >
                GET RESUME <span className="text-white/90">⬇</span>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="lg:justify-self-end w-full max-w-xl">
            <CodeCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
