import './CartaoPerfil.css'

function CartaoPerfil() {
    const habilidades = ['Coleta Forense', 'Extração de Mobile', 'Análise Forense']
    const nome = 'Jorge Gàlddino'
    const cargo = 'Perito Digital'
    const empresa = 'Deloitte'
    const bio = 'Jorge Gàlddino | Perito Computacional Forense e Assistente Técnico. Especialista em investigação digital, auditoria de sistemas e validação de provas eletrônicas para o meio judicial e corporativo.'
    return (
        <div className='cartao' >
            <img className='cartao-foto' src="https://static.vecteezy.com/ti/vetor-gratis/p1/24154342-sem-rosto-homem-desenho-animado-icone-dentro-linear-estilo-vetor.jpg" alt={`Foto de ${nome}`} />
            <h2 className='cartao-nome'>{nome}</h2>
            <p className='cartao-cargo'>{cargo} da {empresa}</p>
            <p className='cartao-bio'>{bio}</p>
            <h3 className='cartao-habilidades-titulo'>Habilidades</h3>
            <ul className='cartao-habilidades' >
                {habilidades.map((habilidades, index) => (
                    <li key={index} className='cartao-habilidades' >{habilidades}</li>
                ))}
            </ul>
        </div>
    )
}

export default CartaoPerfil 