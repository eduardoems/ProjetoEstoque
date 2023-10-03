function dataPadrao() {
    let data = document.getElementById("data");
    let dataAtual = new Date();
    let dataFormatada = dataAtual.toISOString().slice(0, 10);
    data.value = dataFormatada;
}

function validarProduto(event) {
    event.preventDefault()
    //obtendo os campos do formulario
    let nome = document.getElementById('nome').value;
    let classificacao = document.getElementById('classificacao').value;
    let qtd = document.getElementById('qtd').value;
    let data = document.getElementById('data').value;
    let EntMov = document.getElementById('EntMov').checked;

    let tipoMovimento // verificação pra saber se o produto é entrada
    if (EntMov) {
        tipoMovimento = 'entrada'
    } else {
        tipoMovimento = 'saida'
    }

    let produto = {
        nome: nome, classificacao: classificacao, qtd: qtd, data: data, tipoMovimento: tipoMovimento
    }
    let produtos = JSON.parse(localStorage.getItem('produtos')) || []
    //adicionando o produto ao array de produtos.   
    produtos.push(produto)  // metodo push adiciona no fim do array
    // salva a lista atualizada no localstorage
    localStorage.setItem('produtos', JSON.stringify(produtos))
    //Redireciona para o Estoque
    alert('Movimento salvo com sucesso!✔')
    window.location.href = '/estoque.html'


}
function listarProdutos() { //função 

    produtos = JSON.parse(localStorage.getItem('produtos')) || []
    //obtendo onde iremos inserir a tela
    let tabela = document.getElementById('listagem')
    tabela.innerHTML = '' //limpamos a tabela'
    //criamos uma tabela como o html
    let table = document.createElement('table')
    table.className = 'table table-bordered'
    table.innerHTML = `<thead>
                         <tr class = 'labelLista'> 
                            <th> produtos </th> 
                            <th> clasificacao </th>
                            <th> qtd </th>
                            <th> data </th>
                            <th> movimentação </th>                                                      
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                        `

    //preenchendo a tabela com os dados dos produtos
    let tbody = table.querySelector('tbody')
    for (let i = 0; i < qtd.length; i++) {
        let qtd = qtd[i];
        let row = tbody.insertRow(i)
        row.innerHTML = `                 
                            <td> ${produto.produtos}        </td>
                            <td> ${produto.clasificacao}    </td>
                            <td> ${produto.qtd}             </td>
                            <td> ${produto.data}            </td> 
                            <td> ${produto.labelCheckEnt}   </td>
                            <td> ${produto.labelCheckSai}   </td>
                            <td><button class='btn btn-danger' onclick="apagarCampos('${produto.produtos}')">Apagar</button></td>
    `
    }

    tabela.appendChild(table)
}



