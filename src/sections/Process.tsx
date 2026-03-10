import { useEffect, useRef } from "react";
import { Lightbulb, PenTool, Code, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    phase: "01",
    icon: Lightbulb,
    title: "Discovery",
    description:
      "We analyze your needs, study the market, and define the project goals together.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    phase: "02",
    icon: PenTool,
    title: "Design",
    description:
      "We create wireframes and visual mockups, defining the user experience and interface design.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    phase: "03",
    icon: Code,
    title: "Development",
    description:
      "We turn designs into code using the best technologies, following high standards.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    phase: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "Deployment, final testing, and go-live. Your project is ready to conquer the web.",
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: titleRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: lineRef.current, start: "top 70%" },
        }
      );

      if (stepsRef.current) {
        gsap.fromTo(
          stepsRef.current.children,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.2,
            scrollTrigger: { trigger: stepsRef.current, start: "top 70%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 mb-4">
            Our Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-4 text-white max-w-2xl mx-auto text-lg">
            A proven 4-phase method to turn your vision into reality
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            ref={lineRef}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500 origin-top hidden md:block"
          />

          <div ref={stepsRef} className="space-y-12 md:space-y-24">
            {steps.map((step, i) => (
              <div
                key={step.phase}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon */}
                <div className={`md:w-1/2 flex justify-start ${
                  i % 2 === 1 ? "md:justify-start md:pl-12" : "md:justify-end md:pr-12"
                }`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                    <step.icon size={28} className="text-white" />
                  </div>
                </div>

                {/* Dot on timeline */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-background z-10" />

                {/* Content */}
                <div className="md:w-1/2 pl-0 md:pl-12">
                  <div
                    className={`${
                      i % 2 === 1 ? "md:text-right md:pr-12 md:pl-0" : ""
                    }`}
                  >
                    <span className={`text-sm font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      PHASE {step.phase}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {step.title}
                    </h3>
                    <p className="text-white mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
