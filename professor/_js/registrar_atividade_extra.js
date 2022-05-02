function registrar(){
    atividade = document.getElementById('atividade').value;
    data = document.getElementById('data').value;
    aluno = document.getElementById('aluno').value;

    inserirLinhaTabela(atividade, data, aluno);
}

function inserirLinhaTabela(atividade, data, aluno) {

    // Captura a referência da tabela com id “minhaTabela”
    var table = document.getElementById("tabela_matricula");
    // Captura a quantidade de linhas já existentes na tabela
    var quantd_linhas = table.rows.length;
    // Insere uma linha no fim da tabela.
    var nova_linha = table.insertRow(quantd_linhas);

    coluna_atividade = nova_linha.insertCell(0);
    coluna_data = nova_linha.insertCell(1);
    coluna_aluno = nova_linha.insertCell(2);
    

    coluna_atividade.innerHTML = atividade;
    coluna_data.innerHTML = data;
    coluna_aluno.innerHTML = aluno;
    

    document.getElementById("botao_fechar").click();
    

    alert("Atividade extra agendada com sucesso!");
    
}