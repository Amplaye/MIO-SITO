import { useEffect, useRef } from "react";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Database,
  Zap,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Globe,
    title: "Websites",
    subtitle: "Professional & Creative",
    description:
      "Bring your online presence to life with modern, responsive websites optimized for search engines. From personal portfolios to corporate sites.",
    features: ["Responsive Design", "SEO Optimized", "High Performance", "CMS Integrated"],
    gradient: "from-violet-600 to-purple-600",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    subtitle: "Sell Online",
    description:
      "Complete sales platforms with secure payments, inventory management, and advanced analytics to grow your business.",
    features: ["Secure Payments", "Inventory Management", "Analytics", "Multi-currency"],
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    subtitle: "iOS & Android",
    description:
      "Native and cross-platform applications delivering smooth and engaging user experiences on every device.",
    features: ["React Native", "Modern UI/UX", "Push Notifications", "Offline First"],
    gradient: "from-pink-600 to-rose-600",
  },
  {
    icon: Database,
    title: "Custom Software",
    subtitle: "Tailored Solutions",
    description:
      "Custom management systems to optimize your business processes: CRM, ERP, resource management, and automation.",
    features: ["Cloud Based", "REST API", "Advanced Reports", "Multi-user"],
    gradient: "from-amber-600 to-orange-600",
  },
  {
    icon: Zap,
    title: "Automations",
    subtitle: "Streamline & Scale",
    description:
      "Automate repetitive tasks and workflows to save time and reduce errors. From email sequences to full business process automation.",
    features: ["Workflow Automation", "API Integrations", "Custom Triggers", "Real-time Sync"],
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    subtitle: "Grow Online",
    description:
      "Digital marketing strategies to increase visibility, traffic, and conversions: SEO, SEM, Social Media, and Content.",
    features: ["SEO/SEM", "Social Media", "Content Strategy", "Analytics"],
    gradient: "from-indigo-600 to-violet-600",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: { trigger: cardsRef.current, start: "top 75%" },
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
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Complete <span className="gradient-text">Solutions</span>
          </h2>
          <p className="mt-4 text-white max-w-2xl mx-auto text-lg">
            From concept to launch, we offer end-to-end services for your
            digital success
          </p>
        </div>

        {/* Cards grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl glass bg-white/[0.05] p-6 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}
              >
                <service.icon size={24} className="text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <ArrowUpRight
                  size={18}
                  className="text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </div>
              <p className="relative z-10 text-sm text-violet-400 mb-3">{service.subtitle}</p>
              <p className="relative z-10 text-white text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-white"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
