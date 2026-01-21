import { Link } from "react-router-dom";
import { ArrowRight, Scale, Shield, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { BlurText, Magnet, FadeContent, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import lawyerHero from "@/assets/lawyer-hero.jpg";

const stats = [
  { number: "500+", label: "Cases Won" },
  { number: "20+", label: "Years Experience" },
  { number: "98%", label: "Success Rate" },
  { number: "1000+", label: "Happy Clients" },
];

const practiceAreas = [
  {
    icon: Shield,
    title: "Criminal Defense",
    description: "Aggressive defense strategies to protect your rights and freedom.",
  },
  {
    icon: Briefcase,
    title: "Corporate Law",
    description: "Comprehensive legal solutions for businesses of all sizes.",
  },
  {
    icon: Scale,
    title: "Civil Litigation",
    description: "Expert representation in complex civil disputes and lawsuits.",
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Compassionate guidance through divorce, custody, and family matters.",
  },
];

const testimonials = [
  {
    quote: "James Drake turned my case around completely. His aggressive approach and deep knowledge saved my business.",
    author: "Michael Chen",
    role: "CEO, TechVentures Inc.",
  },
  {
    quote: "I was facing serious criminal charges. Mr. Drake's defense was flawless. Case dismissed.",
    author: "Sarah Williams",
    role: "Acquitted Client",
  },
  {
    quote: "The best attorney I've ever worked with. Professional, thorough, and absolutely relentless.",
    author: "David Rodriguez",
    role: "Business Owner",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center border-b-4 border-foreground overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <FadeContent delay={0.1}>
                <div className="inline-block">
                  <span className="font-mono text-sm bg-primary px-4 py-2 border-4 border-foreground shadow-brutal-sm">
                    ATTORNEY AT LAW • EST. 2005
                  </span>
                </div>
              </FadeContent>
              
              <TextReveal delay={0.2}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                  JUSTICE
                  <br />
                  <span className="text-stroke">DELIVERED</span>
                  <br />
                  <span className="bg-primary px-4">DAILY.</span>
                </h1>
              </TextReveal>
              
              <BlurText 
                text="When your freedom, reputation, or future is at stake, you need an attorney who fights without compromise."
                className="text-xl md:text-2xl font-mono max-w-lg opacity-80"
                delay={100}
                animateBy="words"
              />
              
              <FadeContent delay={0.6} y={20}>
                <div className="flex flex-wrap gap-4">
                  <Magnet padding={50} magnetStrength={3}>
                    <Button asChild size="lg" variant="brutal">
                      <Link to="/contact">
                        Free Consultation
                        <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                  </Magnet>
                  <Magnet padding={50} magnetStrength={3}>
                    <Button asChild size="lg" variant="outline">
                      <Link to="/cases">View My Cases</Link>
                    </Button>
                  </Magnet>
                </div>
              </FadeContent>
            </div>
            
            <FadeContent delay={0.4} y={60} scale={0.95}>
              <div className="relative">
                <div className="brutal-card p-0 overflow-hidden rotate-1 hover:rotate-0 transition-transform duration-300">
                  <img
                    src={lawyerHero}
                    alt="James Drake - Attorney at Law"
                    className="w-full h-[500px] lg:h-[600px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary border-4 border-foreground shadow-brutal p-6 rotate-neg-2">
                  <p className="font-mono font-bold text-lg">20+ YEARS</p>
                  <p className="font-mono text-sm">Defending Rights</p>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-foreground text-background py-8 border-b-4 border-foreground">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</p>
                  <p className="font-mono text-sm mt-2 opacity-80">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 md:py-32 border-b-4 border-foreground">
        <div className="container mx-auto px-4">
          <FadeContent className="text-center mb-16">
            <span className="font-mono text-sm bg-muted px-4 py-2 border-4 border-foreground shadow-brutal-sm inline-block mb-6">
              PRACTICE AREAS
            </span>
            <h2 className="text-4xl md:text-6xl font-bold">
              LEGAL <span className="text-stroke">EXPERTISE</span>
            </h2>
          </FadeContent>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, i) => (
              <StaggerItem key={i}>
                <div className="brutal-card p-8 group h-full">
                  <div className="w-16 h-16 bg-primary border-4 border-foreground shadow-brutal-sm flex items-center justify-center mb-6 group-hover:rotate-neg-2 transition-transform">
                    <area.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="font-mono text-sm opacity-80">{area.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <FadeContent className="text-center mt-12" delay={0.4}>
            <Magnet padding={60} magnetStrength={2}>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  All Practice Areas
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </Magnet>
          </FadeContent>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-muted border-b-4 border-foreground">
        <div className="container mx-auto px-4">
          <FadeContent className="text-center mb-16">
            <span className="font-mono text-sm bg-background px-4 py-2 border-4 border-foreground shadow-brutal-sm inline-block mb-6">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-6xl font-bold">
              CLIENT <span className="bg-primary px-4">WINS</span>
            </h2>
          </FadeContent>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <StaggerItem key={i}>
                <div
                  className="brutal-card p-8 bg-background h-full"
                  style={{ transform: `rotate(${i % 2 === 0 ? '-1' : '1'}deg)` }}
                >
                  <div className="text-6xl font-bold text-primary mb-4">"</div>
                  <blockquote className="text-lg font-medium mb-6 leading-relaxed">
                    {testimonial.quote}
                  </blockquote>
                  <div className="border-t-4 border-foreground pt-4">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="font-mono text-sm opacity-70">{testimonial.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary border-b-4 border-foreground">
        <div className="container mx-auto px-4 text-center">
          <TextReveal>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-primary-foreground">
              READY TO<br />
              <span className="border-b-8 border-foreground">FIGHT BACK?</span>
            </h2>
          </TextReveal>
          <FadeContent delay={0.3}>
            <p className="text-xl font-mono mb-10 max-w-2xl mx-auto text-primary-foreground/80">
              Don't face the legal system alone. Get a free consultation and learn how we can protect your rights.
            </p>
          </FadeContent>
          <FadeContent delay={0.5}>
            <Magnet padding={80} magnetStrength={2}>
              <Button asChild variant="brutal" size="xl">
                <Link to="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </Magnet>
          </FadeContent>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
