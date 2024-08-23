function submitForm() {
    // Coleta os valores do formulário
    const produto = {
        id: document.getElementById('id').value,
        nome: document.getElementById('nome').value,
        descricao: document.getElementById('descricao').value,
        preco: parseFloat(document.getElementById('preco').value)
    };

    atualizarProduto(produto);
}

function atualizarProduto(produto) {
    const url = "http://localhost:5196/api/Produtos/" + produto.id;

    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
    })
    .then(response => {
        if (response.ok) {
            alert("Produto atualizado com sucesso!");
        } else {
            alert("Erro ao atualizar o produto.");
        }
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Ocorreu um erro ao atualizar o produto.");
    });
}

