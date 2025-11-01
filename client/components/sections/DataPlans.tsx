import { Check, ArrowRight } from "lucide-react";

export const DataPlans = () => {
  const plans = [
    {
      name: "Starter",
      data: "1GB",
      price: "Free",
      description: "Perfect to get started",
      features: [
        "~1GB of 4G/5G data",
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
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Data Plans for Every Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a plan that works for you, or earn unlimited data through our
            referral program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group scroll-fade-in relative rounded-2xl overflow-hidden transition-all duration-300 ${
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
                className={`p-8 md:p-10 h-full flex flex-col ${plan.highlighted ? "text-white" : "text-gray-900"}`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p
                    className={`text-sm ${plan.highlighted ? "text-blue-100" : "text-gray-600"}`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl md:text-5xl font-bold">
                      {plan.data}
                    </span>
                    <span
                      className={`text-lg ${plan.highlighted ? "text-blue-100" : "text-gray-600"}`}
                    >
                      of data
                    </span>
                  </div>
                  <div className="text-2xl font-bold">{plan.price}</div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-cyan-300" : "text-primary"}`}
                      />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group ${
                    plan.highlighted
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-primary text-white hover:bg-blue-700"
                  }`}
                >
                  Choose Plan
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-blue-200 rounded-2xl p-8 md:p-12 scroll-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Top Up Your Data
              </h3>
              <p className="text-gray-600 mb-6">
                Need more data? Top up anytime with flexible add-on packages
                starting from just a few dollars.
              </p>
              <button className="btn-primary inline-flex items-center gap-2">
                View Add-ons
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Earn Free Data
              </h3>
              <p className="text-gray-600 mb-6">
                Refer a friend and earn 500MB of free data. There's no limit —
                keep earning data indefinitely through referrals.
              </p>
              <a
                href="/#referrals"
                className="btn-outline inline-flex items-center gap-2"
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
