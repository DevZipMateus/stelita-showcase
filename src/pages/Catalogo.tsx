import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

type Product = {
  image: string;
  category: "tenis" | "sandalia" | "sapatilha" | "salto" | "botas" | "masculino";
};

const Catalogo = () => {
  const [activeCategory, setActiveCategory] = useState<string>("tenis");

  const products: Product[] = [
    // Tênis
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.36 (1).jpg", category: "tenis" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.37 (2).jpg", category: "tenis" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.42 (1).jpg", category: "tenis" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.42 (2).jpg", category: "tenis" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.42 (3).jpg", category: "tenis" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.42.jpg", category: "tenis" },
    { image: "/galeria/tenis-1.jpg", category: "tenis" },
    { image: "/galeria/tenis-2.jpg", category: "tenis" },
    { image: "/galeria/tenis-3.jpg", category: "tenis" },
    { image: "/galeria/tenis-4.jpg", category: "tenis" },
    { image: "/galeria/tenis-5.jpg", category: "tenis" },
    { image: "/galeria/tenis-6.jpg", category: "tenis" },
    { image: "/galeria/tenis-7.jpg", category: "tenis" },
    
    // Flats (Sandálias)
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.30.jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.31(1).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.34.jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.35 (1).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.35 (2).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.36.jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.39.jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.40 (1).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.40.jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.41 (1).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.41 (2).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.44 (1).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.44 (3).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.44.jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.46 (2).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.46 (3).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.46.jpg", category: "sandalia" },
    
    // Sapatilhas
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.31.jpg", category: "sapatilha" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.32 (1).jpg", category: "sapatilha" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.33 (1).jpg", category: "sapatilha" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.33 (2).jpg", category: "sapatilha" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.33.jpg", category: "sapatilha" },
    { image: "/galeria/sapatilha-1.jpg", category: "sapatilha" },
    { image: "/galeria/sapatilha-2.jpg", category: "sapatilha" },
    { image: "/galeria/sapatilha-9.jpg", category: "sapatilha" },
    { image: "/galeria/sapatilha-10.jpg", category: "sapatilha" },
    { image: "/galeria/sapatilha-11.jpg", category: "sapatilha" },
    { image: "/galeria/sapatilha-12.jpg", category: "sapatilha" },
    { image: "/galeria/sapatilha-13.jpg", category: "sapatilha" },
    { image: "/galeria/sapatilha-14.jpg", category: "sapatilha" },
    { image: "/galeria/sapatilha-15.jpg", category: "sapatilha" },
    { image: "/galeria/sapatilha-16.jpg", category: "sapatilha" },
    
    // Saltos
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.31 (1).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.32.jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.34 (1).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.34 (2).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.34 (3).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.34 (4).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.35 (3).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.35.jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.37 (1).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.37.jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.38 (1).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.38 (2).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.38 (3).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.38.jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.39 (1).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.39 (2).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.39 (3).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.40 (2).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.40 (3).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.41.jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.43 (2).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.43 (3).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.45 (2).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.45 (3).jpg", category: "salto" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.46 (1).jpg", category: "salto" },
    
    // Botas
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.43 (4).jpg", category: "botas" },
    { image: "/galeria/bota-1.jpg", category: "botas" },
    { image: "/galeria/bota-2.jpg", category: "botas" },
    { image: "/galeria/bota-3.jpg", category: "botas" },
    { image: "/galeria/bota-4.jpg", category: "botas" },
    { image: "/galeria/bota-5.jpg", category: "botas" },
    { image: "/galeria/bota-6.jpg", category: "botas" },
    { image: "/galeria/bota-7.jpg", category: "botas" },
    { image: "/galeria/bota-8.jpg", category: "botas" },
    
    // Masculino
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.43 (1).jpg", category: "masculino" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.43.jpg", category: "masculino" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.44 (2).jpg", category: "masculino" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.45 (1).jpg", category: "masculino" },
    { image: "/galeria/WhatsApp Image 2025-09-29 at 14.16.45.jpg", category: "masculino" },
  ];

  const filteredProducts = products.filter(p => p.category === activeCategory);

  const categoryLabels = {
    tenis: "Tênis",
    sandalia: "Flats",
    sapatilha: "Sapatilhas",
    salto: "Saltos",
    botas: "Botas",
    masculino: "Masculino"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-foreground">Catálogo</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Confira nossa seleção de calçados e bolsas multimarcas
              </p>
            </div>

            <Tabs defaultValue="tenis" className="w-full" onValueChange={setActiveCategory}>
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-6 mb-12 bg-muted">
                <TabsTrigger value="tenis">Tênis</TabsTrigger>
                <TabsTrigger value="sandalia">Flats</TabsTrigger>
                <TabsTrigger value="sapatilha">Sapatilhas</TabsTrigger>
                <TabsTrigger value="salto">Saltos</TabsTrigger>
                <TabsTrigger value="botas">Botas</TabsTrigger>
                <TabsTrigger value="masculino">Masculino</TabsTrigger>
              </TabsList>

              <TabsContent value={activeCategory} className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="aspect-square overflow-hidden bg-muted">
                        <img
                          src={product.image}
                          alt={`${categoryLabels[product.category]} ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <a
                          href="https://wa.me/5564992436841"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors text-sm"
                        >
                          Para mais informação sobre tamanhos e cores clique aqui
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catalogo;
