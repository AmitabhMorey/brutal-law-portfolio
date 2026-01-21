import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { toast } from "sonner";
import { BlurText, Magnet, FadeContent, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(123) 456-7890", href: "tel:+1234567890" },
  { icon: Mail, label: "Email", value: "james@drakelaw.com", href: "mailto:james@drakelaw.com" },
  { icon: MapPin, label: "Office", value: "123 Legal Avenue, Suite 500\nNew York, NY 10001" },
  { icon: Clock, label: "Hours", value: "Mon-Fri: 9AM - 6PM\n24/7 Emergency Line" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b-4 border-foreground relative">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <FadeContent delay={0.1}>
              <span className="font-mono text-sm bg-primary px-4 py-2 border-4 border-foreground shadow-brutal-sm inline-block mb-8">
                GET IN TOUCH
              </span>
            </FadeContent>
            
            <TextReveal delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8">
                LET'S
                <br />
                <span className="text-stroke">TALK</span>
              </h1>
            </TextReveal>
            
            <BlurText 
              text="Ready to fight for your rights? Schedule a free consultation and let's discuss your case."
              className="text-xl md:text-2xl font-mono opacity-80 max-w-2xl"
              delay={80}
              animateBy="words"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 border-b-4 border-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <FadeContent delay={0.2} y={40}>
              <div className="brutal-card p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono font-bold text-sm mb-2 uppercase">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="brutal-input w-full"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block font-mono font-bold text-sm mb-2 uppercase">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="brutal-input w-full"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono font-bold text-sm mb-2 uppercase">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="brutal-input w-full"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label className="block font-mono font-bold text-sm mb-2 uppercase">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="brutal-input w-full"
                      >
                        <option value="">Select a topic</option>
                        <option value="criminal">Criminal Defense</option>
                        <option value="corporate">Corporate Law</option>
                        <option value="civil">Civil Litigation</option>
                        <option value="family">Family Law</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono font-bold text-sm mb-2 uppercase">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="brutal-input w-full resize-none"
                      placeholder="Tell us about your case..."
                    />
                  </div>

                  <Magnet padding={40} magnetStrength={3}>
                    <Button type="submit" variant="brutal" size="lg" className="w-full">
                      <Send className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </Magnet>

                  <p className="font-mono text-xs opacity-60 text-center">
                    All consultations are confidential. We typically respond within 24 hours.
                  </p>
                </form>
              </div>
            </FadeContent>

            {/* Contact Info */}
            <div className="space-y-8">
              <FadeContent delay={0.3}>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              </FadeContent>
              
              <StaggerContainer className="space-y-6" staggerDelay={0.1} initialDelay={0.4}>
                {contactInfo.map((info, i) => (
                  <StaggerItem key={i}>
                    <div
                      className="brutal-card p-6 flex items-start gap-4"
                      style={{ transform: `rotate(${i % 2 === 0 ? '-0.5' : '0.5'}deg)` }}
                    >
                      <div className="w-14 h-14 bg-primary border-4 border-foreground shadow-brutal-sm flex items-center justify-center shrink-0">
                        <info.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{info.label}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-mono text-sm opacity-80 hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-mono text-sm opacity-80 whitespace-pre-line">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Map Placeholder */}
              <FadeContent delay={0.8}>
                <div className="brutal-card p-0 overflow-hidden h-64">
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={48} className="mx-auto mb-4 opacity-50" />
                      <p className="font-mono text-sm opacity-50">Map View</p>
                      <p className="font-mono text-xs opacity-40">123 Legal Avenue, NYC</p>
                    </div>
                  </div>
                </div>
              </FadeContent>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <FadeContent>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  <span className="text-primary">URGENT</span> Legal Matter?
                </h3>
                <p className="font-mono opacity-80">
                  24/7 emergency line available for immediate assistance
                </p>
              </div>
              <Magnet padding={60} magnetStrength={2}>
                <Button asChild variant="default" size="lg">
                  <a href="tel:+1234567890">
                    <Phone className="mr-2" size={20} />
                    Call Now: (123) 456-7890
                  </a>
                </Button>
              </Magnet>
            </div>
          </FadeContent>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
