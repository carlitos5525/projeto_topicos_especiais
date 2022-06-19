//função que vai abrir os dados do JSON e enviar para a outra função popular as inforções na tabela
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

    //criando a lista de atividades do usuário que está logado
    var atividades_do_usuario = [];
    
    //filtrando apenas pelas atividades do usuario logado
    for(index in atividades){
        if(atividades[index].aluno_id == id_usuario_logado){
            atividades_do_usuario.push(atividades[index]);
        }
    }

    t_body = document.getElementById('t_body');

    //populando as informações na tabela da página
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