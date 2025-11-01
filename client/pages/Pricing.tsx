import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, ArrowRight } from "lucide-react";

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-max">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
              Choose the plan that works for you. No hidden fees, no surprises.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {[
                {
                  name: "Starter",
                  price: "Free",
                  data: "1GB",
                  features: [
                    "1GB 4G/5G data",
                    "30-day validity",
                    "200+ countries",
                    "Data-only first 30 days",
                  ],
                },
                {
                  name: "Essentials",
                  price: "$9.99",
                  data: "5GB",
                  featured: true,
                  features: [
                    "5GB 4G/5G data",
                    "Lifetime validity",
                    "200+ countries",
                    "Full access after 30 days",
                    "Priority support",
                  ],
                },
                {
                  name: "Power User",
                  price: "$24.99",
                  data: "20GB",
                  features: [
                    "20GB 4G/5G data",
                    "Lifetime validity",
                    "200+ countries",
                    "Full access after 30 days",
                    "Priority support",
                  ],
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-8 transition-all ${
                    plan.featured
                      ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white ring-2 ring-blue-400 scale-105"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-2 ${plan.featured ? "text-white" : "text-gray-900"}`}
                  >
                    {plan.name}
                  </h3>
                  <div
                    className={`text-4xl font-bold mb-2 ${plan.featured ? "text-white" : "text-primary"}`}
                  >
                    {plan.price}
                  </div>
                  <div
                    className={`text-lg mb-6 ${plan.featured ? "text-blue-100" : "text-gray-600"}`}
                  >
                    {plan.data} of data
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Check
                          className={`w-5 h-5 ${plan.featured ? "text-blue-300" : "text-primary"}`}
                        />
                        <span
                          className={
                            plan.featured ? "text-blue-50" : "text-gray-700"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                      plan.featured
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : "bg-primary text-white hover:bg-blue-700"
                    }`}
                  >
                    Choose Plan
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Earn Unlimited Free Data
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Every referral earns you 500MB of free data. With no limit on
                referrals, you can stay connected indefinitely.
              </p>
              <a
                href="/#referrals"
                className="btn-primary inline-flex items-center gap-2"
              >
                Learn About Referrals
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
