import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/40 mt-20">
    <div className="container py-14 grid gap-10 md:grid-cols-4">
      <div className="space-y-3">
        <img src={logo} alt="F&D logo" className="h-14 w-auto" />
        <p className="text-sm text-muted-foreground max-w-xs">
          Quality snack manufacturing you can trust. Proudly Filipino, serving distributors and partners nationwide.
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3 text-brand-blue">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
          <li><Link to="/products" className="hover:text-primary">Products</Link></li>
          <li><Link to="/services" className="hover:text-primary">Services</Link></li>
          <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3 text-brand-blue">Products</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Corn Chips (Alibaba)</li>
          <li>Cornick</li>
          <li>Green Peas Snacks</li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-3 text-brand-blue">Contact</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Pandi, Bulacan, Philippines</li>
          <li className="flex gap-2"><Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" /> +63 (0) XXX XXX XXXX</li>
          <li className="flex gap-2"><Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" /> info@frankanddavid.ph</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-5 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 items-center justify-between">
        <p>© {new Date().getFullYear()} Frank and David Food Manufacturing Corp. All rights reserved.</p>
        <p>FDA-compliant. Committed to food safety standards.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
