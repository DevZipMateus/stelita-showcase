import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

type Product = {
  image: string;
  category: "tenis" | "sandalia" | "sapatilha" | "salto" | "botas" | "sapatenis";
};

const Catalogo = () => {
  const [activeCategory, setActiveCategory] = useState<string>("tenis");

  // Produtos categorizados - Usando apenas as imagens que foram adicionadas recentemente
  const products: Product[] = [
    // Botas
    { image: "/galeria/bota-1.jpg", category: "botas" },
    { image: "/galeria/bota-2.jpg", category: "botas" },
    { image: "/galeria/bota-3.jpg", category: "botas" },
    { image: "/galeria/bota-4.jpg", category: "botas" },
    { image: "/galeria/bota-5.jpg", category: "botas" },
    { image: "/galeria/bota-6.jpg", category: "botas" },
    { image: "/galeria/bota-7.jpg", category: "botas" },
    { image: "/galeria/bota-8.jpg", category: "botas" },
    // Sapatilhas
    { image: "/galeria/sapatilha-1.jpg", category: "sapatilha" },
    { image: "/galeria/sapatilha-2.jpg", category: "sapatilha" },
  ];

  const filteredProducts = products.filter(p => p.category === activeCategory);
  
  console.log('Active Category:', activeCategory);
  console.log('Total Products:', products.length);
  console.log('Filtered Products:', filteredProducts.length);
  console.log('Filtered Products:', filteredProducts);

  const categoryLabels: Record<string, string> = {
    tenis: "Tênis",
    sandalia: "Flats",
    sapatilha: "Sapatilhas",
    salto: "Saltos",
    botas: "Botas",
    sapatenis: "Sapatênis"
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
                <TabsTrigger value="sapatenis">Sapatênis</TabsTrigger>
                <TabsTrigger value="sandalia">Flats</TabsTrigger>
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
