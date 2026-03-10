import { useEffect, useRef, useState } from "react";
import { Eye, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Website", "E-Commerce", "Mobile App", "Custom Software", "Fintech"];

const projects = [
  {
    title: "Luxe Boutique",
    category: "E-Commerce",
    description: "Luxury e-commerce platform with an immersive shopping experience",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "Stripe"],
    gradient: "from-violet-600 to-purple-600",
  },
  {
    title: "TechFlow Dashboard",
    category: "Custom Software",
    description: "Advanced analytics dashboard for business KPI monitoring",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Vue.js", "D3.js", "PostgreSQL"],
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    title: "FitPro App",
    category: "Mobile App",
    description: "Fitness app with workout tracking and personalized plans",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "HealthKit"],
    gradient: "from-pink-600 to-rose-600",
  },
  {
    title: "Arch Studio",
    category: "Website",
    description: "Portfolio website for an architecture studio with immersive galleries",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    tags: ["Next.js", "GSAP", "Sanity"],
    gradient: "from-amber-600 to-orange-600",
  },
  {
    title: "CryptoWatch",
    category: "Fintech",
    description: "Crypto trading platform with real-time data",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    tags: ["React", "WebSocket", "Chart.js"],
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    title: "ArtGallery",
    category: "E-Commerce",
    description: "Artist marketplace for selling digital and physical artworks",
    image: "https://images.unsplash.com/photo-1545989253-02cc26577f88?w=600&h=400&fit=crop",
    tags: ["Next.js", "IPFS", "Smart Contracts"],
    gradient: "from-indigo-600 to-violet-600",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 60, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 }
      );
    }
  }, [activeFilter]);

  return (
    <div ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12 opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Some of the projects that turned our clients' ideas into digital
            success stories
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white"
                  : "glass text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Category badge */}
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white mb-3`}
                  >
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-4">
                    <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Eye size={18} className="text-white" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <ExternalLink size={18} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Default title bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-xl glass text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}
