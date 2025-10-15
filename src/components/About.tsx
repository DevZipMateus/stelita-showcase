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
      description: "Atendimento on-line e presencial em Rio Verde-GO para sua comodidade.",
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
            Stelita nasceu para vestir histórias reais de mulheres que batalham e vencem, não vestimos apenas estilo vestimos coragem, autoestima e a jornada de mulheres que transformam desafios em conquistas. Venha fazer parte deste movimento. Seja uma Seleta!
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
