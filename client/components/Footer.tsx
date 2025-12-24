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
      <div className="border-b border-blue-700 py-12">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Stay Updated
            </h3>
            <p className="text-blue-200 mb-8 font-medium text-lg">
              Get the latest news about Eskimo, new features, and special offers
              straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-5 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-base font-medium"
              />
              <button className="bg-gradient-to-r from-cyan-400 to-blue-400 text-blue-900 font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-blue-700 py-16">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://i.ibb.co/d4z3607G/eskimologo.png"
                  alt="Eskimo Logo"
                  className="w-8 h-8 rounded-lg"
                />
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Eskimo
                </h2>
              </div>
              <p className="text-blue-200 text-sm mb-6">
                Global eSIM connectivity for everyone. Instant, affordable, and
                borderless.
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      aria-label={social.label}
                      className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-blue-700 hover:bg-cyan-400 flex items-center justify-center transition-all duration-300 hover:text-blue-900 flex-shrink-0 hover:scale-110 shadow-md"
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold mb-6 text-lg">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-blue-200 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium text-base block"
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
            <div className="flex gap-6 text-base text-blue-300 font-medium">
              <a
                href="/legal"
                className="hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/legal"
                className="hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Terms of Service
              </a>
              <a
                href="/legal"
                className="hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
