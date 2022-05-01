function matricular(){
    atividade_escolhida = document.getElementById('atividade_escolhida');
    var disciplina = atividade_escolhida.options[atividade_escolhida.selectedIndex].text;

    professor_escolhido = document.getElementById('professor_escolhido');
    var professor = professor_escolhido.options[professor_escolhido.selectedIndex].text;

    inserirLinhaTabela(disciplina, professor);
}

function inserirLinhaTabela(disciplina, professor) {

    // Captura a referência da tabela com id “minhaTabela”
    var table = document.getElementById("tabela_matricula");
    // Captura a quantidade de linhas já existentes na tabela
    var quantd_linhas = table.rows.length;
    // Insere uma linha no fim da tabela.
    var nova_linha = table.insertRow(quantd_linhas);

    coluna_disciplina = nova_linha.insertCell(0);
    coluna_professor = nova_linha.insertCell(1);
    coluna_data_inicio = nova_linha.insertCell(2);
    coluna_data_termino = nova_linha.insertCell(3);

    coluna_disciplina.innerHTML = disciplina;
    coluna_professor.innerHTML = professor;
    coluna_data_inicio.innerHTML = '10/02/2022';
    coluna_data_termino.innerHTML = '27/11/2022';

    document.getElementById("botao_fechar").click();
    

    alert("Matrícula realizada com sucesso!");
    
}

function matricular_ano_letivo(){
    
    serie_escolhida = document.getElementById('serie_escolhida');
    var serie = serie_escolhida.options[serie_escolhida.selectedIndex].text;

    turno_escolhido = document.getElementById('turno_escolhido');
    var turno = turno_escolhido.options[turno_escolhido.selectedIndex].text;

    inserirLinhaTabelaAnoLetivo(serie, turno);
    
}

function inserirLinhaTabelaAnoLetivo(serie, turno){
    // Captura a referência da tabela com id “minhaTabela”
    var table = document.getElementById("tabela_ano_letivo");
    // Captura a quantidade de linhas já existentes na tabela
    var quantd_linhas = table.rows.length;
    // Insere uma linha no fim da tabela.
    var nova_linha = table.insertRow(quantd_linhas);

    coluna_ano = nova_linha.insertCell(0);
    coluna_aluno = nova_linha.insertCell(1);
    coluna_turno = nova_linha.insertCell(2);
    coluna_serie = nova_linha.insertCell(3);

    coluna_ano.innerHTML = '2022';
    coluna_aluno.innerHTML = 'Aluno do Responsável';
    coluna_turno.innerHTML = turno;
    coluna_serie.innerHTML = serie;

    document.getElementById("botao_fechar").click();
    

    alert("Matrícula realizada com sucesso!");
}