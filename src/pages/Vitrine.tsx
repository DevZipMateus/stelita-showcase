import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    // Trava a rolagem do body
    document.body.style.overflow = "hidden";
    
    const calculateHeight = () => {
      // Altura total da viewport - Header (80px) - Badge inferior (63px)
      const height = window.innerHeight - 80 - 63;
      setIframeHeight(height);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <Header />
      <div className="w-full flex-1 overflow-hidden" style={{ marginTop: '80px' }}>
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
      <div className="w-full h-[63px] flex-shrink-0 bg-transparent">
        <div id="montesite-footer-badge"></div>
      </div>
    </div>
  );
};

export default Vitrine;
