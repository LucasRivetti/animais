import Banner from './components/Banner';
import CampoTexto from './components/Campotexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite o nome do animal"/>
      <CampoTexto label="Espécie" placeholder="Digite o nome da Espécie"/>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
