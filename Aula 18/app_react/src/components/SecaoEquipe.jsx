import { useState, useEffect } from "react";
import CartaoPerfil from "./CartaoPerfil";

// Componente principal da seção de equipe
function SecaoEquipe() {

    // Estado que armazenará os funcionários vindos da API
    const [funcionarios, setFuncionarios] = useState([])

    // Estado responsável pelo texto digitado no input de busca
    const [busca, setBusca] = useState('')



    // useEffect executa quando o componente é carregado
    useEffect(() => {

        // Função assíncrona para buscar os dados da API
        async function fetchFuncionarios() {

            try {

                // Faz a requisição para a API
                const response = await fetch('https://jsonplaceholder.typicode.com/users')

                // Converte a resposta para JSON
                const equipe = await response.json()

                // Salva os dados no estado funcionarios
                setFuncionarios(equipe)

            } catch (error) {

                // Exibe erro caso a requisição falhe
                console.error('Erro ao buscar funcionários:', error)
            }
        }

        // Executa a função
        fetchFuncionarios()

    }, [])
    // [] significa que o useEffect roda apenas uma vez



    // Cria um novo array filtrando os funcionários
    const funcionariosFiltrados = funcionarios.filter(funcionario =>

        // Verifica se o nome do funcionário inclui o texto digitado
        funcionario.name
            .toLowerCase() // transforma em minúsculo
            .includes(
                busca.toLowerCase() // transforma a busca em minúsculo
            )
    )



    // Formata os dados para o componente CartaoPerfil
    const equipeFormatada = funcionariosFiltrados.map(funcionario => ({

        // Chave única para o React
        key: funcionario.id,

        // Nome do funcionário
        nome: funcionario.name,

        // Nome da empresa usado como cargo
        cargo: funcionario.company.name,

        // Email formatado
        email: `Email: ${funcionario.email}`,

        // Telefone formatado
        phone: `Telefone: ${funcionario.phone}`,

        // Array de habilidades fictícias
        habilidades: [
            'Habilidade 1',
            'Habilidade 2',
            'Habilidade 3'
        ],

        // Foto gerada dinamicamente
        foto: `https://i.pravatar.cc/150?img=${funcionario.id}`,
    }))



    // Renderização do componente
    return (

        <div className="filtro">

            {/* Campo de busca */}
            <input
                type="text"
                placeholder="Buscar funcionário..."
                
                // Valor atual do input
                value={busca}

                // Atualiza o estado sempre que digitar
                onChange={(e) => setBusca(e.target.value)}
            />



            {/* Container dos cards */}
            <div className='grade'>

                {/* Percorre todos os funcionários formatados */}
                {equipeFormatada.map(funcionario => (

                    // Renderiza um card para cada funcionário
                    <CartaoPerfil

                        // Key obrigatória no map
                        key={funcionario.key}

                        // Espalha todas as propriedades
                        {...funcionario}
                    />
                ))}

            </div>

        </div>
    )
}

// Exporta o componente
export default SecaoEquipe;