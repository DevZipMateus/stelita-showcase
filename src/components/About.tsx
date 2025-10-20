import { ShoppingBag, Star, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Star,
      title: "Marcas autênticas",
      description: "Trabalhamos apenas com marcas originais e de qualidade comprovada.",
    },
    {
      icon: ShoppingBag,
      title: "Variedade de produtos",
      description: "Calçados e bolsas multimarcas para todos os estilos e ocasiões.",
    },
    {
      icon: Users,
      title: "Atendimento personalizado",
      description: "Atendimento on-line e presencial em Rio Verde-GO para sua comodidade, com entrega disponível para todo o Brasil.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sobre a Stelita
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Localizada em Rio Verde – GO, contamos com uma loja física e também realizamos vendas pelo atendimento digital, enviando para todo o Brasil com rapidez e segurança.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
            Oferecemos facilidade na hora da compra: parcelamos em até 6x sem juros no cartão e garantimos um atendimento humanizado, ágil e feito com cuidado em cada detalhe. Trabalhamos com marcas reconhecidas no mercado e produtos selecionados para proporcionar estilo, conforto e versatilidade ao dia a dia das nossas clientes.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
            Comprar na Stelita é ter confiança, praticidade e uma experiência que vai muito além do produto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
