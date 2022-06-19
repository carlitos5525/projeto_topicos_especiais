function registrar(){
    turma = document.getElementById('turma').value;
    aluno_escolhido = document.getElementById('aluno_escolhido');
    aluno = aluno_escolhido.options[aluno_escolhido.selectedIndex].text;
    disciplina = document.getElementById('disciplina').value;
    data = document.getElementById('data').value;
    nota = document.getElementById('nota').value;

    inserirLinhaTabela(turma, aluno, disciplina, data, nota);
}

function inserirLinhaTabela(turma, aluno, disciplina, data, nota) {

    // Captura a referência da tabela com id “minhaTabela”
    var table = document.getElementById("tabela_matricula");
    // Captura a quantidade de linhas já existentes na tabela
    var quantd_linhas = table.rows.length;
    // Insere uma linha no fim da tabela.
    var nova_linha = table.insertRow(quantd_linhas);

    coluna_turma = nova_linha.insertCell(0);
    coluna_aluno = nova_linha.insertCell(1);
    coluna_disciplina = nova_linha.insertCell(2);
    coluna_data = nova_linha.insertCell(3);
    coluna_nota = nova_linha.insertCell(4);

    coluna_turma.innerHTML = turma;
    coluna_aluno.innerHTML = aluno;
    coluna_disciplina.innerHTML = disciplina;
    coluna_data.innerHTML = data;
    coluna_nota.innerHTML = nota;
    

    document.getElementById("botao_fechar").click();    
}