import { useEffect, useRef } from "react";
import { Sparkles, Rocket, CodeXml, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import gsap from "gsap";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "150+", label: "Happy Clients" },
  { value: "10+", label: "Years of Service" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      );
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8 }
      );

      // Floating orbs
      if (orb1Ref.current)
        gsap.to(orb1Ref.current, { y: -30, x: 20, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      if (orb2Ref.current)
        gsap.to(orb2Ref.current, { y: 20, x: -30, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      if (orb3Ref.current)
        gsap.to(orb3Ref.current, { y: -20, x: -15, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background orbs */}
      <div ref={orb1Ref} className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-[120px]" />
      <div ref={orb2Ref} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]" />
      <div ref={orb3Ref} className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 mb-8">
          <Sparkles size={16} className="text-violet-400" />
          Turning Ideas Into Digital Reality
        </div>

        {/* Title */}
        <div ref={titleRef} className="opacity-0">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            Building the
            <br />
            <span className="gradient-text">Digital Future</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p ref={subtitleRef} className="opacity-0 mt-6 text-lg sm:text-xl text-white max-w-2xl mx-auto">
          Websites that captivate, apps that conquer, e-commerce that sells.
          <span className="text-gray-300"> Your vision, our expertise.</span>
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="opacity-0 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white px-8 py-6 rounded-xl text-lg btn-shine transition-all duration-300 hover:scale-105">
            <Rocket size={20} />
            <a href="#contact">Start Your Project</a>
            <ArrowRight size={20} />
          </Button>
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-white px-8 py-6 rounded-xl text-lg glass hover:bg-white/5"
          >
            <CodeXml size={20} />
            <a href="#portfolio">See Our Work</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-white mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
