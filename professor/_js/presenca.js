function abrir_modal(id){
    $("#modalAprovacao").modal();
    var presente = document.getElementById("presente");
    presente.onclick = () => {
        confirmar_presenca(id);
    };

    var ausente = document.getElementById("ausente");
    ausente.onclick = () => {
        confirmar_ausencia(id);
    };
}


function confirmar_presenca(id_pai){
    let elementoFilho = document.getElementById(id_pai).children;
    coluna_status = elementoFilho[4];
    coluna_status.innerHTML = 'Sim';
    document.getElementById("botao_fechar").click();
}

function confirmar_ausencia(id_pai){
    let elementoFilho = document.getElementById(id_pai).children;
    coluna_status = elementoFilho[4];
    coluna_status.innerHTML = 'Não';
    document.getElementById("botao_fechar").click();
}

function base_dados(turma_id){

    localStorage.setItem("turma_id", turma_id);

    var requestURL = '/base_dados/aula.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var aulas = request.response;
        populate_presenca(aulas);
    }
}

function populate_presenca(jsonOBJ){
    var aulas = jsonOBJ['aulas'];

    //salvando a turma selecionada
    var turma_id = localStorage.getItem("turma_id");
    
    var aulas_da_turma = [];

    //filtrando apenas pelas matriculas da turma selecionada
    for(index in aulas){
        if(aulas[index].turma == turma_id){
            aulas_da_turma.push(aulas[index]);
          }
    }


    t_body = document.getElementById('t_body');

    //zerando a tabela
    t_body.innerHTML = '';

    //preenchendo a tabela com a turma correta
    for(index in aulas_da_turma){
        aula = '<tr id="' + aulas_da_turma[index].id + '"' + 'onclick="abrir_modal(this.id)"' + '>' + "<td>" + aulas_da_turma[index].turma + " </td>" +
        "<td>" + aulas_da_turma[index].aluno_nome + " </td>" +  
        "<td>" + aulas_da_turma[index].disciplina_nome + " </td>" + 
        "<td>" + aulas_da_turma[index].data + " </td>";
        if(aulas_da_turma[index].presenca == true){
            aula = aula + "<td>" + "Sim" + " </td>" + "</tr>";
        }
        else{
            aula = aula + "<td>" + "Não" + " </td>" + "</tr>";
        }
        t_body.insertAdjacentHTML('beforeend', aula);
    }
}