// Carregando o site com todos os valores zerados
let valorTotal = 0;
limpar();

function adicionar() {
    //recuperarando valores: nome do produto, quantidade e valor 
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = parseFloat(produto.split('R$')[1]);
    let quantidade = document.getElementById('quantidade').value;

    //Faz a validação da variável produto
    if (!produto || produto.trim() === '') {
      alert('Insira um produto válido');
      return;
    };

    //Faz a validação da variável quantidade
    if (isNaN(quantidade) || quantidade <= 0) {
      alert('Insira um número válido');
      return;
    };

    // calculando o subtotal
    let preco = quantidade * valorProduto;

    //atualizando os produtos no carrinho
    let produtosCarrinho = document.getElementById('lista-produtos');
    produtosCarrinho.innerHTML = produtosCarrinho.innerHTML + (`<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`);

    // Calculando o valor total
    valorTotal = valorTotal + preco;
    let total = document.getElementById('valor-total');
    total.textContent =`R$${valorTotal}`;
    document.getElementById('quantidade').value = '';
    
};
// Limpa o carrinho de compras
function limpar () {
  valorTotal = 0
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
};
