# Exercicio de Casa — Aula 8 -> 9
**Programador Front-End · Senac RJ**

---

## Contexto

Na aula passada você construiu páginas para a InovaWeb. Desta vez, você é o cliente.

Escolha um tema que te interessa — pode ser um negócio fictício, um hobbie, um clube, uma banda, um restaurante, qualquer coisa. Crie uma página de apresentação sobre esse tema aplicando as técnicas vistas na Aula 8 e anteriores.

---

## Requisitos

### 1. Layout em grid responsivo

Crie uma seção com pelo menos 3 itens (produtos, servicos, categorias, membros — o que fizer sentido pro seu tema) organizados em colunas responsivas.

O comportamento esperado:

| Dispositivo | Colunas |
|-------------|---------|
| Mobile      | 1       |
| Tablet      | 2       |
| Desktop     | 3       |

Use `col-12 col-md-6 col-lg-4` em cada item.

- [ ] Estrutura `.container > .row > .col-12.col-md-6.col-lg-4` presente
- [ ] Pelo menos 3 itens no grid
- [ ] Cada item tem título, texto curto e um botão

---

### 2. Imagem com figura e legenda

Adicione uma imagem representativa do seu tema usando a estrutura semântica correta.

```html
<figure class="mb-4">
  <img src="sua-imagem.jpg"
       class="img-fluid rounded"
       alt="Descricao da imagem">
  <figcaption class="text-muted text-center mt-2">
    Legenda da imagem
  </figcaption>
</figure>
```

Sem imagem própria? Use `https://placehold.co/800x300?text=SeuTema` como `src`.

- [ ] Imagem com `img-fluid`
- [ ] `<figure>` e `<figcaption>` utilizados
- [ ] Imagem não transborda no mobile

---

### 3. Tabela responsiva

Crie uma tabela que faça sentido pro seu tema. Exemplos: tabela de preços, programaçao de eventos, lista de integrantes com funções, comparativo de planos.

```html
<div class="table-responsive">
  <table class="table table-striped table-hover">
    <thead class="table-dark">
      <tr>
        <th>Coluna 1</th>
        <th>Coluna 2</th>
        <th>Coluna 3</th>
      </tr>
    </thead>
    <tbody>
      <!-- suas linhas -->
    </tbody>
  </table>
</div>
```

- [ ] `<div class="table-responsive">` envolvendo a tabela
- [ ] Classes `.table .table-striped .table-hover` na `<table>`
- [ ] `.table-dark` no `<thead>`
- [ ] Tabela rola no mobile sem quebrar o layout

---

### 4. BONUS — Icones Bootstrap Icons

Inclua o CDN abaixo no `<head>` e adicione um icone em cada item do grid.

```html
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

<!-- Exemplo de uso -->
<i class="bi bi-star fs-2 text-warning"></i>
```

Explore os ícones disponíveis em: https://icons.getbootstrap.com

- [ ] CDN adicionado no `<head>`
- [ ] Pelo menos 1 icone por item do grid
- [ ] Tamanho ajustado com `fs-1`, `fs-2` ou similar

---

## Usando IA no exercício

O GitHub Copilot pode te ajudar, mas com critério:

- Pode pedir sugestão de classe Bootstrap quando travar
- Pode pedir explicação do que uma classe faz
- Evite pedir para gerar a pagina inteira — você perde o aprendizado

Exemplo de prompt útil: *"Meu grid está ficando em coluna unica no desktop. Aqui está meu código: [cole teu codiguin aqui]. ONDE RAIOS EU ERREI ESSA BAGAÇA???"*

---

## Referências



**- Bootstrap:** https://getbootstrap.com/

**- W3 Schools:** https://www.w3schools.com/

**- Bootstrap Icons:** https://icons.getbootstrap.com/
