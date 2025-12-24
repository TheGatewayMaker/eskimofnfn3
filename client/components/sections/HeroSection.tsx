import { ArrowRight, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      console.log("✓ Video loaded successfully");
    };

    const handleError = (e: Event) => {
      const target = e.target as HTMLVideoElement;
      console.error("✗ Video failed to load:", target.error?.message);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen md:min-h-[80vh] flex items-center justify-center pt-16 md:pt-0 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
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
          <source src="/videos/eskimocreatorvideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute -top-16 -left-16 w-40 h-40 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-24 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="container-max relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto animate-slideInUp">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-cyan-300" />
            <span className="text-sm font-semibold text-white">
              Global eSIM Connectivity
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Your One eSIM for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              Everywhere
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Instant global connectivity without ID verification. Get 4G/5G data
            in 200+ countries, earn unlimited free data through referrals, and
            stay connected forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
            <a
              href="/#data-plans"
              className="btn-primary inline-flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/#how-it-works"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto hover:shadow-lg"
            >
              Learn More
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-4 sm:px-0">
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
                <div className="text-3xl md:text-4xl font-black text-cyan-300">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-gray-200 mt-2">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
