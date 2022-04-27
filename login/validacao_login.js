function valida_formulario(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    var is_validated = true;
    if(username == ""){
        alert('Por favor, preencha o campo nome do usuário');
        is_validated = false;
    }
    

    if(password == ""){
        alert("Por favor, preencha a senha");
        is_validated = false;
    }

    if(is_validated){
        validar_tipo_usuario();

    }
}

function validar_tipo_usuario() {

    var valor_selecionado = document.getElementById('tipo_usuario');
    var tipo_usuario = valor_selecionado.options[valor_selecionado.selectedIndex].value;

    if(tipo_usuario == 1){
        window.open('/aluno/inicio.html');
    }
    else if(tipo_usuario == 2){
        window.open('/responsavel/provas.html');
    }
    else if(tipo_usuario == 3){
        window.open('/professor/aulas.html');
    }
    else if(tipo_usuario == 4){
        window.open('/secretaria/anoletivo.html');
    }
    else if(tipo_usuario == 5){
        alert("O usuário do tipo financeiro não possui telas, pois sua aplicação será no back-end");
    }

}