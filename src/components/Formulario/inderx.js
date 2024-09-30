import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {

    const Habitat = [
        'Terreste',
        'Aquático',
        'Aéreo'
    ]
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do Animal</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do animal" />
                <CampoTexto label="Espécie" placeholder="Digite a Espécie" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Habitat" itens= {Habitat}/>
            </form>
        </section>
    )
}

export default Formulario;