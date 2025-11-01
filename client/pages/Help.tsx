import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search, BookOpen, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");

  const helpCategories = [
    {
      title: "Getting Started",
      articles: [
        "How to activate your eSIM",
        "Choosing the right data plan",
        "First steps after activation",
      ],
    },
    {
      title: "Troubleshooting",
      articles: [
        "Connection issues",
        "Payment problems",
        "Account access issues",
      ],
    },
    {
      title: "Account & Billing",
      articles: [
        "Managing your account",
        "How to top up data",
        "Refund policy",
      ],
    },
    {
      title: "Referrals",
      articles: [
        "How referrals work",
        "Tracking your earnings",
        "Sharing your referral link",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-max">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Help Center
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-8">
              Find answers to your questions and get the support you need.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {helpCategories.map((category, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {category.articles.map((article, j) => (
                      <li key={j}>
                        <button className="text-primary hover:text-blue-700 font-medium text-sm flex items-center gap-2 group">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:translate-x-1 transition-transform" />
                          {article}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Still need help?
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Our support team is available 24/7 to help you with any
                questions.
              </p>
              <a
                href="/#contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
