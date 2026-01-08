// import { useMemo, useState } from "react";
// import Card from "./ui/Card";

// const PROJECTS = [
//   {
//     title: "AI Powered Business Assist App",
//     name: "SpiritUP",
//     tools: [
//       "Express",
//       "MongoDB",
//       "Render",
//       "Vercel",
//       "Node Mailer",
//       "React",
//       "Tailwind",
//       "NodeJS",
//       "Tailwind",
//       "JWT",
//     ],
//     role: "Backend Developer & AI Developer",
//     description:
//       "I built an AI-powered business assistant application using React and Tailwind for the frontend and Node.js with Express for the backend. The system leverages MongoDB for data management, JWT for secure authentication, and NodeMailer for automated email communication. The application is deployed using Vercel and Render for scalability and reliability. I also developed a custom AI model to provide intelligent assistance and automate business workflows.",
//   },
//   {
//     title: "To-Do list Application",
//     name: "Task Pilot App",
//     tools: ["HTML", "JavaScript", "TailwindCSS"],
//     role: "Full Stack Developer",
//     description:
//       "A Todo List application built using HTML, JavaScript, and Tailwind CSS to help users organize tasks, set priorities, and improve productivity. It features a clean, responsive, and user-friendly interface that makes managing daily tasks simple and efficient.",
//   },
//   {
//     title: "Love Calculator",
//     name: "SparkSync",
//     tools: [
//       "HTML",
//       "TailwindCSS",
//       "JavaSript",
      
//     ],
//     role: "Full Stack Developer",
//     description:
//       "A fun Love Calculator application built using HTML, CSS, and JavaScript where users enter their name and their crush’s name to receive a randomly generated compatibility percentage. The app features a simple, interactive interface and demonstrates basic JavaScript logic and DOM manipulation.",
//   },
// ];

// function dots() {
//   return (
//     <span className="flex gap-2">
//       <span className="h-3 w-3 rounded-full bg-red-400/90" />
//       <span className="h-3 w-3 rounded-full bg-yellow-300/90" />
//       <span className="h-3 w-3 rounded-full bg-green-400/90" />
//     </span>
//   );
// }

// export default function Projects() {
//   const [active, setActive] = useState(0);

//   const project = PROJECTS[active];

//   const codeText = useMemo(() => {
//     return `const project = {
//   name: '${project.name}',
//   tools: [${project.tools.map((x) => `'${x}'`).join(", ")}],
//   myRole: ${project.role},
//   Description: ${project.description}
// };`;
//   }, [project]);

//   return (
//     <div className="flex justify-center">
//       {/* Single centered "window" like your style */}
//       <Card className="w-full max-w-3xl overflow-hidden">
//         {/* Top project selector bars */}
//         <div className="border-b border-white/10 bg-white/[0.02]">
//           {PROJECTS.map((p, idx) => {
//             const isActive = idx === active;
//             return (
//               <button
//                 key={p.title}
//                 type="button"
//                 onClick={() => setActive(idx)}
//                 className={`w-full flex items-center gap-4 px-6 py-4 text-left border-t border-white/10 transition
//                 ${isActive ? "bg-white/[0.05]" : "bg-transparent hover:bg-white/[0.04]"}`}
//               >
//                 {dots()}
//                 <span className={`font-semibold ${isActive ? "text-emerald-300" : "text-emerald-200/80"}`}>
//                   {p.title}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Code area */}
//         <div className="bg-black/25">
//           <div className="px-6 py-4 border-b border-white/10">
//             <span className="text-white/70 text-sm">
//               <span className="text-pink-400">const</span> project{" "}
//               <span className="text-white/60">=</span> {"{"}
//             </span>
//           </div>

//           <pre className="p-6 text-[13px] leading-6 text-white/85 whitespace-pre-wrap overflow-auto max-h-[420px]">
//             <code>{codeText}</code>
//           </pre>
//         </div>
//       </Card>
//     </div>
//   );
// }







import { useState, useEffect } from "react";
import { FiFolder, FiGithub, FiExternalLink, FiCode, FiCpu, FiLayers } from "react-icons/fi";

