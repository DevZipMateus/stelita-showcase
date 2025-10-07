import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="Stelita Logo" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/80 leading-relaxed">
              Calçados e bolsas multimarcas para mulheres que conquistam.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-background/80 hover:text-background transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-background/80">
              <li>Rio Verde-GO</li>
              <li>
                <a href="tel:+5564992112384" className="hover:text-background transition-colors">
                  (64) 99211-2384
                </a>
              </li>
              <li>
                <a href="mailto:francyellesousa376@gmail.com" className="hover:text-background transition-colors">
                  francyellesousa376@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/use.stelita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>© {currentYear} Stelita. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 36.773.718/0001-68</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
