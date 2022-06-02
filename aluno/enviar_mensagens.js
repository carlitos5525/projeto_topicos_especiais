function enviar_mensagem(){
    elemento_mensagem = document.getElementById("texto_mensagem");
    texto_mensagem = elemento_mensagem.value;

    //elemento da mensagem do chat
    div_chat = document.getElementById("chat-content");
    mensagem = '<div class="media media-chat media-chat-reverse">' + '<div class="media-body">' +'<p>' + texto_mensagem + '</p>' + '</div>' + '</div>';

    //adicionando a mensagem no chat
    div_chat.insertAdjacentHTML('beforeend', mensagem);

    //zerando a caixa de texto
    document.getElementById('texto_mensagem').value='';
}

function alterar_conversa(usuario){
    div_chat = document.getElementById("chat-content");
    div_chat.innerHTML = '';
}

function base_dados(){
    var requestURL = '/base_dados/mensagens.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var mensagens = request.response;
        populate_mensagens(mensagens);
    }
}

function populate_mensagens(jsonOBJ){
    var mensagens = jsonOBJ['mensagens'];

    div_chat = document.getElementById("chat-content");
    for(index in mensagens){
        mensagem = '<div class="media media-chat media-chat-reverse">' + '<div class="media-body">' +'<p>' + mensagens[index].texto + '</p>' + '</div>' + '</div>';
        div_chat.insertAdjacentHTML('beforeend', mensagem);
    }
}