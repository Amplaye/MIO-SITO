import { useEffect, useRef, useState } from "react";
import { Lightbulb, PenTool, CodeXml, Rocket, Send } from "lucide-react";
import gsap from "gsap";

const shapes = [
  {
    path: "M150,50 Q200,50 220,100 Q240,150 200,200 Q160,250 100,230 Q40,210 30,150 Q20,90 70,60 Q120,30 150,50",
    icon: Lightbulb,
    color: "#8b5cf6",
    label: "Idea",
  },
  {
    path: "M50,50 L250,50 L250,250 L50,250 Z",
    icon: PenTool,
    color: "#06b6d4",
    label: "Wireframe",
  },
  {
    path: "M150,30 Q240,30 270,120 Q300,210 210,255 Q120,300 60,225 Q0,150 60,75 Q120,0 150,30",
    icon: CodeXml,
    color: "#ec4899",
    label: "Design",
  },
  {
    path: "M150,20 L260,90 L260,210 L150,280 L40,210 L40,90 Z",
    icon: Rocket,
    color: "#f59e0b",
    label: "Code",
  },
  {
    path: "M150,10 L180,100 L280,100 L200,160 L230,250 L150,190 L70,250 L100,160 L20,100 L120,100 Z",
    icon: Send,
    color: "#10b981",
    label: "Launch",
  },
];

export default function MorphingShape() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % shapes.length);
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      gsap.to(pathRef.current, {
        attr: { d: shapes[activeIndex].path },
        duration: 1,
        ease: "power3.inOut",
      });
    }
  }, [activeIndex]);

  const ActiveIcon = shapes[activeIndex].icon;

  return (
    <div className="fixed right-6 top-24 z-40 hidden lg:block">
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 300 300" className="w-full h-full opacity-20">
          <defs>
            <linearGradient id="shapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <path
            ref={pathRef}
            d={shapes[0].path}
            fill="url(#shapeGrad)"
            stroke="url(#shapeGrad)"
            strokeWidth="2"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <ActiveIcon size={24} className="text-white/60" />
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-2">
        {shapes.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-violet-400 w-4" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
