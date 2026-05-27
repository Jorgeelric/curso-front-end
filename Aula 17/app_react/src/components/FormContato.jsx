import { useState } from "react";

function FormContato() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [enviado, setEnviado] = useState(false)
    const [caractere, setCaractere] = useState(0)

    function handleSubmit(e) {

        // preventDefault() impede o comportamento padrão do formulário.
        //
        // Normalmente, quando um formulário é enviado:
        // - a página recarrega
        // - os dados são enviados automaticamente
        //
        // No React geralmente NÃO queremos isso,
        // porque queremos controlar o envio manualmente
        // usando JavaScript.
        //
        // Então o preventDefault() "cancela" esse recarregamento.
        e.preventDefault()


        // Verifica se algum campo está vazio.
        //
        // O operador || significa "OU".
        //
        // Se nome, email ou mensagem estiverem vazios,
        // a condição será verdadeira.
        if (!nome || !email || !mensagem) {

            // Exibe um alerta para o usuário
            alert('Preencha todos os campos!')

            // return interrompe a execução da função.
            //
            // Ou seja:
            // o código para aqui e nada abaixo será executado.
            return
        }

        // Se todos os campos estiverem preenchidos,
        // o código continuaria aqui.
        setEnviado(true)
    }
    



    if (enviado) {
        return (
            <div>
                <h2>Mensagem enviada com sucesso</h2>
                <p>Obrigado por entrar em contato, {nome}!</p>
                <button onClick={() => {
                    setEnviado(false);
                    setNome('');
                    setEmail('');
                    setMensagem('');
                }}>
                    Enviar Mensagem Nova
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit}>

            <label>
                Nome:
                <input type="text" placeholder="Digite o seu nome" value={nome} onChange={e => setNome(e.target.value)} />
            </label>

            <label>
                Email:
                <input type="email" placeholder="Digite o seu e-mail" value={email} onChange={e => setEmail(e.target.value)} />
            </label>

            <label>
                Mensagem:
                <input
                    type="text"
                    placeholder="Digite a sua mensagem"
                    value={mensagem}

                    onChange={(e) => {
                        setMensagem(e.target.value)
                        setCaractere(e.target.value.length)
                    }}
                    maxLength={200}
                />
                <p>Caracteres: {caractere}</p>
            </label>

            <label>
                <button type="submit">Enviar</button>
            </label>

            <label>
                <button
                    type="reset"
                    onClick={() => {
                        setNome('')
                        setEmail('')
                        setMensagem('')
                    }}
                >
                    Limpar
                </button>
            </label>

        </form>
    )
}

export default FormContato;