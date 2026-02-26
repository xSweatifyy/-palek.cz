import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const contactInfo = [
  { icon: Building, label: "Firma", value: "Martin Špalek" },
  { icon: MapPin, label: "Adresa", value: "Hlubočinka 851, Kamenice – 251 68" },
  { icon: Phone, label: "Telefon", value: "608 802 820" },
  { icon: Phone, label: "Telefon", value: "777 918 253" },
  { icon: Mail, label: "E-mail", value: "info@spalek.cz", href: "mailto:info@spalek.cz" },
  { icon: FileText, label: "IČO", value: "64921379" },
  { icon: FileText, label: "DIČ", value: "004-7304100188" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10 pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 hero-bg">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 accent-line" />
                <span className="font-display text-sm tracking-[0.2em] text-primary uppercase">Kontakt</span>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                Spojte se <span className="text-gradient">s námi</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl">
                Rádi vám pomůžeme s vývojem a výrobou kabelových svazků na míru.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display font-bold text-2xl text-foreground mb-8">
                  Kontaktní údaje
                </h2>
                <div className="grid gap-4">
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={`${item.label}-${item.value}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="stat-card flex items-center gap-4 !p-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-display uppercase tracking-wider">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display font-bold text-2xl text-foreground mb-8">
                  Kde nás najdete
                </h2>
                <div className="card-surface rounded-xl overflow-hidden glow-border">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Hlubočinka+851,+Kamenice,+251+68,+Czech+Republic&zoom=15"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa - Hlubočinka 851, Kamenice"
                    className="w-full"
                  />
                </div>
                <div className="mt-4 p-4 card-surface rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Hlubočinka 851</strong>, Kamenice – 251 68
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
