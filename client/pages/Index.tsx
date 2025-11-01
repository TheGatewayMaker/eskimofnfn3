import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { DataPlans } from "@/components/sections/DataPlans";
import { ReferralProgram } from "@/components/sections/ReferralProgram";
import { DownloadApp } from "@/components/sections/DownloadApp";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Index() {
  useEffect(() => {
    // Add scroll fade-in animation to elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".scroll-fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="how-it-works" className="scroll-mt-20 md:scroll-mt-24">
          <HowItWorks />
        </section>

        <section id="data-plans" className="scroll-mt-20 md:scroll-mt-24">
          <DataPlans />
        </section>

        <section id="referrals" className="scroll-mt-20 md:scroll-mt-24">
          <ReferralProgram />
        </section>

        <section id="download" className="scroll-mt-20 md:scroll-mt-24">
          <DownloadApp />
        </section>

        <section id="faq" className="scroll-mt-20 md:scroll-mt-24">
          <FAQ />
        </section>

        <section id="contact" className="scroll-mt-20 md:scroll-mt-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
