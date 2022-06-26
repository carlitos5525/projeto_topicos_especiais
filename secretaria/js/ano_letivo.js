function base_dados(turma_id){

    localStorage.setItem("turma_id", turma_id);

    var requestURL = '/base_dados/matricula_ano_letivo.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var matriculas = request.response;
        populate_matriculas(matriculas);
    }
}

function populate_matriculas(jsonOBJ){
    var matriculas = jsonOBJ['matriculas_ano_letivo'];


    //salvando a turma selecionada
    var turma_id = localStorage.getItem("turma_id");
    
    var matriculas_da_turma = [];

    //filtrando apenas pelas matriculas da turma selecionada
    for(index in matriculas){
        if(matriculas[index].turma == turma_id){
            matriculas_da_turma.push(matriculas[index]);
          }
    }

    t_body = document.getElementById('t_body');

    //zerando a tabela
    t_body.innerHTML = '';

    //preenchendo a tabela com a turma correta
    for(index in matriculas_da_turma){
        matricula = "<tr>" + "<td>" + "Turma " + matriculas_da_turma[index].turma + " </td>" +
        "<td>" + matriculas_da_turma[index].aluno_nome + " </td>" +  
        "<td>" +  matriculas_da_turma[index].ano_letivo + " </td>";

        if(matriculas_da_turma[index].status == true){
            matricula = matricula + "<td>" + "Sim" + " </td>" + "</tr>";
        }
        else{
            matricula = matricula + "<td>" + "Não" + " </td>" + "</tr>";
        }
        t_body.insertAdjacentHTML('beforeend', matricula);
    }
}