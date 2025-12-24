import { Share2, Users, Gift, TrendingUp } from "lucide-react";

export const ReferralProgram = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container-max">
        <div className="scroll-fade-in max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
            Earn Unlimited{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Free Data
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed font-medium">
            Share Eskimo with your friends and family. Every successful referral
            gives you 500MB of free data, with absolutely no limit. Keep earning
            data forever.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Share2,
                title: "Share Your Link",
                description:
                  "Get a unique referral link and share it with anyone, anywhere in the world.",
              },
              {
                icon: Users,
                title: "They Sign Up",
                description:
                  "Your friends activate their eSIM using your referral link.",
              },
              {
                icon: Gift,
                title: "You Both Earn",
                description:
                  "You get 500MB free data, and your friend gets a bonus too.",
              },
              {
                icon: TrendingUp,
                title: "Unlimited Earning",
                description:
                  "No caps, no limits. Refer as many people as you want.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex gap-5 group p-6 rounded-2xl hover:bg-blue-50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white group-hover:scale-125 transition-transform duration-300 shadow-lg">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="/#download"
            className="btn-primary inline-flex items-center gap-2 font-bold text-lg"
          >
            Download App to Get Started
          </a>
        </div>

        {/* Benefits comparison */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 scroll-fade-in">
          {[
            { referrals: "1", data: "500MB" },
            { referrals: "5", data: "2.5GB" },
            { referrals: "10", data: "5GB" },
            { referrals: "50", data: "25GB" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-8 md:p-10 bg-white border-2 border-blue-200 rounded-2xl hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="text-5xl md:text-6xl font-black text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.referrals}
              </div>
              <div className="text-base font-semibold text-gray-600 mb-4">
                Referrals
              </div>
              <div className="text-3xl md:text-4xl font-black text-gray-900">
                {item.data}
              </div>
              <div className="text-sm font-medium text-gray-600 mt-3">
                Free Data
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
