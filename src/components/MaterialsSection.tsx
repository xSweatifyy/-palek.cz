import { motion } from "framer-motion";

const materials = [
  { src: "/images/1.gif", label: "Ukázka hadic" },
  { src: "/images/2.gif", label: "Napojení hadice na snímač" },
  { src: "/images/3.gif", label: "Detail AMP 4 s napojením hadice NW 7,5" },
  { src: "/images/4.gif", label: "Napojení hadice na snímač otáček" },
  { src: "/images/5.gif", label: "Detail svazku otevřený" },
  { src: "/images/6.gif", label: "Detail svazku zavřený" },
];

const MaterialsSection = () => {
  return (
    <section id="materialy" className="relative py-24 md:py-32">
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
            <span className="font-display text-sm tracking-[0.2em] text-primary uppercase">Materiály</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Ochranný systém <span className="text-gradient">Schlemmer</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
            Kompletní ochrana kabelových svazků systémem Schlemmer. Rozšířený systém, používaný především v automobilovém průmyslu,
            se skládá z plastových hadic různých rozměrů a vlastností, které doplňují plastové díly – rozbočky, určené k větvení svazků.
          </p>
        </motion.div>

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
                <img
                  src={m.src}
                  alt={m.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="font-display text-sm font-medium text-foreground">{m.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
