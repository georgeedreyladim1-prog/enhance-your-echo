import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Tools } from "@/components/site/Tools";
import { Certificates } from "@/components/site/Certificates";
import { Contact, Footer } from "@/components/site/Contact";

const title = "George Edrey Ladim | Technical Virtual Assistant";
const description =
  "Technical Virtual Assistant for CRM, workflow automation, email and lead management. Automation case studies in GoHighLevel, Make.com, n8n and Zapier.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://georgeedreyladim.lovable.app/" }],
  }),
  component: Index,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "George Edrey Ladim",
  jobTitle: "Technical Virtual Assistant",
  email: "mailto:georgeedreyladim1@gmail.com",
  telephone: "+63 919 000 6001",
  address: { "@type": "PostalAddress", addressLocality: "Metro Manila", addressCountry: "PH" },
  sameAs: ["https://linkedin.com/in/georgeedreyladim"],
  knowsAbout: ["CRM automation", "Zapier", "Make.com", "n8n", "GoHighLevel", "Lead management"],
};

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border focus:border-border focus:bg-surface focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Work />
        <Tools />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
