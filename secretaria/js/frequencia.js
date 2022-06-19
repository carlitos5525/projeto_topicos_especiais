
function base_dados(turma_id){

    localStorage.setItem("turma_id", turma_id);

    var requestURL = '/base_dados/aula.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var aulas = request.response;
        populate_frequencia(aulas);
    }
}

function populate_frequencia(jsonOBJ){
    var aulas = jsonOBJ['aulas'];


    //salvando a turma selecionada
    var turma_id = localStorage.getItem("turma_id");
    
    var aulas_da_turma = [];

    //filtrando apenas pelas aulas da turma selecionada
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
        aula = "<tr>" + "<td>" + aulas_da_turma[index].turma + " </td>" +
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