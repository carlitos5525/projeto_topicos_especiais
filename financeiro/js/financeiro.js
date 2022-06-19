function base_dados(id_aluno){
    var requestURL = '/base_dados/matricula_atividade_extra.json';

    //salvando o id do aluno a ser buscado
    localStorage.setItem("id_aluno_financeiro", id_aluno);

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var matriculas_atividades = request.response;
        populate_matriculas_atividades(matriculas_atividades);
    }
}

function populate_matriculas_atividades(jsonOBJ){
    var matriculas_atividades = jsonOBJ['matriculas_atividades'];

    //salvando o aluno a ser procurado
    var id_aluno = localStorage.getItem("id_aluno_financeiro");
    
    var matri_atividades_do_aluno = [];
    
    //filtrando apenas pelas atividades do aluno
    for(index in matriculas_atividades){
      if(matriculas_atividades[index].aluno_id == id_aluno){
           matri_atividades_do_aluno.push(matriculas_atividades[index]);
        }
    }
    
    t_body = document.getElementById('t_body');

    t_body.innerHTML = '';
    for(index in matri_atividades_do_aluno){
        matricula_da_atv = "<tr>" + "<td>" + matri_atividades_do_aluno[index].nome_aluno + " </td>" + 
        "<td>" + matri_atividades_do_aluno[index].nome_atividade + " </td>" + 
         "</tr>";
        t_body.insertAdjacentHTML('beforeend', matricula_da_atv);
    }
}