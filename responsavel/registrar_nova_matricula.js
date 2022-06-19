function matricular(){
    atividade_escolhida = document.getElementById('atividade_escolhida');
    var disciplina = atividade_escolhida.options[atividade_escolhida.selectedIndex].text;

    turno_escolhido = document.getElementById('turno_escolhido');
    var turno = turno_escolhido.options[turno_escolhido.selectedIndex].text;

    inserirLinhaTabela(disciplina, turno);
}

function inserirLinhaTabela(disciplina, turno) {

    // Captura a referência da tabela com id “minhaTabela”
    var table = document.getElementById("tabela_matricula");
    // Captura a quantidade de linhas já existentes na tabela
    var quantd_linhas = table.rows.length;
    // Insere uma linha no fim da tabela.
    var nova_linha = table.insertRow(quantd_linhas);

    coluna_disciplina = nova_linha.insertCell(0);
    coluna_turno = nova_linha.insertCell(1);
    coluna_turma = nova_linha.insertCell(2);
    

    coluna_disciplina.innerHTML = disciplina;
    coluna_turno.innerHTML = turno;
    coluna_turma.innerHTML = '1';
    

    document.getElementById("botao_fechar").click();
    

    alert("Matrícula realizada com sucesso!");
    
}

function matricular_ano_letivo(){
    
    serie_escolhida = document.getElementById('serie_escolhida');
    var serie = serie_escolhida.options[serie_escolhida.selectedIndex].text;

    turno_escolhido = document.getElementById('turno_escolhido');
    var turno = turno_escolhido.options[turno_escolhido.selectedIndex].text;

    nome_aluno = document.getElementById('nome_aluno').value;

    inserirLinhaTabelaAnoLetivo(serie, turno, nome_aluno);
    
}

function inserirLinhaTabelaAnoLetivo(serie, turno, nome_aluno){
    // Captura a referência da tabela com id “minhaTabela”
    var table = document.getElementById("tabela_ano_letivo");
    // Captura a quantidade de linhas já existentes na tabela
    var quantd_linhas = table.rows.length;
    // Insere uma linha no fim da tabela.
    var nova_linha = table.insertRow(quantd_linhas);

    coluna_ano = nova_linha.insertCell(0);
    coluna_aluno = nova_linha.insertCell(1);
    coluna_turma = nova_linha.insertCell(2);
    coluna_turno = nova_linha.insertCell(3);
    coluna_serie = nova_linha.insertCell(4);

    coluna_ano.innerHTML = '2023';
    coluna_aluno.innerHTML = nome_aluno;
    coluna_turma.innerHTML = "1"
    coluna_turno.innerHTML = turno;
    coluna_serie.innerHTML = serie;

    document.getElementById("botao_fechar").click();
    

    alert("Matrícula realizada com sucesso!");
}