import VideoHero from "@/components/VideoHero";
import FounderSection from "@/components/FounderSection";
import SEO from "@/components/SEO";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ScrollingProjects from "@/components/ScrollingProjects";
import TechnologyStack from "@/components/TechnologyStack";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO
        title="AI & ML Solutions for Business Transformation"
        description="Karn Consulting delivers AI, ML, and Self-Governing Intelligent Solutions. We build custom AI agents, marketing automation systems, and data pipelines for enterprise growth."
        canonical="/"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.karnconsulting.co/#organization",
              "name": "Karn Consulting",
              "url": "https://www.karnconsulting.co",
              "logo": { "@type": "ImageObject", "url": "https://www.karnconsulting.co/og-image.png" },
              "description": "AI, ML, and Self-Governing Intelligent Solutions for business transformation.",
              "founder": { "@type": "Person", "name": "Prateek Karn" },
              "sameAs": ["https://www.linkedin.com/company/karnconsulting/"]
            },
            {
              "@type": "WebSite",
              "@id": "https://www.karnconsulting.co/#website",
              "name": "Karn Consulting",
              "url": "https://www.karnconsulting.co",
              "publisher": { "@id": "https://www.karnconsulting.co/#organization" }
            },
            {
              "@type": "ProfessionalService",
              "name": "Karn Consulting - AI & ML Solutions",
              "url": "https://www.karnconsulting.co",
              "description": "Custom AI agents, marketing automation, data pipelines, and enterprise AI transformation.",
              "priceRange": "$$$$",
              "areaServed": [{ "@type": "Country", "name": "United States" }, { "@type": "Country", "name": "India" }],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI & ML Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom AI Agent Development" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing Automation & Attribution" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Pipeline Architecture" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise AI Transformation" } }
                ]
              }
            }
          ]
        }}
      />
      <VideoHero />
      <AboutSection />
      <ServicesSection />
      <ScrollingProjects />
      <TechnologyStack />
      <ContactSection />
      <FounderSection />
      <Footer />
    </div>
  );
}