import { useEffect, useRef, useState } from "react";
import { Send, ArrowRight, Mail, Phone, MapPin, CircleCheckBig } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: Mail, label: "Email", value: "ciao@nexusstudio.it" },
  { icon: Phone, label: "Telefono", value: "+39 02 1234 5678" },
  { icon: MapPin, label: "Sede", value: "Milano, Italia" },
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
              Iniziamo
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Pronto a <span className="gradient-text">Realizzare</span> il tuo
              Progetto?
            </h2>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Raccontaci la tua idea. Ti risponderemo entro 24 ore con una
              proposta personalizzata per trasformare la tua visione in realtà.
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
                  Messaggio Inviato!
                </h3>
                <p className="text-gray-400 mt-2">
                  Ti risponderemo al più presto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      Nome
                    </label>
                    <Input
                      placeholder="Mario"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      Cognome
                    </label>
                    <Input
                      placeholder="Rossi"
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
                    placeholder="mario@esempio.it"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl h-12"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Tipo di Progetto
                  </label>
                  <select className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                    <option value="" className="bg-gray-900">
                      Seleziona...
                    </option>
                    <option value="sito-web" className="bg-gray-900">
                      Sito Web
                    </option>
                    <option value="e-commerce" className="bg-gray-900">
                      E-Commerce
                    </option>
                    <option value="app-mobile" className="bg-gray-900">
                      App Mobile
                    </option>
                    <option value="gestionale" className="bg-gray-900">
                      Gestionale
                    </option>
                    <option value="altro" className="bg-gray-900">
                      Altro
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Messaggio
                  </label>
                  <Textarea
                    placeholder="Raccontaci il tuo progetto..."
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-xl resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-medium flex items-center justify-center gap-2 btn-shine transition-all duration-300 hover:scale-[1.02]"
                >
                  <Send size={18} />
                  Invia Richiesta
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
