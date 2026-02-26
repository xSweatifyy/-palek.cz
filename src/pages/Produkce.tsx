import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const products = [
  { src: "/images/10.gif" },
  { src: "/images/12.gif" },
  { src: "/images/15.gif" },
  { src: "/images/8.gif" },
  { src: "/images/13.gif" },
  { src: "/images/14.gif" },
  { src: "/images/7.gif" },
  { src: "/images/9.gif" },
  { src: "/images/11.gif" },
];

const Produkce = () => {
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
                <span className="font-display text-sm tracking-[0.2em] text-primary uppercase">Produkce</span>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                Ukázky z <span className="text-gradient">výroby</span>
              </h1>
              <p className="text-muted-foreground max-w-3xl text-lg">
                Na základě Vašich technických požadavků vypracujeme vhodná konstrukční řešení v několika finančních variantách.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {products.map((p, i) => (
                <motion.div
                  key={p.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="image-card group"
                >
                  <div className="aspect-square overflow-hidden bg-secondary">
                    <img src={p.src} alt={`Ukázka z výroby ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
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

export default Produkce;
