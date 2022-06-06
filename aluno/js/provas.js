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

    t_body = document.getElementById('t_body');
    for(index in provas){
        prova = "<tr>" + "<td>" + provas[index].data + " </td>" + 
        "<td>" + provas[index].disciplinaId + " </td>" + 
        "<td>" + provas[index].professorID + " </td>" + 
        "<td>" + provas[index].nota + " </td>" + "</tr>";
        t_body.insertAdjacentHTML('beforeend', prova);
    }
}