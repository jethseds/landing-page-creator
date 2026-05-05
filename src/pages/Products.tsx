import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import cornChips from "@/assets/corn-chips.jpg";
import cornick from "@/assets/cornick.jpg";
import greenPeas from "@/assets/green-peas.jpg";

const products = [
  {
    name: "Corn Chips",
    img: cornChips,
    desc: "Crispy, golden corn chips with the iconic taste Filipinos love. Home of our flagship Alibaba brand.",
    packaging: ["Single-serve sachet", "Family pack", "Bulk wholesale cartons"],
  },
  {
    name: "Cornick",
    img: cornick,
    desc: "Crunchy fried corn kernels — a Filipino classic snack available in classic and flavored variants.",
    packaging: ["Pouch packs", "Resealable bags", "Bulk wholesale cartons"],
  },
  {
    name: "Green Peas Snacks",
    img: greenPeas,
    desc: "Lightly seasoned crispy green peas with a satisfying crunch and savory flavor.",
    packaging: ["Single-serve packs", "Family-size pouches", "Bulk distributor packs"],
  },
];

const Products = () => (
  <>
    <section className="bg-gradient-hero py-20">
      <div className="container max-w-3xl text-center">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-brand-blue">Our Products</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Quality Filipino snacks, crafted for every distributor, retailer, and partner.
        </p>
      </div>
    </section>

    <section className="py-16 space-y-16">
      <div className="container space-y-20">
        {products.map((p, i) => (
          <div key={p.name} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="rounded-2xl overflow-hidden border border-border shadow-card bg-secondary/30">
              <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="w-full h-auto" />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-blue">{p.name}</h2>
              <p className="mt-3 text-muted-foreground">{p.desc}</p>
              <h3 className="mt-6 font-semibold text-brand-blue">Packaging Options</h3>
              <ul className="mt-2 space-y-1.5 text-muted-foreground">
                {p.packaging.map((pk) => (
                  <li key={pk} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> {pk}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block mt-6">
                <Button className="bg-gradient-primary text-primary-foreground shadow-glow">Request a Quote</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Products;
