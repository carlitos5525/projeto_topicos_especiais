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