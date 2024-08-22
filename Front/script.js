const apiUrl = 'http://localhost:5196/api/Produtos';

async function getProdutos() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    document.getElementById('result').innerHTML = JSON.stringify(data, null, 2);
}

async function getProduto() {
    const id = document.getElementById('id').value;
    const response = await fetch(`${apiUrl}/${id}`);
    const data = await response.json();
    document.getElementById('result').innerHTML = JSON.stringify(data, null, 2);
}

async function postProduto() {
    const nome = document.getElementById('nome').value;
    const codigo = document.getElementById('codigo').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;

    const produto = { nome, codigo, descricao, preco };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produto)
    });

    const data = await response.json();
    document.getElementById('result').innerHTML = JSON.stringify(data, null, 2);
}

async function putProduto() {
    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const codigo = document.getElementById('codigo').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;

    const produto = { id, nome, codigo, descricao, preco };

    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(produto)
    });

    if (response.ok) {
        document.getElementById('result').innerHTML = 'Produto atualizado com sucesso!';
    } else {
        const data = await response.json();
        document.getElementById('result').innerHTML = JSON.stringify(data, null, 2);
    }
}

async function deleteProduto() {
    const id = document.getElementById('id').value;

    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.getElementById('result').innerHTML = 'Produto excluído com sucesso!';
    } else {
        const data = await response.json();
        document.getElementById('result').innerHTML = JSON.stringify(data, null, 2);
    }
}
