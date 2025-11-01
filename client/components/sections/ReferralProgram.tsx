import { Share2, Users, Gift, TrendingUp } from "lucide-react";

export const ReferralProgram = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container-max">
        <div className="scroll-fade-in max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Earn Unlimited{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Free Data
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Share Eskimo with your friends and family. Every successful referral
            gives you 500MB of free data, with absolutely no limit. Keep earning
            data forever.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="/#download"
            className="btn-primary inline-flex items-center gap-2"
          >
            Download App to Get Started
          </a>
        </div>

        {/* Benefits comparison */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 scroll-fade-in">
          {[
            { referrals: "1", data: "500MB" },
            { referrals: "5", data: "2.5GB" },
            { referrals: "10", data: "5GB" },
            { referrals: "50", data: "25GB" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-6 bg-white border border-blue-200 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {item.referrals}
              </div>
              <div className="text-sm text-gray-600 mb-3">Referrals</div>
              <div className="text-2xl font-bold text-gray-900">
                {item.data}
              </div>
              <div className="text-xs text-gray-600 mt-1">Free Data</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
