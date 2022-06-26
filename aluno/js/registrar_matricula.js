function matricular(){
    atividade_escolhida = document.getElementById('atividade_escolhida');
    var disciplina = atividade_escolhida.options[atividade_escolhida.selectedIndex].text;

    turno_escolhido = document.getElementById('turno_escolhido');
    var turno = turno_escolhido.options[turno_escolhido.selectedIndex].text;

    turma_escolhida = document.getElementById('turma_escolhida');
    var turma = turma_escolhida.options[turma_escolhida.selectedIndex].text;

    inserirLinhaTabela(disciplina, turno, turma);
}

function inserirLinhaTabela(disciplina, turno, turma) {

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
    coluna_turma.innerHTML = turma;

    

    document.getElementById("botao_fechar").click();
    

    alert("Matrícula realizada com sucesso!");
    
}

function base_dados(){
    var requestURL = '/base_dados/matricula_atividade_extra.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var atividades = request.response;
        populate_matriculas(atividades);
    }
}

function populate_matriculas(jsonOBJ){
    var matriculas = jsonOBJ['matriculas_atividades'];

    //pegando o id do usuario logado
    var id_usuario_logado = localStorage.getItem("id_usuario");

    var matriculas_do_usuario = [];
    
    //filtrando apenas pelas provas do usuario logado
    for(index in matriculas){
        if(matriculas[index].aluno_id == id_usuario_logado){
            matriculas_do_usuario.push(matriculas[index]);
        }
    }

    t_body = document.getElementById('t_body');
    //mostrando as matriculas na tela
    for(index in matriculas_do_usuario){
        matricula = "<tr>" + "<td>" + matriculas_do_usuario[index].nome_atividade + " </td>" + 
        "<td>" + "Turma " + matriculas_do_usuario[index].turma_atividade + " </td>" + 
        "<td>" + matriculas_do_usuario[index].turno + " </td>" + "</tr>";
        
        
        t_body.insertAdjacentHTML('beforeend', matricula);
    }
}