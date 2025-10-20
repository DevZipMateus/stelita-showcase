import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

type Product = {
  image: string;
  category: "tenis" | "sandalia" | "sapatilha" | "salto" | "botas";
};

const Catalogo = () => {
  const [activeCategory, setActiveCategory] = useState<string>("tenis");

  // Produtos categorizados
  const products: Product[] = [
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.30.jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.31%20(1).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.31(1).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.31.jpg", category: "sapatilha" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.32%20(1).jpg", category: "sapatilha" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.32.jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.33%20(1).jpg", category: "sapatilha" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.33%20(2).jpg", category: "sapatilha" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.33.jpg", category: "sapatilha" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.34%20(1).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.34%20(2).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.34%20(3).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.34%20(4).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.34.jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.35%20(1).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.35%20(2).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.35%20(3).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.35.jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.36%20(1).jpg", category: "tenis" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.36.jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.37%20(1).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.37%20(2).jpg", category: "tenis" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.37.jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.38%20(1).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.38%20(2).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.38%20(3).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.38.jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.39%20(1).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.39%20(2).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.39%20(3).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.39.jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.40%20(1).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.40%20(2).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.40%20(3).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.40.jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.41%20(1).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.41%20(2).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.41.jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.42%20(1).jpg", category: "tenis" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.42%20(2).jpg", category: "tenis" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.42%20(3).jpg", category: "tenis" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.42.jpg", category: "tenis" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.43%20(1).jpg", category: "tenis" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.43%20(2).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.43%20(3).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.43%20(4).jpg", category: "botas" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.43.jpg", category: "tenis" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.44%20(1).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.44%20(2).jpg", category: "tenis" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.44%20(3).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.44.jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.45%20(1).jpg", category: "tenis" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.45%20(2).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.45%20(3).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.45.jpg", category: "tenis" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.46%20(1).jpg", category: "salto" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.46%20(2).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.46%20(3).jpg", category: "sandalia" },
    { image: "/galeria/WhatsApp%20Image%202025-09-29%20at%2014.16.46.jpg", category: "sandalia" },
  ];

  const filteredProducts = products.filter(p => p.category === activeCategory);

  const categoryLabels = {
    tenis: "Tênis",
    sandalia: "Sandálias",
    sapatilha: "Sapatilhas",
    salto: "Saltos",
    botas: "Botas"
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
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-12 bg-muted">
                <TabsTrigger value="tenis">Tênis</TabsTrigger>
                <TabsTrigger value="sandalia">Sandálias</TabsTrigger>
                <TabsTrigger value="sapatilha">Sapatilhas</TabsTrigger>
                <TabsTrigger value="salto">Saltos</TabsTrigger>
                <TabsTrigger value="botas">Botas</TabsTrigger>
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
