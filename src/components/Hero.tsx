import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Calçados e bolsas Stelita"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Stelita
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-muted-foreground font-light">
            Para mulheres que conquistam
          </h2>
          <p className="text-lg md:text-xl mb-10 text-foreground/80 leading-relaxed">
            Varejo e atacado de calçados e bolsas multimarcas. Todas as marcas que trabalhamos são autênticas e originais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5564992436841"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg group"
            >
              Comprar agora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="https://forms.gle/pagEScXGjNMKFJW5A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent/20 text-accent-foreground px-8 py-4 rounded-full border-2 border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium text-lg"
            >
              Cadastro atacado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
