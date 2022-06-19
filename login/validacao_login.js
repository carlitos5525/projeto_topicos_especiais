function valida_formulario(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    var form_is_validated = true;
    
    //validando se o formulário se login está preenchido
    if(username == ""){
        alert('Por favor, preencha o campo nome do usuário');
        form_is_validated = false;
    }
    

    if(password == ""){
        alert("Por favor, preencha a senha");
        form_is_validated = false;
    }

    //se o formulário está preenchido, vamos fazer uma busca nos dados e passar para a função que valida o login
    if(form_is_validated){
        var requestURL = 'usuario.json';

        var request = new XMLHttpRequest();

        request.open('GET', requestURL);

        request.responseType = 'json';
        request.send();

        request.onload = function(){
            var usuarios = request.response;
            
            valida_login(usuarios);
        }

    }
}

function validar_tipo_usuario(usuarios, index) {

    var valor_selecionado = document.getElementById('tipo_usuario');
    var tipo_usuario = valor_selecionado.options[valor_selecionado.selectedIndex].value;

    //conferindo se o tipo de usuário que foi preenchido é o tipo que está salvo na nossa base de dados e
    //depois redirecinando o usuário para a sua área correta
    if(tipo_usuario == usuarios[index].tipo_usuario){

        //criando uma sessão do usuário e salvando na localStorage
        localStorage.setItem("id_usuario", usuarios[index].id);

        if(tipo_usuario == 1){
            location.href = "/aluno/inicio.html";
        }
        else if(tipo_usuario == 2){
            location.href = "/responsavel/provas.html";
        }
        else if(tipo_usuario == 3){
            location.href = "/professor/aulas.html";
        }
        else if(tipo_usuario == 4){
            location.href = "/secretaria/anoletivo.html";
        }
        else if(tipo_usuario == 5){
            location.href = "/financeiro/index.html";
        }
    }
    else{
        window.alert("Login e senha estão corretos, mas esse NÃO é o seu tipo de usuário.")
    }

}

function valida_login(jsonOBJ){
    var usuarios = jsonOBJ['usuarios'];

    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    var login_is_validated = false;

    //conferindo se o login e senha preenchidos conferem com o que temos na nossa base de dados
    //se estiver tudo certo, vamos validar se o tipo de usuário foi preenchido corretamente
    for(index in usuarios){
        if(username == usuarios[index].login){
            if(password == usuarios[index].senha){
                login_is_validated = true;
                validar_tipo_usuario(usuarios, index);
            }
        }
    }

    if(login_is_validated == false){
        window.alert("Login ou senha incorretos.");
    }
}