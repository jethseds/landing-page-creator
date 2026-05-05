import { Briefcase, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const jobs = [
  { title: "Production Operator", type: "Full-time", location: "Pandi, Bulacan" },
  { title: "Quality Assurance Officer", type: "Full-time", location: "Pandi, Bulacan" },
  { title: "Sales & Distribution Associate", type: "Full-time", location: "Bulacan / NCR" },
  { title: "Warehouse Staff", type: "Full-time", location: "Pandi, Bulacan" },
];

const Careers = () => (
  <>
    <section className="bg-gradient-hero py-20">
      <div className="container max-w-3xl text-center">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-blue">Join Our Growing Team</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Build your career with one of the Philippines' trusted snack manufacturers.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container grid md:grid-cols-3 gap-6">
        {[
          { icon: Users, title: "Great People", text: "Work with a passionate, collaborative team." },
          { icon: Heart, title: "Meaningful Work", text: "Help bring beloved Filipino snacks to homes nationwide." },
          { icon: Briefcase, title: "Career Growth", text: "Opportunities to learn, grow, and lead." },
        ].map((b) => (
          <div key={b.title} className="bg-card rounded-2xl border border-border p-7 shadow-card text-center">
            <div className="h-12 w-12 mx-auto rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4">
              <b.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-brand-blue">{b.title}</h3>
            <p className="mt-2 text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-16 bg-gradient-warm">
      <div className="container">
        <h2 className="font-display text-3xl font-bold text-brand-blue text-center mb-10">Open Positions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {jobs.map((j) => (
            <div key={j.title} className="bg-card rounded-xl border border-border p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-card">
              <div>
                <h3 className="font-display font-semibold text-lg text-brand-blue">{j.title}</h3>
                <p className="text-sm text-muted-foreground">{j.type} • {j.location}</p>
              </div>
              <Link to="/contact"><Button variant="outline">Apply Now</Button></Link>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Don't see your role? Send us your CV at <span className="text-brand-blue font-medium">careers@frankanddavid.ph</span>
        </p>
      </div>
    </section>
  </>
);

export default Careers;
