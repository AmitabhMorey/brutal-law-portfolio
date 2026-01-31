import { Link } from "react-router-dom";
import { ArrowRight, Award, BookOpen, Users, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { BlurText, Magnet, FadeContent, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import lawyerHero from "@/assets/lawyer-hero.jpg";

const credentials = [
  { icon: BookOpen, label: "Harvard Law School, J.D." },
  { icon: Award, label: "New York State Bar Association" },
  { icon: Scale, label: "American Bar Association" },
  { icon: Users, label: "Trial Lawyers Association" },
];

const timeline = [
  { year: "2005", event: "Founded Drake Law Firm" },
  { year: "2010", event: "Won landmark corporate fraud case" },
  { year: "2015", event: "Named Top 40 Under 40 Attorneys" },
  { year: "2020", event: "500+ cases won milestone" },
  { year: "2024", event: "Expanded to 3 national offices" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b-4 border-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <FadeContent delay={0.1}>
                <span className="font-mono text-sm bg-primary px-4 py-2 border-4 border-foreground shadow-brutal-sm inline-block">
                  ABOUT
                </span>
              </FadeContent>

              <TextReveal delay={0.2}>
                <h1 className="text-5xl md:text-7xl font-bold leading-[0.9]">
                  MEET
                  <br />
                  <span className="bg-primary px-4">JAMES</span>
                  <br />
                  DRAKE
                </h1>
              </TextReveal>

              <BlurText
                text="With over two decades of courtroom experience, I've built my reputation on one simple principle: relentless advocacy for my clients."
                className="text-xl font-mono opacity-80 leading-relaxed"
                delay={80}
                animateBy="words"
              />

              <FadeContent delay={0.5} y={20}>
                <p className="font-mono opacity-70 leading-relaxed">
                  I believe every client deserves a fighter in their corner. Whether you're facing criminal charges,
                  navigating a complex business dispute, or dealing with a personal legal matter, I bring the same
                  intensity and dedication to every case.
                </p>
              </FadeContent>
            </div>

            <FadeContent delay={0.4} y={60} scale={0.95}>
              <div className="relative">
                <div className="brutal-card p-0 overflow-hidden rotate-neg-1 hover:rotate-0 transition-transform duration-300">
                  <img
                    src={lawyerHero}
                    alt="James Drake"
                    className="w-full h-[500px] object-cover object-top"
                  />
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 bg-foreground text-background border-b-4 border-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeContent>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                MY <span className="text-primary">PHILOSOPHY</span>
              </h2>
            </FadeContent>
            <FadeContent delay={0.2}>
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                "The law is not just about rules and regulations. It's about
                <span className="text-primary"> protecting people's lives, </span>
                their freedoms, and their futures. Every case matters because every client matters."
              </blockquote>
            </FadeContent>
            <FadeContent delay={0.4}>
              <p className="font-mono text-lg opacity-80">— James Drake</p>
            </FadeContent>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 md:py-32 border-b-4 border-foreground">
        <div className="container mx-auto px-4">
          <FadeContent className="text-center mb-16">
            <span className="font-mono text-sm bg-muted px-4 py-2 border-4 border-foreground shadow-brutal-sm inline-block mb-6">
              CREDENTIALS
            </span>
            <h2 className="text-4xl md:text-6xl font-bold">
              EDUCATION & <span className="text-stroke">AFFILIATIONS</span>
            </h2>
          </FadeContent>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, i) => (
              <StaggerItem key={i}>
                <div
                  className="brutal-card p-8 text-center"
                  style={{ transform: `rotate(${i % 2 === 0 ? '-1' : '1'}deg)` }}
                >
                  <div className="w-20 h-20 bg-primary border-4 border-foreground shadow-brutal-sm flex items-center justify-center mx-auto mb-6">
                    <cred.icon size={40} />
                  </div>
                  <p className="font-bold text-lg">{cred.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-muted border-b-4 border-foreground">
        <div className="container mx-auto px-4">
          <FadeContent className="text-center mb-16">
            <span className="font-mono text-sm bg-background px-4 py-2 border-4 border-foreground shadow-brutal-sm inline-block mb-6">
              JOURNEY
            </span>
            <h2 className="text-4xl md:text-6xl font-bold">
              CAREER <span className="bg-primary px-4">TIMELINE</span>
            </h2>
          </FadeContent>

          <StaggerContainer className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-8 items-start mb-8 last:mb-0">
                  <div className="w-24 shrink-0">
                    <span className="font-mono font-bold text-2xl bg-primary px-3 py-1 border-4 border-foreground shadow-brutal-sm inline-block">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1 brutal-card bg-background p-6">
                    <p className="font-bold text-lg">{item.event}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <TextReveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary-foreground">
              LET'S WORK<br />TOGETHER
            </h2>
          </TextReveal>
          <FadeContent delay={0.3}>
            <Magnet padding={80} magnetStrength={2}>
              <Button asChild variant="brutal" size="xl">
                <Link to="/contact">
                  Get In Touch
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

export default About;
