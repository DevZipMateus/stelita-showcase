import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      // Altura total da viewport - Header (80px) - Badge inferior (63px)
      const height = window.innerHeight - 80 - 63;
      setIframeHeight(height);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <Header />
      <div className="pt-20 w-full">
        <iframe
          src="https://fransandalias.egestor.com.br/vitrine/"
          style={{
            width: "100%",
            height: `${iframeHeight}px`,
            border: "none"
          }}
          title="Demonstração de Vitrine"
        />
      </div>
    </div>
  );
};

export default Vitrine;
