import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const materials = [
  { src: "/images/1.gif", label: "Ukázka hadic" },
  { src: "/images/2.gif", label: "Napojení hadice na snímač" },
  { src: "/images/3.gif", label: "Detail AMP 4 s napojením hadice NW 7,5" },
  { src: "/images/4.gif", label: "Napojení hadice na snímač otáček" },
  { src: "/images/5.gif", label: "Detail svazku otevřený" },
  { src: "/images/6.gif", label: "Detail svazku zavřený" },
];

const Materialy = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10 pt-20 md:pt-24">
        <section className="py-16 md:py-24 hero-bg">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 accent-line" />
                <span className="font-display text-sm tracking-[0.2em] text-primary uppercase">Materiály</span>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                Ochranný systém <span className="text-gradient">Schlemmer</span>
              </h1>
              <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
                Kompletní ochrana kabelových svazků systémem Schlemmer. Rozšířený systém, používaný především v automobilovém průmyslu,
                se skládá z plastových hadic různých rozměrů a vlastností, které doplňují plastové díly – rozbočky, určené k větvení svazků.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((m, i) => (
                <motion.div
                  key={m.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="image-card group"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img src={m.src} alt={m.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <p className="font-display text-sm font-medium text-foreground">{m.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Materialy;
