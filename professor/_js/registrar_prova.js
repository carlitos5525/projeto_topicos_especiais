function registrar(){
    turma = document.getElementById('turma').value;
    serie = document.getElementById('serie').value;
    disciplina = document.getElementById('disciplina').value;
    data = document.getElementById('data').value;

    inserirLinhaTabela(turma, serie, disciplina, data);
}

function inserirLinhaTabela(turma, serie, disciplina, data) {

    // Captura a referência da tabela com id “minhaTabela”
    var table = document.getElementById("tabela_matricula");
    // Captura a quantidade de linhas já existentes na tabela
    var quantd_linhas = table.rows.length;
    // Insere uma linha no fim da tabela.
    var nova_linha = table.insertRow(quantd_linhas);

    coluna_turma = nova_linha.insertCell(0);
    coluna_serie = nova_linha.insertCell(1);
    coluna_disciplina = nova_linha.insertCell(2);
    coluna_data = nova_linha.insertCell(3);
    
    coluna_turma.innerHTML = turma;
    coluna_serie.innerHTML = serie;
    coluna_disciplina.innerHTML = disciplina;
    coluna_data.innerHTML = data;
    

    document.getElementById("botao_fechar").click();
    

    alert("Prova agendada com sucesso!");
    
}