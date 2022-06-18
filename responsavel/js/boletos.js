function base_dados(){
    var requestURL = '/base_dados/boletos.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var boletos = request.response;
        populate_boletos(boletos);
    }
}

function populate_boletos(jsonOBJ){
    var boletos = jsonOBJ['boletos'];

    //chamando a base dos responsaveis para identificar qual é o aluno desse responsável
    base_dados2();

    //salvando o aluno do responsável
    var id_aluno = localStorage.getItem("id_aluno");
    
    var boletos_do_aluno = [];
    
    //filtrando apenas pelas provas do usuario logado
    for(index in boletos){
        if(boletos[index].aluno_id == id_aluno){
            boletos_do_aluno.push(boletos[index]);
        }
    }
  

    t_body = document.getElementById('t_body');
    for(index in boletos_do_aluno){
        boleto = "<tr>" + "<td>" + boletos_do_aluno[index].mensalidade + " </td>" + 
        "<td>" + boletos_do_aluno[index].data_vencimento + " </td>";
        if(boletos_do_aluno[index].pago == true){
            boleto = boleto + "<td>" + "Sim" + " </td>" +
            '<td><button class="btn btn-primary">Download </button>' +
             "</tr>";
        }
        else{
            boleto = boleto + "<td>" + "Não" + " </td>" + 
            '<td><button class="btn btn-primary">Download </button>' +"</tr>";
        }
        t_body.insertAdjacentHTML('beforeend', boleto);
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