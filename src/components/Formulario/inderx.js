import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do Animal</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do animal" />
                <CampoTexto label="Espécie" placeholder="Digite o nome da Espécie" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}

export default Formulario;