function base_dados(turma_id){

    localStorage.setItem("turma_id", turma_id);

    var requestURL = '/base_dados/provas.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var provas = request.response;
        populate_provas(provas);
    }
}

function populate_provas(jsonOBJ){
    var provas = jsonOBJ['provas'];

    //salvando a turma selecionada
    var turma_id = localStorage.getItem("turma_id");
    
    var provas_da_turma = [];

    //filtrando apenas pelas matriculas da turma selecionada
    for(index in provas){
        if(provas[index].turma == turma_id){
            provas_da_turma.push(provas[index]);
          }
    }


    t_body = document.getElementById('t_body');

    //zerando a tabela
    t_body.innerHTML = '';

    //preenchendo a tabela com a turma correta
    for(index in provas_da_turma){
        prova = "<tr>" + "<td>" + provas_da_turma[index].turma + " </td>" +
        "<td>" + provas_da_turma[index].aluno_nome + " </td>" +  
        "<td>" + provas_da_turma[index].nome_disciplina + " </td>" + 
        "<td>" + provas_da_turma[index].data + " </td>" + 
        "<td>" + provas_da_turma[index].nota + " </td>" + "</tr>";
        t_body.insertAdjacentHTML('beforeend', prova);
    }
}