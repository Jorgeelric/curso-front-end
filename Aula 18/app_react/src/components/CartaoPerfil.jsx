import './CartaoPerfil.css'

function CartaoPerfil({ nome, cargo, empresa, email, foto, habilidades, phone }) {
    return (
        <div className='cartao' >
            <img className='cartao-foto' src={foto || "https://static.vecteezy.com/ti/vetor-gratis/p1/24154342-sem-rosto-homem-desenho-animado-icone-dentro-linear-estilo-vetor.jpg"} alt={`Foto de ${nome}`} />
            <h2 className='cartao-nome'>{nome}</h2>
            <p className='cartao-cargo'>{cargo} da {empresa}</p>
            <p className='cartao-bio'>{email}</p>
            <p className='cartao-bio' >{phone}</p>
            <div className='habilidades'>
                {habilidades.map((item) => (
                    <div className='tag' key={item}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartaoPerfil 