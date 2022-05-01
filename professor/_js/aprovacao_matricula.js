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