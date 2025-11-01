import { ArrowRight } from "lucide-react";

export const VideoBackground = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://www.eskimo.travel/videos/5-manifest.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container-max text-center text-white px-4">
          <div className="scroll-fade-in max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Connected to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                the World
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Experience seamless global connectivity with Eskimo. Travel
              anywhere, stay connected everywhere. Fast, reliable, and always
              available eSIM for modern travelers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/#data-plans"
                className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/#how-it-works"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: "500K+", detail: "Active Users" },
                { label: "200+", detail: "Countries" },
                { label: "24/7", detail: "Support" },
                { label: "0%", detail: "Setup Fee" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-cyan-300">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-200 mt-1">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
