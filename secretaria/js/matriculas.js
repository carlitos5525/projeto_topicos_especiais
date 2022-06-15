function base_dados(turma_id){

    localStorage.setItem("turma_id", turma_id);

    var requestURL = '/base_dados/matricula_ano_letivo.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var matriculas_ano_letivo = request.response;
        populate_matriculas_ano_letivo(matriculas_ano_letivo);
    }
}

function populate_matriculas_ano_letivo(jsonOBJ){
    var matriculas_ano_letivo = jsonOBJ['matriculas_ano_letivo'];

    //salvando a turma selecionada
    var turma_id = localStorage.getItem("turma_id");
    
    var matriculas_da_turma = [];

    //filtrando apenas pelas matriculas da turma selecionada
    for(index in matriculas_ano_letivo){
        if(matriculas_ano_letivo[index].turma == turma_id){
            matriculas_da_turma.push(matriculas_ano_letivo[index]);
          }
    }


    t_body = document.getElementById('t_body');

    //zerando a tabela
    t_body.innerHTML = '';

    //preenchendo a tabela com a turma correta
    for(index in matriculas_da_turma){
        matricula = "<tr>" + "<td>" + matriculas_da_turma[index].turma + " </td>" +
        "<td>" + matriculas_da_turma[index].aluno_nome + " </td>" + 
        "<td>" + matriculas_da_turma[index].turno + " </td>" + 
        "<td>" + matriculas_da_turma[index].ano_letivo + " </td>" + 
        "<td>" + matriculas_da_turma[index].ano + " </td>" + "</tr>";
        t_body.insertAdjacentHTML('beforeend', matricula);
    }
}