function abrir_modal(id){
    $("#modalAprovacao").modal();
    var presente = document.getElementById("presente");
    presente.onclick = () => {
        confirmar_presenca(id);
    };

    var ausente = document.getElementById("ausente");
    ausente.onclick = () => {
        confirmar_ausencia(id);
    };
}


function confirmar_presenca(id_pai){
    let elementoFilho = document.getElementById(id_pai).children;
    coluna_status = elementoFilho[1];
    coluna_status.innerHTML = 'Sim';
    document.getElementById("botao_fechar").click();
}

function confirmar_ausencia(id_pai){
    let elementoFilho = document.getElementById(id_pai).children;
    coluna_status = elementoFilho[1];
    coluna_status.innerHTML = 'Não';
    document.getElementById("botao_fechar").click();
}