function registrar(){
    aluno_escolhido = document.getElementById('aluno_escolhido');
    aluno = aluno_escolhido.options[aluno_escolhido.selectedIndex].text;
    nome_material = document.getElementById('nome_material').value;

    inserirLinhaTabela(aluno, nome_material);
}

function inserirLinhaTabela(aluno, nome_material) {

    // Captura a referência da tabela com id “minhaTabela”
    var table = document.getElementById("tabela_matricula");
    // Captura a quantidade de linhas já existentes na tabela
    var quantd_linhas = table.rows.length;
    // Insere uma linha no fim da tabela.
    var nova_linha = table.insertRow(quantd_linhas);

    coluna_aluno = nova_linha.insertCell(0);
    coluna_nome_material = nova_linha.insertCell(1);   

    coluna_aluno.innerHTML = aluno;
    coluna_nome_material.innerHTML = nome_material;
    

    document.getElementById("botao_fechar").click();
    

    alert("Material enviado com sucesso!");
    
}