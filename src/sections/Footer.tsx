import { Github, Linkedin, Instagram, Twitter, Heart, ArrowUpRight } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const footerLinks = {
  services: ["Websites", "E-Commerce", "Mobile Apps", "Custom Software", "Automations"],
  company: ["About Us", "Portfolio", "Blog", "Careers", "Contact"],
};

const socialLinks = [
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-white">NEXUS</span>
            </div>
            <p className="text-white leading-relaxed max-w-sm">
              Turning ideas into extraordinary digital experiences. Your
              partner for online success.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4 capitalize">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white text-sm flex items-center gap-1 group transition-all duration-300 hover:scale-[1.02] hover:text-transparent hover:bg-gradient-to-r hover:from-violet-400 hover:to-cyan-400 hover:bg-clip-text"
                    >
                      {link}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-violet-400"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Stay Updated</h3>
              <p className="text-white text-sm mt-1">
                Subscribe to our newsletter for exclusive news and offers
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Input
                placeholder="Your email"
                className="bg-white/5 border-white/10 text-white placeholder:text-white rounded-xl h-12 md:w-64"
              />
              <Button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white rounded-xl h-12 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <p className="text-white text-sm">
            &copy; 2025 NEXUS Digital Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <a href="#" className="text-white hover:text-white/70 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white hover:text-white/70 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
