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

    //pegando o id do usuario logado
    var id_usuario_logado = localStorage.getItem("id_usuario");

    var provas_do_usuario = [];
    
    //filtrando apenas pelas provas do usuario logado
    for(index in provas){
        if(provas[index].alunoID == id_usuario_logado){
            provas_do_usuario.push(provas[index]);
        }
    }

    t_body = document.getElementById('t_body');
    for(index in provas_do_usuario){
        prova = "<tr>" + "<td>" + provas_do_usuario[index].data + " </td>" + 
        "<td>" + provas_do_usuario[index].disciplinaId + " </td>" + 
        "<td>" + provas_do_usuario[index].professorID + " </td>" + 
        "<td>" + provas_do_usuario[index].nota + " </td>" + "</tr>";
        t_body.insertAdjacentHTML('beforeend', prova);
    }
}