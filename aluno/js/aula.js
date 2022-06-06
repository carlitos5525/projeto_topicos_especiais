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

    t_body = document.getElementById('t_body');
    for(index in aulas){
        aula = "<tr>" + "<td>" + aulas[index].data + " </td>" + 
        "<td>" + aulas[index].disciplina_id + " </td>" + 
        "<td>" + aulas[index].professor_id + " </td>";
        
        if(aulas[index].presenca == true){
            aula = aula + "<td>" + "Sim" + " </td>" + "</tr>";
        }
        else{
            aula = aula + "<td>" + "Não" + " </td>" + "</tr>";
        }
        
        t_body.insertAdjacentHTML('beforeend', aula);
    }
}