import Card from "./ui/Card";


export default function About() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      <Card className="p-6 sm:p-8">
        <p className="text-white/80 leading-7">
          My name is <span className="text-white font-semibold">SATHU</span>.
          I am a professional and enthusiastic Full-Stack Developer with strong expertise in backend and AI development.
           I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving.
            I enjoy building scalable backend systems, intelligent applications, and working across the full web stack. My core skills are based on backend technologies, AI development, and JavaScript, and I enjoy creating efficient and smart solutions.
             I am available for any job opportunity that suits my skills and interests.
        </p>
      </Card>

      <Card className="p-6 sm:p-8 flex items-center justify-center">
        <div className="h-72 w-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <img
            alt="Profile"
            className="h-full w-full object-cover grayscale"
            src="sathu-portfolio/assets"
          />
        </div>
      </Card>
    </div>
  );
}
