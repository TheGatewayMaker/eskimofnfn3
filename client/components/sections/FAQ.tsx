import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How do I activate my Eskimo eSIM?",
      answer:
        "Activating your Eskimo eSIM is simple: Download the Eskimo app, create an account, select your destination country, and scan your device's QR code to install the eSIM profile. You'll have data within seconds of activation. No identity verification, no lengthy processes.",
    },
    {
      question: "What is the 30-day probation period?",
      answer:
        "During the first 30 days after activation, your eSIM provides data-only access. You won't be able to make or receive calls, send/receive SMS, or use OTP verification. This probation period is our security measure since we don't require ID verification. After 30 days, you'll automatically get full access including calls, SMS, OTP support, and a local mobile number.",
    },
    {
      question: "How long does my data validity last?",
      answer:
        "Your data doesn't expire as long as you maintain an active connection. Every time you use your Eskimo eSIM, the validity extends. If you go 12 months without using any data, your account may be deactivated, but you can always reactivate it. You can purchase additional data at any time, and referral bonuses never expire.",
    },
    {
      question: "Can I use Eskimo's 4G and 5G networks worldwide?",
      answer:
        "Yes! Eskimo works with local 4G and 5G carriers in 200+ countries worldwide. When you activate your eSIM, we automatically connect you to the fastest available network in your destination country. Speeds depend on local network availability and coverage.",
    },
    {
      question: "How do referrals work?",
      answer:
        "Share your unique referral link with friends and family. When they sign up and activate using your link, you both earn rewards. You get 500MB of free data per successful referral, and there's no limit. You can earn unlimited data by referring as many people as you want.",
    },
    {
      question: "What local number will I get after the probation period?",
      answer:
        "After the 30-day probation period ends, you'll be automatically assigned a local mobile number from the country where you activated your eSIM. For example, if you activate in the UK, you'll get a UK number. This allows you to receive calls and SMS in that country. If you need a number from another country, you can contact our support team.",
    },
    {
      question: "What devices are compatible with Eskimo eSIM?",
      answer:
        "Eskimo eSIM works with any device that supports eSIM technology. This includes iPhone XS and later, Samsung Galaxy S20 and later, Google Pixel 4 and later, and most modern smartphones and tablets. Your device must have eSIM capability and be unlocked. Check your device manufacturer's website to confirm eSIM compatibility.",
    },
    {
      question: "Is Eskimo GDPR compliant?",
      answer:
        "Yes, Eskimo is fully compliant with GDPR and other international data protection regulations. We take your privacy seriously and use industry-standard encryption to protect your personal information. Your data is stored securely and never sold to third parties.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-max">
        <div className="text-center mb-20 scroll-fade-in">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Everything you need to know about Eskimo eSIM, from activation to
            data plans and referrals.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-5 scroll-fade-in">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors flex items-start justify-between gap-4"
              >
                <span className="font-bold text-gray-900 text-lg md:text-xl group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 mt-1 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-8 py-6 border-t-2 border-gray-200 bg-white animate-slideInUp">
                  <p className="text-gray-600 leading-relaxed text-lg font-medium">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-3xl p-10 md:p-16 text-center scroll-fade-in shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg font-medium">
            Our support team is here to help. Get in touch with us via email or
            visit our help center for more information.
          </p>
          <a
            href="/#contact"
            className="btn-primary inline-block font-bold text-lg"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};
