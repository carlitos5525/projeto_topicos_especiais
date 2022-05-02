function registrar(){
    disciplina = document.getElementById('disciplina').value;
    data = document.getElementById('data').value;
    turma_escolhida = document.getElementById('turma_escolhida');
    turma = turma_escolhida.options[turma_escolhida.selectedIndex].text;
    conteudo = document.getElementById('conteudo').value;

    inserirLinhaTabela(disciplina, data, turma, conteudo);
}

function inserirLinhaTabela(disciplina, data, turma, conteudo) {

    // Captura a referência da tabela com id “minhaTabela”
    var table = document.getElementById("tabela_matricula");
    // Captura a quantidade de linhas já existentes na tabela
    var quantd_linhas = table.rows.length;
    // Insere uma linha no fim da tabela.
    var nova_linha = table.insertRow(quantd_linhas);

    coluna_disciplina = nova_linha.insertCell(0);
    coluna_data = nova_linha.insertCell(1);
    coluna_turma = nova_linha.insertCell(2);
    coluna_conteudo = nova_linha.insertCell(3);
    

    coluna_disciplina.innerHTML = disciplina;
    coluna_data.innerHTML = data;
    coluna_turma.innerHTML = turma;
    coluna_conteudo.innerHTML = conteudo;
    

    document.getElementById("botao_fechar").click();
    

    alert("Aula agendada com sucesso!");
    
}