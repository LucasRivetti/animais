import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {

    const Habitat = [
        'Terreste',
        'Aquático',
        'Aéreo'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        //utilizado para a pagina nao recarregar, ele nao vai realizar o comportamento padrao dele
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Animal</h2>
                <CampoTexto obrigatorio={true}label="Nome" placeholder="Digite o nome do animal" />
                <CampoTexto obrigatorio={true} label="Espécie" placeholder="Digite a Espécie" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Habitat" itens={Habitat} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;