let itensCompra = [
  {
    id: 0,
    titulo: 'Caneca yoda baby',
    imagem: 'https://m.media-amazon.com/images/I/51jWQNDFfIL._AC_SL1000_.jpg',
    descricao:
      'Caneca do yoda baby de seramica com a frase “No coffee, no forcee”, 250 ml',
    preco: 'R$ 60,00',
    categoria: 'Caneca'
  },
  {
    id: 1,
    titulo: 'Camisa Developer',
    imagem: 'https://m.media-amazon.com/images/I/41sb2kVLViL._AC_SX466_.jpg',
    descricao: 'Camisa preta, escrita "Developer Sofware" tamanho: P',
    preco: 'R$ 60,00',
    categoria: 'Camisa'
  },
  {
    id: 2,
    titulo: 'Caneca Dev React JS',
    imagem: 'https://m.media-amazon.com/images/I/51rFNFrHTsS._AC_SX679_.jpg',
    descricao: 'Caneca de seramica preta com o simbolo React JS, 250 ml',
    preco: 'R$ 50,00',
    categoria: 'Caneca'
  },
  {
    id: 3,
    titulo: 'Caneca Front-End',
    imagem:
      'https://http2.mlstatic.com/D_NQ_NP_2X_982200-MLB46606648023_072021-F.webp',
    descricao:
      'Caneca de seramica preta, com os simbolos do JS, HTML e CSS, 250 ml',
    preco: 'R$ 50,00',
    categoria: 'Caneca'
  },
  {
    id: 4,
    titulo: 'Camisa Evolução Nerd',
    imagem:
      'https://http2.mlstatic.com/D_NQ_NP_2X_921988-MLB43913276895_102020-F.webp',
    descricao: 'Camisa branca, com a estampa da "evolução" nerd, tamanho G',
    preco: 'R$ 60,00',
    categoria: 'Camisa'
  },
  {
    id: 5,
    titulo: 'Cadeira Gamer Elite',
    imagem: 'https://m.media-amazon.com/images/I/51NkjMDdcDL._AC_SL1000_.jpg',
    descricao:
      'Cadeira Gamer Elite preta, dimensões: 80.5 x 80 x 40.5 cm; 15 Quilogramas',
    preco: 'R$ 50,00',
    categoria: 'Cadeira'
  },
  {
    id: 6,
    titulo: 'Camisa Algorithm',
    imagem: 'https://m.media-amazon.com/images/I/51SlDuTl1kL._AC_SX522_.jpg',
    descricao: 'Camisa preta, escrita "Algorithm", tamanho M',
    preco: 'R$ 55,00',
    categoria: 'Camisa'
  },
  {
    id: 7,
    titulo: 'Livro Padrões JavaScript',
    imagem:
      'https://images-na.ssl-images-amazon.com/images/I/51ZL3TV7D1L._SX360_BO1,204,203,200_.jpg',
    descricao:
      'Livro escrito pelo Stoyan Stefanov e publicado pela editora Novatec',
    preco: 'R$ 70,00',
    categoria: 'Livro'
  },
  {
    id: 8,
    titulo: 'Livro Aprendendo Node.js',
    imagem:
      'https://images-na.ssl-images-amazon.com/images/I/51wX6cd1iiL._SX357_BO1,204,203,200_.jpg',
    descricao:
      'Livro escrito pela Shelley Powers e publicado pela editora O Reilly Novatec',
    preco: 'R$ 70,00',
    categoria: 'Livro'
  },
  {
    id: 9,
    titulo: 'Cadeira Gamer Greatek',
    imagem:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVImrjpngtK75UHi16nibbLVlG9nJr9ri2RZ8wkj3zU5g4cK2cr9O51_Gr7SRqx2zRWstaBhaGNwYXoOIMeSn8l_ak2OwOVqnSY6JBoJBHaboXytEHetRT&usqp=CAE',
    descricao:
      'Cadeira gamer Greatek vermelha e petra, possui braços com ajustes de altura e encosto reclinável',
    preco: 'R$ 50,00',
    categoria: 'Cadeira'
  },
  {
    id: 10,
    titulo: 'Livro JavaScript: O Guia Definitivo',
    imagem:
      'https://images-na.ssl-images-amazon.com/images/I/41Mj94QmgtL._SX348_BO1,204,203,200_.jpg',
    descricao:
      'Livro escrito pela David Flanagan e publicado pela editora O Reilly Novatec',
    preco: 'R$ 70,00',
    categoria: 'Livro'
  }
]

