function registrar(){
    disciplina = document.getElementById('disciplina').value;

    data = document.getElementById('data').value;

    inserirLinhaTabela(disciplina, data);
}

function inserirLinhaTabela(disciplina, data) {

    // Captura a referência da tabela com id “minhaTabela”
    var table = document.getElementById("tabela_matricula");
    // Captura a quantidade de linhas já existentes na tabela
    var quantd_linhas = table.rows.length;
    // Insere uma linha no fim da tabela.
    var nova_linha = table.insertRow(quantd_linhas);

    coluna_disciplina = nova_linha.insertCell(0);
    coluna_data = nova_linha.insertCell(1);
    

    coluna_disciplina.innerHTML = disciplina;
    coluna_data.innerHTML = data;
    

    document.getElementById("botao_fechar").click();
    

    alert("Prova agendada com sucesso!");
    
}