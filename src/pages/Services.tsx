import { Link } from "react-router-dom";
import { ArrowRight, Shield, Briefcase, Scale, Users, FileText, Gavel, Building, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const services = [
  {
    icon: Shield,
    title: "Criminal Defense",
    description: "Aggressive defense against all criminal charges including DUI, assault, drug offenses, white-collar crimes, and federal charges.",
    features: ["24/7 Emergency Support", "Federal & State Courts", "Appeals & Post-Conviction"],
  },
  {
    icon: Briefcase,
    title: "Corporate Law",
    description: "Comprehensive business legal services from formation to complex mergers, acquisitions, and regulatory compliance.",
    features: ["Business Formation", "Contract Negotiation", "M&A Transactions"],
  },
  {
    icon: Scale,
    title: "Civil Litigation",
    description: "Expert representation in disputes involving contracts, personal injury, property, and commercial matters.",
    features: ["Personal Injury", "Contract Disputes", "Property Litigation"],
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Compassionate guidance through divorce, child custody, support, and other sensitive family matters.",
    features: ["Divorce & Separation", "Child Custody", "Prenuptial Agreements"],
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description: "Protect your legacy with wills, trusts, and comprehensive estate planning strategies.",
    features: ["Wills & Trusts", "Probate", "Asset Protection"],
  },
  {
    icon: Gavel,
    title: "Employment Law",
    description: "Defending employee rights and advising employers on compliance and workplace policies.",
    features: ["Wrongful Termination", "Discrimination Claims", "Workplace Compliance"],
  },
  {
    icon: Building,
    title: "Real Estate Law",
    description: "Full-service real estate legal support for residential and commercial transactions.",
    features: ["Purchase & Sale", "Lease Agreements", "Title Disputes"],
  },
  {
    icon: Heart,
    title: "Immigration Law",
    description: "Navigating complex immigration processes for individuals and businesses.",
    features: ["Visa Applications", "Green Cards", "Citizenship"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b-4 border-foreground relative">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="font-mono text-sm bg-primary px-4 py-2 border-4 border-foreground shadow-brutal-sm inline-block mb-8">
              PRACTICE AREAS
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8">
              LEGAL
              <br />
              <span className="text-stroke">SERVICES</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-mono opacity-80 max-w-2xl">
              From criminal defense to corporate law, we provide aggressive, results-driven representation across all practice areas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 border-b-4 border-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="brutal-card p-8 group"
                style={{ transform: `rotate(${i % 2 === 0 ? '-0.5' : '0.5'}deg)` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-primary border-4 border-foreground shadow-brutal-sm flex items-center justify-center shrink-0 group-hover:rotate-neg-2 transition-transform">
                    <service.icon size={40} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="font-mono text-sm opacity-80 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 font-mono text-sm">
                          <span className="w-2 h-2 bg-primary"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-muted border-b-4 border-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-mono text-sm bg-background px-4 py-2 border-4 border-foreground shadow-brutal-sm inline-block mb-6">
              HOW WE WORK
            </span>
            <h2 className="text-4xl md:text-6xl font-bold">
              OUR <span className="bg-primary px-4">PROCESS</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Free initial meeting to understand your case" },
              { step: "02", title: "Strategy", desc: "Develop a tailored legal approach" },
              { step: "03", title: "Execution", desc: "Aggressive representation and advocacy" },
              { step: "04", title: "Resolution", desc: "Achieve the best possible outcome" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-foreground text-background border-4 border-foreground shadow-brutal-sm flex items-center justify-center mx-auto mb-6 font-mono font-bold text-2xl">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="font-mono text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary-foreground">
            NEED LEGAL HELP?
          </h2>
          <p className="text-xl font-mono mb-10 max-w-2xl mx-auto text-primary-foreground/80">
            Get a free case evaluation and discover how we can fight for you.
          </p>
          <Button asChild variant="brutal" size="xl">
            <Link to="/contact">
              Free Consultation
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
