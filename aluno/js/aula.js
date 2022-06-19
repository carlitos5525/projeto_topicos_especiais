//função que vai abrir os dados do JSON e enviar para a outra função popular as inforções na tabela

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

    //pegando o id do usuario logado
    var id_usuario_logado = localStorage.getItem("id_usuario");

    //criando a lista de aulas do usuário que está logado
    var aulas_do_usuario = [];
    
    //filtrando apenas pelas aulas do usuario logado
    for(index in aulas){
        if(aulas[index].aluno_id == id_usuario_logado){
            aulas_do_usuario.push(aulas[index]);
        }
    }

    t_body = document.getElementById('t_body');
    
    //populando as informações na tabela da página
    for(index in aulas_do_usuario){
        aula = "<tr>" + "<td>" + aulas_do_usuario[index].data + " </td>" + 
        "<td>" + aulas_do_usuario[index].disciplina_nome + " </td>" + 
        "<td>" + aulas_do_usuario[index].nome_professor + " </td>";
        
        if(aulas_do_usuario[index].presenca == true){
            aula = aula + "<td>" + "Sim" + " </td>" + "</tr>";
        }
        else{
            aula = aula + "<td>" + "Não" + " </td>" + "</tr>";
        }
        
        t_body.insertAdjacentHTML('beforeend', aula);
    }
}