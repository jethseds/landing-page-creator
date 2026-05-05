import { Target, Eye, ShieldCheck } from "lucide-react";
import factoryImg from "@/assets/factory.jpg";

const About = () => (
  <>
    <section className="bg-gradient-hero py-20">
      <div className="container max-w-3xl text-center">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-blue">About Frank &amp; David</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A trusted Filipino snack food manufacturer rooted in quality, integrity, and partnership.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <img src={factoryImg} alt="F&D manufacturing facility" loading="lazy" width={1536} height={1024} className="rounded-2xl shadow-elegant border border-border w-full h-auto" />
        <div>
          <h2 className="font-display text-3xl font-bold text-brand-blue">Our Story</h2>
          <p className="mt-4 text-muted-foreground">
            Frank and David Food Manufacturing Corp. is a Philippine-based snack food company located in Pandi, Bulacan. With a growing team of 100–500 dedicated employees, we produce well-loved Filipino snacks including our flagship Alibaba corn chips, cornick, and green peas snacks.
          </p>
          <p className="mt-3 text-muted-foreground">
            For years, we've combined traditional Filipino flavors with modern manufacturing standards to deliver snack products that distributors, retailers, and consumers can trust.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gradient-warm">
      <div className="container grid md:grid-cols-3 gap-6">
        {[
          { icon: Target, title: "Mission", text: "To produce high-quality, affordable Filipino snacks while building lasting partnerships with our distributors and clients." },
          { icon: Eye, title: "Vision", text: "To be one of the most trusted and innovative snack manufacturers in the Philippines and beyond." },
          { icon: ShieldCheck, title: "Quality Commitment", text: "We are committed to FDA-compliant operations and food safety standards across every step of production." },
        ].map((b) => (
          <div key={b.title} className="bg-card rounded-2xl p-7 border border-border shadow-card">
            <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4">
              <b.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-brand-blue">{b.title}</h3>
            <p className="mt-2 text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold text-brand-blue">Certifications &amp; Standards</h2>
        <p className="mt-4 text-muted-foreground">
          Our manufacturing operations comply with the standards set by the Philippine Food and Drug Administration (FDA) and follow internationally recognized food safety practices including Good Manufacturing Practices (GMP) and HACCP-aligned procedures.
        </p>
      </div>
    </section>
  </>
);

export default About;
