import { motion } from "framer-motion";
import { ArrowDown, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(200 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(200 100% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 accent-line" />
              <span className="font-display text-sm tracking-[0.2em] text-primary uppercase">
                Martin Špalek
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
              <span className="text-foreground">Vývoj a výroba</span>
              <br />
              <span className="text-gradient">kabelových svazků</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Profesionální řešení kabelových svazků na míru. Od návrhu po sériovou výrobu s důrazem na kvalitu a spolehlivost.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg accent-line font-display font-semibold text-primary-foreground tracking-wide hover:opacity-90 transition-opacity"
              >
                <Zap size={18} />
                Kontaktujte nás
              </a>
              <a
                href="/produkce"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-display font-medium tracking-wide hover:bg-secondary transition-colors"
              >
                Naše produkce
              </a>
            </div>

            {/* Mopedix badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-sm text-muted-foreground">
                Dodáváme kabelové svazky pro <strong className="text-primary">Mopedix</strong>
              </span>
            </motion.div>
          </motion.div>

          {/* Right - hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-[60px]" />
              <div className="relative card-surface rounded-2xl p-8 glow-border">
                <img
                  src="/images/kablik.gif"
                  alt="Kabelové svazky - Martin Špalek"
                  className="w-full max-w-md animate-float"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground font-display tracking-wider">SCROLL</span>
          <ArrowDown size={16} className="text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
