import { motion } from "framer-motion";

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

const ProductionSection = () => {
  return (
    <section id="produkce" className="relative py-24 md:py-32 section-gradient">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 accent-line" />
            <span className="font-display text-sm tracking-[0.2em] text-primary uppercase">Produkce</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Ukázky z <span className="text-gradient">výroby</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl text-lg">
            Na základě Vašich technických požadavků vypracujeme vhodná konstrukční řešení v několika finančních variantách.
          </p>
        </motion.div>

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
                <img
                  src={p.src}
                  alt={`Ukázka z výroby ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;
