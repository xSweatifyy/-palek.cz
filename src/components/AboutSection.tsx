import { motion } from "framer-motion";
import { Cable, Settings } from "lucide-react";

const features = [
  {
    icon: Cable,
    title: "Kabelové svazky na míru",
    description: "Vyrábíme kabelové svazky přesně podle vašich technických specifikací.",
  },
  {
    icon: Settings,
    title: "Vlastní vývoj",
    description: "Vypracujeme vhodná konstrukční řešení v několika finančních variantách.",
  },
];

const AboutSection = () => {
  return (
    <section className="relative py-24 md:py-32 section-gradient">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 accent-line" />
            <span className="font-display text-sm tracking-[0.2em] text-primary uppercase">O nás</span>
            <div className="h-px w-8 accent-line" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Proč <span className="text-gradient">ŠPALEK</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Specializujeme se na vývoj a výrobu kabelových svazků s využitím nejmodernějších materiálů a technologií.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="stat-card group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
