function listarProdutos() {
    produtos = JSON.parse(localStorage.getItem('produtos')) || []
    //obtendo onde iremos inserir a tela
    let tabela = document.getElementById('listagem')
    tabela.innerHTML = '' //limpamos a tabela'
    //criamos uma tabela como o html
    let table = document.createElement('table')
    table.className = 'table table-bordered'
    table.innerHTML = `<thead>
                         <tr class = 'table-success'> 
                            <th> Produtos </th> 
                            <th> Clasificação </th>
                            <th> Quantidade </th>
                            <th> Data </th>
                            <th> Movimentação </th> 
                            <th> Excluir</th>                                                       
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                        `

    //preenchendo a tabela com os dados do produto
    let tbody = table.querySelector('tbody')
    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];
        let row = tbody.insertRow(i)
        row.innerHTML = `                 
                            <td> ${produto.nome}        </td>
                            <td> ${produto.classificacao}    </td>
                            <td> ${produto.qtd}             </td>
                            <td> ${produto.data}            </td> 
                            <td> ${produto.tipoMovimento}   </td>                            
                            <td><button class='btn btn-danger' onclick='apagarCampos(${JSON.stringify(produto)})'>Apagar</button></td>
    `
    }

    tabela.appendChild(table)
}


function apagarCampos(produto) {
    let produtos = JSON.parse(localStorage.getItem('produtos')) || []

    //filtramos a lista de produtos para remover 
    produtos = produtos.filter(function (item) {
        return item.nome !== produto.nome
    })    
    localStorage.removeItem('produtos');
    //atualizar o localstorage com a nova lista de de produtos
    localStorage.setItem('produtos', JSON.stringify(produtos))
    listarProdutos()
}
