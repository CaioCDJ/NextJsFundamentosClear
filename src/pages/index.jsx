import Link from "next/link";
import Navegador from "../components/Navegador";

function Inicio(){
  return(
    <div style={{
      display:"flex",
      justifyContent: 'center',
      alignItems:'center',
      height:'100vh',
      fle:'wrap'
    }}>
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="exemplo" destino="/exemplo" cor="crimson"/>
      <Navegador texto="Navegação #01" destino="/navegacao" cor="green" />
      <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="blue" />
      <Navegador texto="Componente com estado" destino="/estado" cor="#f0f" />
      <Navegador texto="Integração com api #01" destino="/integracao" cor="chocolate" />
    </div>
  );
}

export default Inicio;