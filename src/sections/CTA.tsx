import { useEffect, useRef, useState } from "react";
import { Send, ArrowRight, Mail, Phone, MapPin, CircleCheckBig } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@nexusstudio.com" },
  { icon: Phone, label: "Phone", value: "+39 02 1234 5678" },
  { icon: MapPin, label: "Location", value: "Milan, Italy" },
];

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: contentRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={sectionRef} className="py-32 relative">
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 mb-4">
              Let's Start
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Ready to <span className="gradient-text">Build</span> Your
              Project?
            </h2>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Tell us about your idea. We'll get back to you within 24 hours
              with a personalized proposal to turn your vision into reality.
            </p>

            {/* Contact info */}
            <div className="mt-10 space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                    <info.icon size={20} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="glass rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CircleCheckBig size={64} className="text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold text-white">
                  Message Sent!
                </h3>
                <p className="text-gray-400 mt-2">
                  We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      First Name
                    </label>
                    <Input
                      placeholder="John"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      Last Name
                    </label>
                    <Input
                      placeholder="Doe"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl h-12"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Project Type
                  </label>
                  <select className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                    <option value="" className="bg-gray-900">
                      Select...
                    </option>
                    <option value="website" className="bg-gray-900">
                      Website
                    </option>
                    <option value="e-commerce" className="bg-gray-900">
                      E-Commerce
                    </option>
                    <option value="mobile-app" className="bg-gray-900">
                      Mobile App
                    </option>
                    <option value="custom-software" className="bg-gray-900">
                      Custom Software
                    </option>
                    <option value="other" className="bg-gray-900">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-medium flex items-center justify-center gap-2 btn-shine transition-all duration-300 hover:scale-[1.02]"
                >
                  <Send size={18} />
                  Send Request
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
