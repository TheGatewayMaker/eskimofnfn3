import { ArrowRight, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20 md:pt-0">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            WebkitUserSelect: "none",
            userSelect: "none",
          }}
        >
          <source
            src="https://www.eskimo.travel/videos/5-manifest.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
      </div>

      <div className="container-max relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto animate-slideInUp">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-cyan-300" />
            <span className="text-sm font-semibold text-white">
              Global eSIM Connectivity
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your One eSIM for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              Everywhere
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Instant global connectivity without ID verification. Get 4G/5G data
            in 200+ countries, earn unlimited free data through referrals, and
            stay connected forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/#data-plans"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/#how-it-works"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
            >
              Learn More
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "200+", detail: "Countries" },
              { label: "4G/5G", detail: "Networks" },
              { label: "No ID", detail: "Verification" },
              { label: "Lifetime", detail: "Validity" },
            ].map((stat, i) => (
              <div
                key={i}
                className="animate-fadeIn"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-cyan-300">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-200 mt-1">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
