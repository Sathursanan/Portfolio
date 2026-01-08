// import Card from "./ui/Card";
// import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiGit } from "react-icons/si";

// const skills = [
//   { name: "Next JS", Icon: SiNextdotjs },
//   { name: "Tailwind", Icon: SiTailwindcss },
//   { name: "MongoDB", Icon: SiMongodb },
//   { name: "MySQL", Icon: SiMysql },
//   { name: "PostgreSQL", Icon: SiPostgresql },
//   { name: "Git", Icon: SiGit },
// ];

// export default function Skills() {
//   return (
//     <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5">
//       {skills.map(({ name, Icon }) => (
//         <Card key={name} className="p-6 flex flex-col items-center justify-center gap-3">
//           <Icon className="text-4xl text-white/80" />
//           <div className="text-white/80 font-semibold">{name}</div>
//         </Card>
//       ))}
//     </div>
//   );
// }





// import { 
//   SiReact, 
//   SiNodedotjs, 
//   SiPython, 
//   SiExpress, 
//   SiHtml5, 
//   SiTailwindcss, 
//   SiMongodb, 
//   SiJavascript, 
//   SiAwsamplify, 
//   SiCss3 
// } from "react-icons/si";

// const skills = [
//   { name: "React", Icon: SiReact, color: "#61DAFB" },
//   { name: "NodeJS", Icon: SiNodedotjs, color: "#339933" },
//   { name: "Python", Icon: SiPython, color: "#3776AB" },
//   { name: "Express", Icon: SiExpress, color: "#ffffff" }, // White for dark mode
//   { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
//   { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
//   { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
//   { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
//   { name: "AWS", Icon: SiAwsamplify, color: "#FF9900" },
//   { name: "CSS", Icon: SiCss3, color: "#1572B6" },
// ];

// export default function Skills() {
//   return (
//     <section className="py-10">
//       <h2 className="text-3xl font-bold text-center text-white mb-10 tracking-wider">
//         Tech Stack
//       </h2>
      
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-4">
//         {skills.map(({ name, Icon, color }) => (
//           <div
//             key={name}
//             className="group relative flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-transparent hover:shadow-lg"
//             // This inline style allows us to use the specific hex color for the hover glow
//             style={{
//               "--hover-color": color,
//             }}
//           >
//             {/* Hover Glow Effect */}
//             <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[var(--hover-color)] blur-xl" />

//             {/* Icon */}
//             <Icon 
//               className="text-5xl text-gray-400 transition-colors duration-300 group-hover:text-[var(--hover-color)] z-10" 
//             />
            
//             {/* Text */}
//             <span className="mt-3 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 z-10">
//               {name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }









import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiExpress, 
  SiHtml5, 
  SiTailwindcss, 
  SiMongodb, 
  SiJavascript, 
  SiAwsamplify, 
  SiCss3 
} from "react-icons/si";

const skills = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "NodeJS", Icon: SiNodedotjs, color: "#339933" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Express", Icon: SiExpress, color: "#ffffff" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "AWS", Icon: SiAwsamplify, color: "#FF9900" },
  { name: "CSS", Icon: SiCss3, color: "#1572B6" },
];

export default function Skills() {
  return (
    <section className="w-full py-12 flex items-center justify-center overflow-hidden bg-transparent">
      
      {/* CSS Animations */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Marquee Container */}
      <div className="relative w-full">
        
        {/* Fade Edges (Left & Right) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex w-max animate-scroll gap-6 px-4">
          
          {/* Loop twice for infinite seamless scroll */}
          {[...skills, ...skills].map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`} 
              className="relative w-32 h-32 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl z-10 bg-[#0f0f11]"
              style={{
                border: `1px solid ${skill.color}30`, // Subtle border opacity
                boxShadow: `0 0 20px ${skill.color}10` // Subtle default glow
              }}
            >
              
              {/* Background Gradient Tint */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(to bottom right, ${skill.color}, transparent)`
                }}
              />

              {/* Animated Inner Shine */}
              <div className="absolute inset-0 bg-white opacity-0 animate-glow mix-blend-overlay" />

              {/* Content Centered */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center gap-2">
                
                {/* Floating Icon */}
                <div 
                   className="animate-float"
                   style={{ animationDelay: `${index * 0.2}s` }} // Stagger the float animation
                >
                    <skill.Icon 
                        className="text-4xl drop-shadow-md transition-all duration-300" 
                        style={{ color: skill.color }} 
                    />
                </div>

                {/* Text */}
                <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">
                  {skill.name}
                </span>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}