const apiUrl = "http://localhost:5196/api/produtos"; // Alterar conforme necessário

// Função para buscar e exibir os produtos
async function fetchProdutos() {
    const response = await fetch(apiUrl);
    const produtos = await response.json();
    const produtosList = document.getElementById('produtosList');
    produtosList.innerHTML = '';

    produtos.forEach(produto => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            <span>${produto.nome} - ${produto.descricao} - R$${produto.preco.toFixed(2)}</span>
            <button class="btn btn-danger btn-sm" onclick="deleteProduto(${produto.id})">Excluir</button>
        `;
        produtosList.appendChild(li);
    });
}

// Função para adicionar um novo produto
document.getElementById('produtoForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, descricao, preco })
    });

    if (response.ok) {
        fetchProdutos();
        document.getElementById('produtoForm').reset();
    } else {
        alert('Erro ao adicionar produto');
    }
});

// Função para excluir um produto
async function deleteProduto(id) {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        fetchProdutos();
    } else {
        alert('Erro ao excluir produto');
    }
}

// Carrega os produtos ao iniciar
//fetchProdutos();
