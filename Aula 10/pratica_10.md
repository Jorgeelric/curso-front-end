Aula 10 - Intro JS

# Projeto: Sistema Bancário — Banco InovaBank

O **InovaBank** está expandindo seus negócios e decidiu lançar
um serviço de banco digital. Você foi designado para criar
o sistema de gerenciamento de contas — versão console.

Rode o projeto no terminal do VSCode com: `node banco.js`
Ou utilize a extensão `Code Runner` para rodar o código diretamente no editor.

---

## Objetivos de Aprendizado

Ao final, você dominará:

- Declarar variáveis com `const` e `let`
- Trabalhar com tipos de dados (string, number, boolean)
- Usar template literals para formatar saídas
- Criar condicionais com `if`, `else if` e `else`
- Organizar código em funções reutilizáveis
- Usar o terminal para rodar e testar JS

---

## Conta Inicial

Toda conta começa com estas informações:

| Atributo      | Valor inicial     |
|---------------|-------------------|
| numeroConta   | '001'             |
| titular       | Seu nome          |
| saldo         | 1000              |
| contaAtiva    | true              |

---

## Desafios

### Desafio 1 — Exibir os dados da conta
Crie as variáveis da conta e exiba no console
uma apresentação formatada assim:

```
╔══════════════════════════╗
║     BANCO INOVAWEB       ║
╠══════════════════════════╣
║ Conta:    001            ║
║ Titular:  João Silva     ║
║ Saldo:    R$ 1000.00     ║
║ Status:   Ativa          ║
╚══════════════════════════╝
```

- [ ] Variáveis criadas com `const` e `let` corretamente
- [ ] Saldo formatado com 2 casas decimais (`.toFixed(2)`)
- [ ] Status exibe "Ativa" se `contaAtiva` for `true`,
      "Bloqueada" se for `false` — use um ternário

> **Dica de IA:** Peça ao Copilot para sugerir
> como formatar o saldo em reais com `.toFixed(2)`

---

### Desafio 2 — Função depositar()
Crie uma função que recebe um valor e realiza
o depósito na conta.

- [ ] Valida se o valor é maior que zero
- [ ] Atualiza o saldo
- [ ] Exibe mensagem de sucesso com o novo saldo
- [ ] Exibe mensagem de erro se o valor for inválido

**Teste obrigatório — rode essas chamadas:**
```javascript
depositar(500);   // saldo deve ir para 1500
depositar(-100);  // deve exibir erro
depositar(0);     // deve exibir erro
```

> **Dica de IA:** Descreva para o Copilot o que
> a função deve fazer e peça sugestões de validação.
> Entenda o código antes de aceitar!

---

### Desafio 3 — Função sacar()
Crie uma função que recebe um valor e realiza
o saque da conta.

- [ ] Valida se o valor é maior que zero
- [ ] Valida se há saldo suficiente
- [ ] Valida se a conta está ativa (`contaAtiva`)
- [ ] Atualiza o saldo se tudo estiver ok
- [ ] Exibe mensagem clara para cada situação

**Teste obrigatório — rode essas chamadas:**
```javascript
sacar(200);    // deve funcionar
sacar(9999);   // saldo insuficiente
sacar(-50);    // valor inválido
```

> **Dica:** Use `else if` para tratar cada
> condição separadamente. Cada erro tem
> uma mensagem diferente.

---

### Desafio 4 — Função verExtrato()
Crie uma função que exibe um resumo da conta.

- [ ] Exibe número da conta e titular
- [ ] Exibe o saldo atual formatado
- [ ] Exibe o status da conta
- [ ] A saída deve ser organizada e legível no console

**Saída esperada:**

```
══════════════════════════════
EXTRATO DA CONTA
══════════════════════════════
Conta:     001
Titular:   João Silva
Saldo:     R$ 1300.00
Status:    Ativa
══════════════════════════════
```

---

### Desafio 5 — Simulação completa
Ao final do arquivo, simule uma sequência
de operações chamando as funções em ordem:

```javascript
verExtrato();       // extrato inicial
depositar(500);     // depósito
depositar(-100);    // deve falhar
sacar(200);         // saque
sacar(10000);       // deve falhar
verExtrato();       // extrato final
```

- [ ] Todas as operações executam na ordem correta
- [ ] Os erros são tratados sem travar o programa
- [ ] O saldo final está matematicamente correto

---

## Desafio Extra — Conta Bloqueada

Adicione uma função `bloquearConta()` que:

- [ ] Muda `contaAtiva` para `false`
- [ ] Exibe uma mensagem de confirmação

E atualize as funções `depositar()` e `sacar()` para
verificar se a conta está ativa antes de qualquer operação.

**Teste:**
```javascript
bloquearConta();
depositar(100); // deve exibir: "Conta bloqueada. Operação negada."
sacar(100);     // deve exibir: "Conta bloqueada. Operação negada."
```

---

## Critérios de Entrega

| Critério | |
|---|---|
| Variáveis declaradas corretamente | ✅ |
| Funções `depositar()` e `sacar()` com validações | ✅ |
| Função `verExtrato()` formatada | ✅ |
| Simulação completa rodando sem erros | ✅ |
| Programa roda com `node banco.js` | ✅ |

---

## Dicas Gerais de IA

- Use o Copilot **um desafio por vez** — não cole
  o README inteiro
- Quando a IA gerar código, leia antes de aceitar.
  Se não entender uma linha, pergunte:
  *"O que essa linha faz?"*
- Se travar, descreva o problema em português
  para a IA: *"Quero verificar se o valor é maior
  que zero e se a conta está ativa"*
- Use `console.log()` para debugar — imprima
  variáveis no meio do código para ver o que está
  acontecendo
