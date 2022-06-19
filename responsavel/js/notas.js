function base_dados(){
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

    //chamando a base dos responsaveis para identificar qual é o aluno desse responsável
    base_dados2();

    //salvando o aluno do responsável
    var id_aluno = localStorage.getItem("id_aluno");
    
    var provas_do_aluno = [];
    
    //filtrando apenas pelas provas realizadas do usuario logado
    for(index in provas){
        if(provas[index].alunoID == id_aluno){
            if(provas[index].realizada == true){
                provas_do_aluno.push(provas[index]);
            }
        }
    }
  

    t_body = document.getElementById('t_body');
    for(index in provas_do_aluno){
        prova = "<tr>" + "<td>" + provas_do_aluno[index].nome_disciplina + " </td>" + 
        "<td>" + provas_do_aluno[index].nome_professor + " </td>" + 
        "<td>" + provas_do_aluno[index].data + " </td>" + 
        "<td>" + provas_do_aluno[index].nota + " </td>" + "</tr>";
        t_body.insertAdjacentHTML('beforeend', prova);
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