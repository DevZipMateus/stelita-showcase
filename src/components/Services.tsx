import { Package, Store } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Store,
      title: "Varejo",
      description: "Compre suas peças favoritas de forma individual, com atendimento personalizado on-line ou presencial.",
      cta: "Comprar no varejo",
      link: "https://wa.me/5564992436841",
    },
    {
      icon: Package,
      title: "Atacado",
      description: "Condições especiais para lojistas e revendedores. Cadastre-se e tenha acesso ao nosso catálogo completo.",
      cta: "Cadastro atacado",
      link: "https://forms.gle/pagEScXGjNMKFJW5A",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nossos serviços
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Oferecemos soluções tanto para consumidores finais quanto para empresas e revendedores.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/30"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-primary" size={40} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 text-center">
                  {service.description}
                </p>
                <div className="text-center">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                  >
                    {service.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
