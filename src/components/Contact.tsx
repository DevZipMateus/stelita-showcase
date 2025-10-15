import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(64) 99243-6841",
      link: "tel:+5564992436841",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "francyellesousa376@gmail.com",
      link: "mailto:francyellesousa376@gmail.com",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua da Aroeira Q19 L434, Gameleira 1, Rio Verde-GO",
      link: null,
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Seg-Sex: 08h às 18h | Sáb: 09h às 13h",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Entre em contato
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Estamos prontos para atender você. Escolha a melhor forma de contato.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = (
              <>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-card-foreground mb-1">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              </>
            );

            return info.link ? (
              <a
                key={index}
                href={info.link}
                className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20"
              >
                {content}
              </a>
            ) : (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md border border-border"
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5564992436841"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg"
          >
            <Phone className="mr-2" size={20} />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/use.stelita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent/20 text-accent-foreground px-8 py-4 rounded-full border-2 border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium text-lg"
          >
            <Instagram className="mr-2" size={20} />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
