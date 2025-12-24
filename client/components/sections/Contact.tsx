import { Mail, User, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container-max">
        <div className="text-center mb-20 scroll-fade-in">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Have questions or need assistance? We're here to help. Reach out to
            our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {[
            {
              icon: Mail,
              title: "Email",
              detail: "support@eskimo.global",
              description:
                "Send us an email and we'll respond within 24 hours.",
            },
            {
              icon: User,
              title: "Community",
              detail: "Join us on Discord",
              description:
                "Connect with other Eskimo users and get help from the community.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="scroll-fade-in text-center p-8 border-2 border-gray-200 rounded-2xl hover:border-primary hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-100 text-primary mx-auto mb-6 group-hover:scale-125 transition-transform duration-300 shadow-md">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <div className="font-bold text-primary mb-3 text-lg">
                  {item.detail}
                </div>
                <p className="text-base text-gray-600 font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto scroll-fade-in">
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-10 md:p-14 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <form
              action="https://formspree.io/f/xdkpprzn"
              method="POST"
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-base font-bold text-gray-900 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base"
                  />
                </div>
                <div>
                  <label className="block text-base font-bold text-gray-900 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-base font-bold text-gray-900 mb-3">
                  Subject
                </label>
                <select
                  name="subject"
                  required
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base"
                >
                  <option value="">Select a subject</option>
                  <option value="Activation Help">Activation Help</option>
                  <option value="Billing Question">Billing Question</option>
                  <option value="Technical Issue">Technical Issue</option>
                  <option value="Referral Question">Referral Question</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-base font-bold text-gray-900 mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us how we can help..."
                  required
                  rows={7}
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-3 font-bold text-lg py-4"
              >
                <Send className="w-6 h-6" />
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-600 text-center mt-8 font-medium">
              We respect your privacy. We'll only use your information to
              respond to your inquiry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