let contador = itensCompra.length

function filtro(categoria = undefined) {
  let colecaoItens = document.getElementById('colecao-itens')
  colecaoItens.innerHTML = `
      <div class="lista-produtos">
          <ul class="lista">
            <h1>Produtos</h1>
            <li onclick='filtro("Cadeira")'>Cadeiras</li>
            <li onclick='filtro("Camisa")'>Camisas</li>
            <li onclick='filtro("Caneca")'>Canecas</li>
            <li onclick='filtro("Livro")'>Livros</li>
          </ul>
          <div class="botao-produtos">
            <button onclick="modalOn()" type="button" class="adc-novo-item">Adicionar novo item</button>
          </div>
        </div>`
  for (let n = 0; n < itensCompra.length; n = n + 1) {
    if (
      typeof categoria === 'undefined' ||
      itensCompra[n].categoria === categoria
    ) {
      colecaoItens.innerHTML =
        colecaoItens.innerHTML +
        `\n <section class="item" item-compra>
  <h2 titulo>${itensCompra[n].titulo}</h2>
  <div><img class="imagem" src="${itensCompra[n].imagem}" dimensao-img/></div>
  <p descricao> ${itensCompra[n].descricao}</p>
  <p preco> ${itensCompra[n].preco}</p>
  <div class="div-botao-adc-carrinho"><button id="test" class="botao-carrinho" botao-adc-carrinho>Adicionar ao carrinho</button></div>
  </section>`
    }
  }
}

filtro()

function adc() {
  let colecaoItens = document.getElementById('colecao-itens')
  {
    colecaoItens.innerHTML =
      colecaoItens.innerHTML +
      `\n <section class="item" item-compra>
<h2 titulo>${itensCompra[n].titulo}</h2>
<div><img class="imagem" src="${itensCompra[n].imagem}" dimensao-img/></div>
<p descricao> ${itensCompra[n].descricao}</p>
<p preco> ${itensCompra[n].preco}</p>
<div class="div-botao-adc-carrinho"><button id="test" class="botao-carrinho" botao-adc-carrinho>Adicionar ao carrinho</button></div>
</section>`
  }
}

// DARK MODE

function escuro() {
  let modoEscuro = document.getElementById('escuro')
  let trocarImagem = document.getElementById('imagem')
  let trocarSwi = document.getElementById('switch')
  let carrinhoV = document.getElementById('c-vitrini')

  if (modoEscuro.className === '') {
    modoEscuro.className = 'dark'
    trocarImagem.src = 'img/lua.svg'
    trocarImagem.alt = 'lua indica o modo escuro'
    trocarSwi.src = 'img/modo-escuro.svg'
    carrinhoV.src = './img/carrinho-p.svg'
  } else {
    modoEscuro.className = ''
    trocarImagem.src = 'img/sol.svg'
    trocarImagem.alt = 'sol indica o modo claro'
    trocarSwi.src = 'img/modo-claro.svg'
    carrinhoV.src = './img/carrinho.svg'
  }
}

// MODAL

function modalOn() {
  let meumodal = document.getElementById('meu-modal')

  if (typeof meumodal === 'undefined' || meumodal === null) return

  meumodal.style.display = 'Block'
}

let fechar = document.getElementById('fechar')

function modalOff() {
  let meumodal = document.getElementById('meu-modal')

  if (typeof meumodal === 'undefined' || meumodal === null) return

  meumodal.style.display = 'none'
}

// ADICIONAR NOVO ITEM

function adcItem() {
  let tituloModal = document.getElementById('titulo-m')
  let imagemModal = document.getElementById('imagem-m')
  let descricaoModal = document.getElementById('descricao-m')
  let precoModal = document.getElementById('preco-m')
  let categoriaModal = document.getElementById('selecao')

  itensCompra.push({
    id: contador++,
    titulo: tituloModal.value,
    imagem: imagemModal.value,
    descricao: descricaoModal.value,
    preco: 'R$ ' + precoModal.value,
    categoria: categoriaModal.value
  })

  filtro()
  modalOff()
}
