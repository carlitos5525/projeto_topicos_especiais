function base_dados(){
    var requestURL = '/base_dados/matricula_atividade_extra.json';

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

    //chamando a base dos responsaveis para identificar qual é o aluno desse responsável
    base_dados2();

    //salvando o aluno do responsável
    var id_aluno = localStorage.getItem("id_aluno");
    
    var matri_atividades_do_aluno = [];
    
    //filtrando apenas pelas provas do usuario logado
    for(index in matriculas_atividades){
      if(matriculas_atividades[index].aluno_id == id_aluno){
           matri_atividades_do_aluno.push(matriculas_atividades[index]);
        }
    }
  
    
    t_body = document.getElementById('t_body');
    for(index in matri_atividades_do_aluno){
        matricula_da_atv = "<tr>" + "<td>" + matri_atividades_do_aluno[index].nome_atividade + " </td>" + 
        "<td>" + matri_atividades_do_aluno[index].turno + " </td>" + 
        "<td>" + matri_atividades_do_aluno[index].turma_atividade + " </td>" + 
         "</tr>";
        t_body.insertAdjacentHTML('beforeend', matricula_da_atv);
    }
}
//identificando o aluno do responsável logado
function base_dados2(){
    var requestURL = '/base_dados/responsavel.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();
    request.onload = function(){
        var responsaveis = request.response;
        identificar_aluno(responsaveis);
    }
    
}

function identificar_aluno(jsonOBJ){
    var responsaveis = jsonOBJ['responsaveis'];

    //pegando o id do usuario logado
    var id_usuario_logado = localStorage.getItem("id_usuario");
    
    for(index in responsaveis){
        //verificando qual é o aluno do responsável
        if(responsaveis[index].id_usuario == id_usuario_logado){
            id_aluno = responsaveis[index].aluno_id;
            //registrando o valor
            localStorage.setItem("id_aluno", id_aluno);
            break;
        }
    }
}