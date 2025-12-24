import { Check, ArrowRight } from "lucide-react";

export const DataPlans = () => {
  const plans = [
    {
      name: "Starter",
      data: "1GB",
      price: "Free",
      description: "Perfect to get started",
      features: [
        "1GB of 4G/5G data",
        "30-day validity",
        "200+ countries coverage",
        "Data-only access first 30 days",
        "Automatic unlock after probation",
      ],
      highlighted: false,
    },
    {
      name: "Essentials",
      data: "5GB",
      price: "$9.99",
      description: "For regular travelers",
      features: [
        "5GB of 4G/5G data",
        "Lifetime validity",
        "200+ countries coverage",
        "Unlimited validity when active",
        "Full call/SMS after 30 days",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "Power User",
      data: "20GB",
      price: "$24.99",
      description: "For heavy data users",
      features: [
        "20GB of 4G/5G data",
        "Lifetime validity",
        "200+ countries coverage",
        "Unlimited validity when active",
        "Full call/SMS after 30 days",
        "Priority support",
        "Monthly bonus data",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-max">
        <div className="text-center mb-20 scroll-fade-in">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Data Plans for Every Need
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Choose a plan that works for you, or earn unlimited data through our
            referral program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group scroll-fade-in relative rounded-2xl overflow-hidden transition-all duration-300 transform motion-safe:hover:-translate-y-1 ${
                plan.highlighted
                  ? "lg:scale-105 shadow-2xl ring-2 ring-primary"
                  : "border border-gray-200 hover:shadow-xl"
              } ${plan.highlighted ? "bg-gradient-to-br from-blue-600 to-blue-700" : "bg-white"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute top-4 right-4 bg-cyan-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                  Most Popular
                </div>
              )}

              <div
                className={`p-8 md:p-12 h-full flex flex-col ${plan.highlighted ? "text-white" : "text-gray-900"}`}
              >
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-black mb-3">
                    {plan.name}
                  </h3>
                  <p
                    className={`text-base ${plan.highlighted ? "text-blue-100" : "text-gray-600"}`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-5xl md:text-6xl font-black">
                      {plan.data}
                    </span>
                    <span
                      className={`text-xl font-semibold ${plan.highlighted ? "text-blue-100" : "text-gray-600"}`}
                    >
                      of data
                    </span>
                  </div>
                  <div className="text-3xl md:text-4xl font-black">
                    {plan.price}
                  </div>
                </div>

                <ul className="space-y-5 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <Check
                        className={`w-6 h-6 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform ${plan.highlighted ? "text-cyan-300" : "text-primary"}`}
                      />
                      <span className="text-base font-medium leading-relaxed group-hover:text-opacity-95">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 group ${
                    plan.highlighted
                      ? "bg-white text-blue-600 hover:bg-blue-50 hover:shadow-xl"
                      : "bg-primary text-white hover:bg-blue-700 hover:shadow-lg"
                  }`}
                >
                  Choose Plan
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border-2 border-blue-200 rounded-3xl p-10 md:p-16 scroll-fade-in shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-5 group-hover:text-primary transition-colors">
                Top Up Your Data
              </h3>
              <p className="text-gray-600 mb-8 font-medium text-lg">
                Need more data? Top up anytime with flexible add-on packages
                starting from just a few dollars.
              </p>
              <button className="btn-primary inline-flex items-center gap-2 font-bold">
                View Add-ons
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="group">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-5 group-hover:text-primary transition-colors">
                Earn Free Data
              </h3>
              <p className="text-gray-600 mb-8 font-medium text-lg">
                Refer a friend and earn 500MB of free data. There's no limit —
                keep earning data indefinitely through referrals.
              </p>
              <a
                href="/#referrals"
                className="btn-outline inline-flex items-center gap-2 font-bold"
              >
                Learn About Referrals
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
