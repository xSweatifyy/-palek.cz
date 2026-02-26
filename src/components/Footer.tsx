import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-md accent-line flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-sm">Š</span>
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-foreground">ŠPALEK</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Vývoj a výroba kabelových svazků. Profesionální řešení na míru.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Navigace</h4>
            <div className="flex flex-col gap-2">
              <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Úvod</a>
              <a href="/materialy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Materiály</a>
              <a href="/produkce" className="text-sm text-muted-foreground hover:text-primary transition-colors">Produkce</a>
              <a href="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kontakt</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Kontakt</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={14} className="text-primary" />
                <span>608 802 820</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={14} className="text-primary" />
                <span>777 918 253</span>
              </div>
              <a href="mailto:info@spalek.cz" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} className="text-primary" />
                <span>info@spalek.cz</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Martin Špalek — Všechna práva vyhrazena.
          </p>
          <p className="text-xs text-muted-foreground">
            IČO: 64921379 | DIČ: 004-7304100188
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
