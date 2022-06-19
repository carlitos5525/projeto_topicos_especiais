function abrir_modal(id){
    $("#modalAprovacao").modal();
    var confirmado = document.getElementById("confirmar");
    confirmado.onclick = () => {
        confirmar_matricula(id);
    };

    var recusado = document.getElementById("recusar");
    recusado.onclick = () => {
        recusar_matricula(id);
    };
}


function confirmar_matricula(id_pai){
    let elementoFilho = document.getElementById(id_pai).children;
    coluna_status = elementoFilho[3];
    coluna_status.innerHTML = 'Confirmado';
    document.getElementById("botao_fechar").click();
}

function recusar_matricula(id_pai){
    let elementoFilho = document.getElementById(id_pai).children;
    coluna_status = elementoFilho[3];
    coluna_status.innerHTML = 'Recusado';
    document.getElementById("botao_fechar").click();
}

function base_dados(){
    var requestURL = '/base_dados/matricula_ano_letivo.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var matriculas_ano_letivo = request.response;
        populate_matriculas_ano_letivo(matriculas_ano_letivo);
    }
}

function populate_matriculas_ano_letivo(jsonOBJ){
    var matriculas_ano_letivo = jsonOBJ['matriculas_ano_letivo'];

    
    var matriculas_pendentes = [];
    
    //filtrando apenas pelas matriculas que ainda NÃO foram aprovadas
    for(index in matriculas_ano_letivo){
      if(matriculas_ano_letivo[index].status == false){
        matriculas_pendentes.push(matriculas_ano_letivo[index]);
        }
    }
  
    //mostrando as matrículas pendentes de aprovação
    t_body = document.getElementById('t_body');
    for(index in matriculas_pendentes){
        matricula = '<tr id="' + matriculas_pendentes[index].id + '"' + 'onclick="abrir_modal(this.id)"' + '>' +  
        "<td>" + matriculas_pendentes[index].aluno_nome + " </td>" + 
        "<td>" + matriculas_pendentes[index].turno + " </td>" + 
        "<td>" + matriculas_pendentes[index].ano_letivo + " </td>" + 
        "<td>" + " </td>" +  "</tr>";
        t_body.insertAdjacentHTML('beforeend', matricula);
    }
}