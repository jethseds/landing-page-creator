import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, BarChart3, Workflow, Globe, Check, Star } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

const features = [
  { icon: Sparkles, title: "AI-native workflows", desc: "Generate specs, tickets and tests from a single prompt. Your team moves at the speed of thought." },
  { icon: Workflow, title: "Unified pipeline", desc: "Plan, build, ship, and learn in one place — no more context switching between five tools." },
  { icon: Zap, title: "Real-time everything", desc: "Live cursors, instant deploys, and feedback loops measured in seconds, not days." },
  { icon: Shield, title: "Enterprise-grade security", desc: "SOC 2 Type II, SSO, SCIM, and audit logs out of the box. Your data stays yours." },
  { icon: BarChart3, title: "Insights that matter", desc: "Track velocity, quality, and impact with dashboards your engineers actually trust." },
  { icon: Globe, title: "Built for global teams", desc: "Async-first, multi-region, multi-language. Wherever your team works, Nebula works." },
];

const logos = ["Linear", "Vercel", "Stripe", "Notion", "Figma", "Loom"];

const tiers = [
  { name: "Starter", price: "$0", desc: "For individuals exploring the platform.", features: ["Up to 3 projects", "Community support", "Basic AI assist"], cta: "Start free" },
  { name: "Team", price: "$24", desc: "For growing product teams shipping fast.", features: ["Unlimited projects", "Priority support", "Advanced AI workflows", "Integrations & API"], cta: "Start trial", featured: true },
  { name: "Enterprise", price: "Custom", desc: "For organizations that need scale.", features: ["SSO & SCIM", "Audit logs & SLA", "Dedicated CSM", "Custom contracts"], cta: "Contact sales" },
];

const testimonials = [
  { quote: "Nebula collapsed our entire stack into one product. We ship 3x faster and our team has never been happier.", name: "Ava Chen", role: "VP Engineering, Lumen" },
  { quote: "It's the first tool that feels like it was designed by people who actually build software for a living.", name: "Marcus Patel", role: "CTO, Northwind" },
  { quote: "The AI doesn't get in the way — it quietly does the boring stuff so we can focus on the craft.", name: "Sofia Reyes", role: "Head of Product, Orbital" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-50 glass border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="h-7 w-7 rounded-lg bg-gradient-primary shadow-glow" />
            Nebula
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-smooth">Features</a>
            <a href="#pricing" className="hover:text-foreground transition-smooth">Pricing</a>
            <a href="#customers" className="hover:text-foreground transition-smooth">Customers</a>
            <a href="#" className="hover:text-foreground transition-smooth">Docs</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">Sign in</Button>
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-glow">
              Get started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container relative pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs text-muted-foreground mb-6">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Introducing Nebula 3.0 — now with AI agents
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Ship products at the <span className="text-gradient-primary">speed of thought</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Nebula is the all-in-one platform for modern product teams. Plan, build, and launch faster with AI-native workflows that disappear into your craft.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-glow group">
                Start free
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button size="lg" variant="outline" className="border-border bg-card/40">
                Book a demo
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Free forever for individuals. No credit card required.</p>
          </div>

          <div className="relative mx-auto mt-20 max-w-5xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 -z-10 blur-3xl opacity-50 bg-gradient-primary rounded-full" />
            <div className="rounded-2xl border border-border overflow-hidden shadow-elegant animate-pulse-glow">
              <img src={heroImage} alt="Nebula product visualization" width={1920} height={1080} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="border-y border-border py-12">
        <div className="container">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Trusted by teams shipping at world-class companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {logos.map((l) => (
              <span key={l} className="font-display text-xl md:text-2xl font-semibold text-muted-foreground/70 hover:text-foreground transition-smooth">
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient">
              Everything you need. Nothing you don't.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Built from first principles for teams who care about the details.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-card p-8 shadow-card hover:border-primary/40 hover:-translate-y-1 transition-smooth"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary/10 border border-primary/20 mb-5 group-hover:shadow-glow transition-smooth">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="customers" className="py-24 md:py-32 bg-gradient-hero">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Loved by <span className="text-gradient-primary">product teams</span> everywhere
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-8 shadow-card">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient">
              Simple pricing. Serious value.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Start free. Upgrade when you're ready.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl border p-8 shadow-card transition-smooth ${
                  t.featured
                    ? "border-primary/50 bg-card relative shadow-glow"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1">
                    Most popular
                  </div>
                )}
                <h3 className="font-display text-xl font-semibold">{t.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold">{t.price}</span>
                  {t.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                <Button
                  className={`w-full mt-6 ${
                    t.featured
                      ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  } transition-smooth`}
                >
                  {t.cta}
                </Button>
                <ul className="mt-8 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-20 text-center shadow-elegant">
            <div className="absolute inset-0 bg-gradient-hero opacity-80" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
                Ready to <span className="text-gradient-primary">build the future</span>?
              </h2>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
                Join 50,000+ teams who've made the switch to a faster way of building.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-glow">
                  Start free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-border bg-card/40">
                  Talk to sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display font-bold">
            <span className="h-6 w-6 rounded-md bg-gradient-primary" />
            Nebula
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Nebula Labs, Inc. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-smooth">Privacy</a>
            <a href="#" className="hover:text-foreground transition-smooth">Terms</a>
            <a href="#" className="hover:text-foreground transition-smooth">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
