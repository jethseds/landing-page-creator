import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, Boxes, Truck, Handshake } from "lucide-react";

const services = [
  { icon: Package, title: "OEM / Private Label Manufacturing", desc: "Launch your own snack brand with our trusted manufacturing capabilities. From recipe to packaging — we help you bring your product to market." },
  { icon: Boxes, title: "Bulk Supply for Distributors", desc: "Reliable bulk supply for wholesalers, retailers, and distributors with consistent quality and lead times." },
  { icon: Truck, title: "Nationwide Distribution Support", desc: "We support our partners with logistics coordination and distribution support across the Philippines." },
  { icon: Handshake, title: "Long-term Partnerships", desc: "We work hand-in-hand with our partners to grow your business and ours — built on trust and consistency." },
];

const Services = () => (
  <>
    <section className="bg-gradient-hero py-20">
      <div className="container max-w-3xl text-center">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-blue">Our Services &amp; Capabilities</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Built for B2B partners — distributors, retailers, and entrepreneurs who demand reliability.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-2xl border border-border p-7 shadow-card hover:-translate-y-1 hover:shadow-elegant transition-smooth">
            <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-brand-blue">{s.title}</h3>
            <p className="mt-2 text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-10 md:p-14 text-center shadow-elegant">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold">Ready to start a project?</h2>
          <p className="mt-3 max-w-xl mx-auto text-primary-foreground/90">Tell us about your requirements and our team will get back to you.</p>
          <Link to="/contact" className="inline-block mt-6">
            <Button size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-white/90">Get in Touch</Button>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Services;
