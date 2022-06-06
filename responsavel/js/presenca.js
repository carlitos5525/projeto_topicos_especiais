function base_dados(){
    var requestURL = '/base_dados/aula.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var aulas = request.response;
        populate_aulas(aulas);
    }
}

function populate_aulas(jsonOBJ){
    var aulas = jsonOBJ['aulas'];

    //chamando a base dos responsaveis para identificar qual é o aluno desse responsável
    base_dados2();

    //salvando o aluno do responsável
    var id_aluno = localStorage.getItem("id_aluno");
    
    var aulas_do_aluno = [];
    
    //filtrando apenas pelas aulas do usuario logado
    for(index in aulas){
        if(aulas[index].aluno_id == id_aluno){
            aulas_do_aluno.push(aulas[index]);
        }
    }
  

    t_body = document.getElementById('t_body');
    for(index in aulas_do_aluno){
        aula = "<tr>" + "<td>" + aulas_do_aluno[index].data + " </td>" + 
        "<td>" + aulas_do_aluno[index].disciplina_id + " </td>" + 
        "<td>" + aulas_do_aluno[index].professor_id + " </td>";
        
        if(aulas_do_aluno[index].presenca == true){
            aula = aula + "<td>" + "Sim" + " </td>" + "</tr>";
        }
        else{
            aula = aula + "<td>" + "Não" + " </td>" + "</tr>";
        }
        
        t_body.insertAdjacentHTML('beforeend', aula);
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