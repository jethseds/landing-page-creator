import { useState } from "react";
import { z } from "zod";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Please write a short message").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    toast({ title: "Message sent!", description: "Thanks for reaching out — our team will get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="bg-gradient-hero py-20">
        <div className="container max-w-3xl text-center">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-blue">Get in Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Interested in partnering with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0"><MapPin className="h-5 w-5" /></div>
              <div>
                <h3 className="font-display font-semibold text-brand-blue">Location</h3>
                <p className="text-muted-foreground">Pandi, Bulacan, Philippines</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0"><Phone className="h-5 w-5" /></div>
              <div>
                <h3 className="font-display font-semibold text-brand-blue">Phone</h3>
                <p className="text-muted-foreground">+63 (0) XXX XXX XXXX</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0"><Mail className="h-5 w-5" /></div>
              <div>
                <h3 className="font-display font-semibold text-brand-blue">Email</h3>
                <p className="text-muted-foreground">info@frankanddavid.ph</p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 bg-card rounded-2xl border border-border p-7 shadow-card space-y-4">
            <div>
              <label className="text-sm font-medium text-brand-blue">Name</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" maxLength={100} />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-brand-blue">Email</label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" maxLength={255} />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-brand-blue">Message</label>
              <Textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your inquiry..." maxLength={1000} />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" className="bg-gradient-primary text-primary-foreground shadow-glow w-full sm:w-auto">
              Send Message <Send className="ml-1 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
