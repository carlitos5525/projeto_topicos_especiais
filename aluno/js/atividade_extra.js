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

    t_body = document.getElementById('t_body');
    for(index in atividades){
        atividade = "<tr>" + "<td>" + atividades[index].data + " </td>" + 
        "<td>" + atividades[index].nome_atividade + " </td>" + 
        "<td>" + atividades[index].professor_id + " </td>";
        
        if(atividades[index].presenca == true){
            atividade = atividade + "<td>" + "Sim" + " </td>" + "</tr>";
        }
        else{
            atividade = atividade + "<td>" + "Não" + " </td>" + "</tr>";
        }
        
        t_body.insertAdjacentHTML('beforeend', atividade);
    }
}