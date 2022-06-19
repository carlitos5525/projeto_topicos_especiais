function base_dados(){
    var requestURL = '/base_dados/atividade_extra.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var atividades = request.response;
        populate_atividades(atividades);
    }
}

function populate_atividades(jsonOBJ){
    var atividades = jsonOBJ['atividades'];

    //pegando o id do usuario logado
    var id_usuario_logado = localStorage.getItem("id_usuario");

    var atividades_do_usuario = [];
    
    //filtrando apenas pelas provas do usuario logado
    for(index in atividades){
        if(atividades[index].aluno_id == id_usuario_logado){
            atividades_do_usuario.push(atividades[index]);
        }
    }

    t_body = document.getElementById('t_body');

    for(index in atividades_do_usuario){
        atividade = "<tr>" + "<td>" + atividades_do_usuario[index].data + " </td>" + 
        "<td>" + atividades_do_usuario[index].nome_atividade + " </td>" + 
        "<td>" + atividades_do_usuario[index].nome_professor + " </td>";
        
        if(atividades_do_usuario[index].presenca == true){
            atividade = atividade + "<td>" + "Sim" + " </td>" + "</tr>";
        }
        else{
            atividade = atividade + "<td>" + "Não" + " </td>" + "</tr>";
        }
        
        t_body.insertAdjacentHTML('beforeend', atividade);
    }
}