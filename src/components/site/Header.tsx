import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass border-b border-border">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Frank and David Food Manufacturing Corp. logo" className="h-12 w-auto" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-bold text-brand-blue text-base">Frank &amp; David</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Food Manufacturing Corp.</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `transition-smooth hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden sm:inline-flex">
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
              Partner With Us
            </Button>
          </Link>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-sm font-medium ${isActive ? "text-primary" : "text-foreground/80"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full bg-gradient-primary text-primary-foreground">Partner With Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
