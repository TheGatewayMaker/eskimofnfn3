import { Download, Zap, Users, Phone, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "Download & Activate",
      description:
        "Download the Eskimo app or visit our website. Activate your eSIM in seconds with no identity verification needed.",
    },
    {
      icon: Zap,
      title: "Instant Data",
      description:
        "Get approximately 1GB of starter data to begin using your eSIM. Connect to 4G/5G networks instantly across 200+ countries.",
    },
    {
      icon: Phone,
      title: "30-Day Probation",
      description:
        "For the first 30 days, you'll have data-only access. No calls, SMS, or OTP verification. This is our security phase.",
    },
    {
      icon: CheckCircle,
      title: "Unlock Full Access",
      description:
        "After 30 days, your eSIM automatically unlocks. You'll get a local number, full call/SMS capabilities, and OTP support.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-20 scroll-fade-in">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            How Eskimo Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Simple, transparent, and straightforward. Get global connectivity in
            four easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group scroll-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full bg-gradient-to-br from-blue-50 to-transparent border border-blue-100 rounded-xl p-6 sm:p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform motion-safe:hover:-translate-y-1 ring-1 ring-transparent hover:ring-blue-200">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-6 group-hover:scale-125 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-black text-lg flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-base leading-relaxed">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-1 bg-gradient-to-r from-blue-300 to-transparent transform -translate-y-1/2" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 border-2 border-blue-200 rounded-3xl p-8 md:p-16 scroll-fade-in shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              {
                label: "Starter Data",
                value: "1GB",
                detail: "First month included",
              },
              {
                label: "Data Validity",
                value: "Lifetime",
                detail: "Never expires, earn more via referrals",
              },
              {
                label: "Referral Bonus",
                value: "500MB",
                detail: "Per successful referral",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="scroll-fade-in group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-5xl md:text-6xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.value}
                </div>
                <div className="font-bold text-gray-900 mb-2 text-lg">
                  {item.label}
                </div>
                <div className="text-base text-gray-700">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
