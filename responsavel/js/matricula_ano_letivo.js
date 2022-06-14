function base_dados(){
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

    //chamando a base dos responsaveis para identificar qual é o aluno desse responsável
    base_dados2();

    //salvando o aluno do responsável
    var id_aluno = localStorage.getItem("id_aluno");
    
    var matriculas_do_aluno = [];
    
    //filtrando apenas pelas provas do usuario logado
    for(index in matriculas_ano_letivo){
      if(matriculas_ano_letivo[index].aluno_id == id_aluno){
        matriculas_do_aluno.push(matriculas_ano_letivo[index]);
        }
    }
  
    
    t_body = document.getElementById('t_body');
    for(index in matriculas_do_aluno){
        matricula_da_atv = "<tr>" + "<td>" + matriculas_do_aluno[index].ano + " </td>" + 
        "<td>" + matriculas_do_aluno[index].aluno_nome + " </td>" + 
        "<td>" + matriculas_do_aluno[index].turma + " </td>" + 
        "<td>" + matriculas_do_aluno[index].turno + " </td>" + 
        "<td>" + matriculas_do_aluno[index].ano_letivo + " </td>" +  "</tr>";
        t_body.insertAdjacentHTML('beforeend', matricula_da_atv);
    }
}

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