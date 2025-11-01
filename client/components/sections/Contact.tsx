import { Mail, User, Send } from "lucide-react";

export const Contact = () => {

  return (
    <section className="section-padding bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container-max">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to
            our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Contact info cards */}
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
                className="scroll-fade-in text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-primary mx-auto mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <div className="font-semibold text-primary mb-2">
                  {item.detail}
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto scroll-fade-in">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="activation">Activation Help</option>
                  <option value="billing">Billing Question</option>
                  <option value="technical">Technical Issue</option>
                  <option value="referral">Referral Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>

            <p className="text-xs text-gray-600 text-center mt-6">
              We respect your privacy. We'll only use your information to
              respond to your inquiry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
