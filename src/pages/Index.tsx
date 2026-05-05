import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Award, Factory, Star } from "lucide-react";
import heroImg from "@/assets/snacks-hero.jpg";
import cornChips from "@/assets/corn-chips.jpg";
import cornick from "@/assets/cornick.jpg";
import greenPeas from "@/assets/green-peas.jpg";

const products = [
  { name: "Corn Chips", desc: "Crispy, golden corn chips including our flagship Alibaba brand.", img: cornChips },
  { name: "Cornick", desc: "Crunchy fried corn kernels — a Filipino classic snack.", img: cornick },
  { name: "Green Peas Snacks", desc: "Lightly seasoned crispy green peas, full of flavor.", img: greenPeas },
];

const trust = [
  { icon: ShieldCheck, title: "FDA-Compliant", desc: "Manufactured under strict food safety standards." },
  { icon: Factory, title: "Modern Facility", desc: "Located in Pandi, Bulacan with scalable capacity." },
  { icon: Truck, title: "Nationwide Reach", desc: "Reliable bulk supply and distribution support." },
  { icon: Award, title: "Trusted Brand", desc: "Home of the well-loved Alibaba corn chips." },
];

const testimonials = [
  { quote: "Consistent quality and on-time delivery — F&D has been a reliable partner for our retail chain.", name: "Distributor, Metro Manila" },
  { quote: "Their OEM team helped us launch our private label snack line smoothly.", name: "Brand Owner, Cebu" },
  { quote: "Great products, fair pricing, and excellent customer service.", name: "Wholesaler, Pampanga" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
              Snack Manufacturer • Philippines
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-brand-blue">
              Quality Snack Manufacturing <span className="text-gradient-primary">You Can Trust</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Frank and David Food Manufacturing Corp. is a trusted Filipino snack manufacturer based in Pandi, Bulacan — home of Alibaba corn chips, cornick, and green peas snacks.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow group">
                  Partner With Us
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline">View Our Products</Button>
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="rounded-3xl overflow-hidden shadow-elegant border border-border">
              <img src={heroImg} alt="Filipino snack foods - corn chips, cornick, green peas" width={1536} height={1024} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-14 border-y border-border bg-secondary/30">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
          {trust.map((t) => (
            <div key={t.title} className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-3 shadow-glow">
                <t.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-brand-blue">{t.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About intro */}
      <section className="py-20 md:py-24">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-blue">
            Filipino-made snacks, manufactured with care
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            For years, we've been crafting quality snack products loved across the Philippines. From our flagship Alibaba corn chips to our crunchy cornick and green peas, we deliver consistent quality at scale — built on food safety, reliability, and partnership.
          </p>
          <div className="mt-7">
            <Link to="/about"><Button variant="outline">Learn more about us</Button></Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-warm">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-blue">Our Featured Products</h2>
            <p className="mt-3 text-muted-foreground">A snack line trusted by retailers and distributors nationwide.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="group bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:-translate-y-1 hover:shadow-elegant transition-smooth">
                <div className="aspect-square overflow-hidden bg-secondary/40">
                  <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-smooth" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-brand-blue">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products"><Button className="bg-gradient-primary text-primary-foreground shadow-glow">Explore All Products</Button></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-blue">What Our Partners Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl border border-border p-7 shadow-card">
                <div className="flex gap-1 mb-3 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-foreground/90">"{t.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-brand-blue">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-10 md:p-16 text-center shadow-elegant">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold">Let's Build a Partnership</h2>
            <p className="mt-4 max-w-xl mx-auto text-primary-foreground/90">
              Looking for a reliable snack manufacturing partner in the Philippines? We'd love to hear from you.
            </p>
            <Link to="/contact" className="inline-block mt-7">
              <Button size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-white/90">
                Contact Us Today <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
