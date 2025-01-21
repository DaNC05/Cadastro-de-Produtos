document.getElementById('produtoForm').addEventListener('submit', function(event){
    event.preventDefault();
 // Pegando os valores dos inputs
 const nome = document.getElementById('nome').value
 const preco = document.getElementById('valor').value
 const descricao = document.getElementById('descricao').value
 const dispo = document.querySelector('input[name="option"]:checked').value;

//Adicionando valores na tabela
const tbody = document.querySelector('tbody');
const novaLinha = document.createElement('tr');
novaLinha.innerHTML = `
   <td>${nome}</td>
   <td>${descricao}</td>
   <td> R$ ${parseFloat(preco).toFixed(2)} </td>
   <td>${dispo}</td>
   <td> <button class="excluir value="Excluir"> Excluir </button>
`;

tbody.appendChild(novaLinha);

atualizarTotalProduto();


// Atualiza o total de produtos
function atualizarTotalProduto(){
 const tbody = document.querySelector('tbody')
  const totalProduto = document.getElementById('totalProduto');
  totalProduto.textContent = tbody.children.length;

}

//Reseta o Formulário
document.getElementById('produtoForm').reset();

// Excluir Produto
document.querySelector('table tbody').addEventListener("click", function(event){
    if (event.target.classList.contains("excluir")) {
       const linha = event.target.closest('tr') ;
       linha.remove()
       atualizarTotalProduto();
  }   
})

})
   