const PROJECTS = [
  {
    id: "spiritup",
    title: "AI Business Assistant",
    name: "SpiritUP",
    tools: ["Express", "MongoDB", "React", "NodeJS", "JWT", "Spiritup API"],
    role: "Backend & AI Dev",
    description: "An AI-powered business assistant leveraging React, Node.js, and custom AI models to automate workflows and provide intelligent business insights.",
    link: "#",
    github: "https://github.com/Sathursanan/SpiritUP-Backend.git"
  },
  {
    id: "taskpilot",
    title: "TO-DO Application",
    name: "Task Pilot",
    tools: ["HTML5", "JavaScript", "TailwindCSS", "Local Storage"],
    role: "Full Stack Developer",
    description: "A high-performance Todo application with priority scheduling and local persistence, featuring a clean responsive UI for maximum productivity.",
    link: "#",
    github: "https://github.com/Sathursanan/TO-DO-LIST"
  },
  {
    id: "sparksync",
    title: "Compatibility Engine",
    name: "SparkSync",
    tools: ["DOM Manipulation", "JavaScript", "CSS3 Animation"],
    role: "Frontend",
    description: "A fun Love Calculator application built using HTML, CSS, and JavaScript where users enter their name and their crush’s name to receive a randomly generated compatibility percentage. The app features a simple, interactive interface and demonstrates basic JavaScript logic and DOM manipulation.",
    link: "#",
    github: "https://github.com/Sathursanan/Love-Calculator.git"
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle animation trigger when switching projects
  const handleChange = (index) => {
    if (index === active) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(index);
      setIsAnimating(false);
    }, 300); // Wait for fade out
  };

  const project = PROJECTS[active];

  return (
    <section className="py-20 w-full flex justify-center px-4">
      
      {/* Main Container - The "IDE" Window */}
      <div className="w-full max-w-5xl bg-[#0d0e12] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        
        {/* SIDEBAR (Project List) */}
        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-white/5 bg-[#0a0a0c]">
          
          {/* Sidebar Header */}
          <div className="h-12 flex items-center px-4 border-b border-white/5">
            <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">Explorer</span>
          </div>

          {/* Project Items */}
          <div className="flex flex-col">
            {PROJECTS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => handleChange(idx)}
                className={`group flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 border-l-2
                  ${active === idx 
                    ? "bg-white/5 border-blue-500 text-white" 
                    : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {active === idx ? (
                   <FiFolder className="text-blue-400 fill-blue-400/20" />
                ) : (
                   <FiFolder className="text-gray-600 group-hover:text-gray-400" />
                )}
                <span className="truncate">{p.name}</span>
              </button>
            ))}
          </div>

          {/* Decorative Bottom Area in Sidebar */}
          <div className="mt-auto p-6 hidden md:block opacity-30">
             <div className="text-[10px] text-gray-500 font-mono">
                <div>TIMELINE: TRACKING</div>
                <div>GIT: MASTER*</div>
             </div>
          </div>
        </div>


        {/* MAIN CONTENT (Code View) */}
        <div className="w-full md:w-2/3 bg-[#111113] flex flex-col relative">
          
          {/* Tab Bar */}
          <div className="h-12 bg-[#0d0e12] border-b border-white/5 flex items-center overflow-x-auto no-scrollbar">
             <div className="flex items-center gap-2 px-4 py-2 bg-[#111113] border-t-2 border-blue-500 text-gray-300 text-sm min-w-fit">
                <span className="text-blue-400">JSON</span>
                <span>{project.id}.config.js</span>
                <span className="ml-2 text-xs opacity-50">x</span>
             </div>
          </div>

          {/* Content Area with Animation */}
          <div 
            className={`flex-1 p-6 md:p-8 font-mono text-sm overflow-auto transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          >
            {/* Project Header (Above Code) */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <FiCpu /> <span>{project.role}</span>
                    </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-white text-xs border border-white/10 transition">
                        <FiGithub /> Code
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs transition shadow-lg shadow-blue-900/20">
                        <FiExternalLink /> Live Demo
                    </button>
                </div>
            </div>

            {/* Simulated Code Block */}
            <div className="relative group">
                {/* Line Numbers */}
                <div className="absolute -left-0 top-0 bottom-0 w-6 flex flex-col items-end text-gray-700 select-none text-xs leading-6">
                    {Array.from({length: 12}).map((_, i) => <span key={i}>{i + 1}</span>)}
                </div>

                {/* Code Syntax Highlighting */}
                <div className="pl-8 text-gray-300 leading-6 whitespace-pre-wrap">
                    <span className="text-purple-400">const</span> <span className="text-blue-400">project</span> <span className="text-white">=</span> <span className="text-yellow-400">{`{`}</span>
                    <br />
                    
                    {/* Name */}
                    <span className="ml-4 text-pink-400">name</span>: <span className="text-green-400">"{project.name}"</span>,
                    <br />
                    
                    {/* Tools Array */}
                    <span className="ml-4 text-pink-400">tools</span>: <span className="text-yellow-400">[</span>
                    <div className="ml-8 grid grid-cols-2 sm:grid-cols-3 gap-x-2 w-fit">
                        {project.tools.map((t, i) => (
                             <span key={i} className="text-green-400">"{t}"<span className="text-white">,</span></span>
                        ))}
                    </div>
                    <span className="ml-4 text-yellow-400">]</span>,
                    <br />

                    {/* Role */}
                    <span className="ml-4 text-pink-400">role</span>: <span className="text-green-400">"{project.role}"</span>,
                    <br />

                    {/* Description */}
                    <span className="ml-4 text-pink-400">description</span>: <span className="text-green-400">
                        "{project.description}"
                    </span>
                    <br />
                    <span className="text-yellow-400">{`}`}</span>;
                </div>
            </div>
          </div>
          
          {/* Status Bar */}
          <div className="h-8 bg-[#0d0e12] border-t border-white/5 flex items-center justify-between px-4 text-[10px] text-gray-500">
             <div className="flex gap-4">
                <span className="flex items-center gap-1"><FiLayers /> master</span>
                <span className="hidden sm:inline">UTF-8</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Online</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}







