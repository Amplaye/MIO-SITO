import { useEffect, useRef } from "react";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Database,
  Palette,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Globe,
    title: "Siti Web",
    subtitle: "Professionali & Creativi",
    description:
      "Dai vita alla tua presenza online con siti web moderni, responsive e ottimizzati per i motori di ricerca. Dal portfolio personale al corporate site.",
    features: ["Design Responsive", "SEO Ottimizzato", "Performance Elevate", "CMS Integrato"],
    gradient: "from-violet-600 to-purple-600",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    subtitle: "Vendi Online",
    description:
      "Piattaforme di vendita complete con pagamenti sicuri, gestione inventario e analytics avanzati per far crescere il tuo business.",
    features: ["Pagamenti Sicuri", "Gestione Magazzino", "Analytics", "Multi-valuta"],
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    icon: Smartphone,
    title: "App Mobile",
    subtitle: "iOS & Android",
    description:
      "Applicazioni native e cross-platform che offrono esperienze utente fluide e coinvolgenti su ogni dispositivo.",
    features: ["React Native", "UI/UX Moderna", "Push Notification", "Offline First"],
    gradient: "from-pink-600 to-rose-600",
  },
  {
    icon: Database,
    title: "Gestionali",
    subtitle: "Software su Misura",
    description:
      "Sistemi gestionali personalizzati per ottimizzare i processi aziendali: CRM, ERP, gestione risorse e automazione.",
    features: ["Cloud Based", "API REST", "Report Avanzati", "Multi-utente"],
    gradient: "from-amber-600 to-orange-600",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    subtitle: "Design & Strategia",
    description:
      "Crea un'identità visiva memorabile: logo, palette colori, typography e linee guida per una comunicazione coerente.",
    features: ["Logo Design", "Brand Guidelines", "Social Kit", "Mockup"],
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    subtitle: "Cresci Online",
    description:
      "Strategie di marketing digitale per aumentare visibilità, traffico e conversioni: SEO, SEM, Social Media e Content.",
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
            I Nostri Servizi
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Soluzioni <span className="gradient-text">Complete</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Dalla concezione alla realizzazione, offriamo servizi end-to-end per
            il tuo successo digitale
          </p>
        </div>

        {/* Cards grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl glass p-6 hover:bg-white/[0.06] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Gradient top border */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}
              >
                <service.icon size={24} className="text-white" />
              </div>

              {/* Content */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <ArrowUpRight
                  size={18}
                  className="text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </div>
              <p className="text-sm text-violet-400 mb-3">{service.subtitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400"
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
