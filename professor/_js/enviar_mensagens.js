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

function base_dados(id_conversa){
    var requestURL = '/base_dados/mensagens.json';

    //salvando o id da conversa a ser mostrada
    localStorage.setItem("id_conversa", id_conversa);

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

    //resgatando o id do usuário que está logado
    id_usuario_logado = localStorage.getItem("id_usuario");

    //resgatando o id da conversa a ser mostrada
    id_conversa = localStorage.getItem("id_conversa");

    var mensagens_da_conversa = [];

    //filtrando pelas mensagens da conversa selecionada
    for(index in mensagens){
        if(mensagens[index].ConversaId == id_conversa){
            mensagens_da_conversa.push(mensagens[index]);
        }
    }


    div_chat = document.getElementById("chat-content");
    //exibindo as mensagens na tela
    div_chat.innerHTML = '';
    for(index in mensagens_da_conversa){
        if(mensagens_da_conversa[index].remetente_id == id_usuario_logado){
            mensagem = '<div class="media media-chat media-chat-reverse">' + '<div class="media-body">' +'<p>' + mensagens_da_conversa[index].texto + '</p>' + '</div>' + '</div>';
        }
        else{
            mensagem = '<div class="media media-chat media-chat">' + '<div class="media-body">' +'<p>' + mensagens_da_conversa[index].texto + '</p>' + '</div>' + '</div>';
        }
        
        div_chat.insertAdjacentHTML('beforeend', mensagem);
    }
}