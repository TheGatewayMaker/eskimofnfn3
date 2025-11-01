import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Data Plans", href: "/#data-plans" },
      { label: "Pricing", href: "/pricing" },
      { label: "Status Page", href: "/status" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Press Kit", href: "/press" },
    ],
    Support: [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/#contact" },
      { label: "Community", href: "/community" },
      { label: "Changelog", href: "/changelog" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/legal" },
      { label: "Terms of Service", href: "/legal" },
      { label: "Cookie Policy", href: "/legal" },
      { label: "GDPR", href: "/legal" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Github, href: "#github", label: "GitHub" },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* Newsletter signup */}
      <div className="border-b border-blue-700 py-12">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="text-blue-200 mb-6">
              Get the latest news about Eskimo, new features, and special offers
              straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-900 font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="border-b border-blue-700 py-16">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Eskimo
              </h2>
              <p className="text-blue-200 text-sm mb-6">
                Global eSIM connectivity for everyone. Instant, affordable, and
                borderless.
              </p>
              <div className="flex flex-wrap gap-2.5 items-center">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-700 hover:bg-cyan-400 flex items-center justify-center transition-colors hover:text-blue-900 flex-shrink-0"
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-blue-200 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="py-8">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-blue-300 text-sm">
              <p>&copy; {currentYear} Eskimo Global. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-sm text-blue-300">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
            <div className="text-blue-300 text-sm">
              Made with ❤️ for digital nomads & travelers
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
