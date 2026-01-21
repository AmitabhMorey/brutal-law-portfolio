import { Link } from "react-router-dom";
import { ArrowRight, Trophy, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const featuredCases = [
  {
    title: "State v. Morrison",
    category: "Criminal Defense",
    outcome: "ACQUITTED",
    year: "2024",
    description: "High-profile murder case with circumstantial evidence. Achieved full acquittal through expert cross-examination and forensic challenges.",
    highlight: true,
  },
  {
    title: "TechCorp Merger",
    category: "Corporate Law",
    outcome: "$50M DEAL",
    year: "2023",
    description: "Successfully negotiated complex merger protecting client's interests and securing favorable terms.",
    highlight: false,
  },
  {
    title: "Johnson v. Metro Hospital",
    category: "Civil Litigation",
    outcome: "$2.5M SETTLEMENT",
    year: "2023",
    description: "Medical malpractice case resulting in significant settlement for wrongful injury.",
    highlight: true,
  },
  {
    title: "Federal Investigation Defense",
    category: "White Collar Crime",
    outcome: "CHARGES DROPPED",
    year: "2022",
    description: "Successfully defended client against federal fraud charges, preventing potential 20-year sentence.",
    highlight: false,
  },
  {
    title: "Custody Battle",
    category: "Family Law",
    outcome: "FULL CUSTODY",
    year: "2022",
    description: "Secured full custody for client in contentious multi-state custody dispute.",
    highlight: false,
  },
  {
    title: "Real Estate Dispute",
    category: "Property Law",
    outcome: "$1.2M RECOVERY",
    year: "2021",
    description: "Complex commercial property dispute resulting in significant recovery for client.",
    highlight: true,
  },
];

const caseStats = [
  { label: "Cases Won", value: "500+" },
  { label: "Total Recovered", value: "$50M+" },
  { label: "Acquittals", value: "150+" },
  { label: "Corporate Deals", value: "200+" },
];

const Cases = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b-4 border-foreground relative">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="font-mono text-sm bg-primary px-4 py-2 border-4 border-foreground shadow-brutal-sm inline-block mb-8">
              TRACK RECORD
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8">
              WINNING
              <br />
              <span className="bg-primary px-4">CASES</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-mono opacity-80 max-w-2xl">
              Results speak louder than words. Here's a selection of our notable victories and achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-foreground text-background py-12 border-b-4 border-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {caseStats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                <p className="font-mono text-sm mt-2 opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 md:py-32 border-b-4 border-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCases.map((caseItem, i) => (
              <div
                key={i}
                className={`brutal-card p-8 ${caseItem.highlight ? 'bg-primary' : 'bg-card'}`}
                style={{ transform: `rotate(${i % 3 === 0 ? '-1' : i % 3 === 1 ? '0.5' : '-0.5'}deg)` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`font-mono text-xs px-3 py-1 border-4 border-foreground ${caseItem.highlight ? 'bg-background' : 'bg-muted'}`}>
                    {caseItem.category}
                  </span>
                  <span className="font-mono text-sm opacity-70">{caseItem.year}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{caseItem.title}</h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <Trophy size={20} className={caseItem.highlight ? 'text-foreground' : 'text-primary'} />
                  <span className="font-mono font-bold">{caseItem.outcome}</span>
                </div>
                
                <p className="font-mono text-sm opacity-80 leading-relaxed">
                  {caseItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Mention */}
      <section className="py-20 md:py-32 bg-muted border-b-4 border-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="brutal-card bg-background p-12">
              <span className="font-mono text-sm bg-primary px-4 py-2 border-4 border-foreground shadow-brutal-sm inline-block mb-8">
                LANDMARK CASE
              </span>
              
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                United States v. Henderson
              </h3>
              
              <p className="text-xl font-mono opacity-80 mb-6 leading-relaxed">
                In 2019, we successfully defended a client facing federal RICO charges carrying a 
                potential 30-year sentence. Through meticulous investigation and expert testimony, 
                we dismantled the prosecution's case piece by piece.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 border-4 border-foreground bg-muted">
                  <p className="font-mono font-bold text-2xl">30 Years</p>
                  <p className="font-mono text-sm opacity-70">Sentence Avoided</p>
                </div>
                <div className="text-center p-4 border-4 border-foreground bg-primary">
                  <p className="font-mono font-bold text-2xl">NOT GUILTY</p>
                  <p className="font-mono text-sm">Verdict</p>
                </div>
                <div className="text-center p-4 border-4 border-foreground bg-muted">
                  <p className="font-mono font-bold text-2xl">18 Months</p>
                  <p className="font-mono text-sm opacity-70">Trial Duration</p>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-primary pl-6 font-mono text-lg italic opacity-80">
                "James Drake didn't just defend me—he gave me my life back. His dedication was unwavering."
                <br />
                <span className="not-italic opacity-70">— Client Testimonial</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary-foreground">
            YOUR CASE<br />COULD BE NEXT
          </h2>
          <Button asChild variant="brutal" size="xl">
            <Link to="/contact">
              Start Your Case
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Cases;
