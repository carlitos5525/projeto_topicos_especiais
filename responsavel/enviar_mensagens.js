function enviar_mensagem(){
    elemento_mensagem = document.getElementById("texto_mensagem");
    texto_mensagem = elemento_mensagem.value;
    alert(texto_mensagem);

    var data = new Date();
    hora_atual = data.getHours();

    div_chat = document.getElementById("chat-content");
    mensagem = '<div class="media media-chat media-chat-reverse">' + '<div class="media-body">' +'<p>' + texto_mensagem + '</p>' + '</div>' + '</div>';

    div_chat.insertAdjacentHTML('beforeend', mensagem);

    document.getElementById('texto_mensagem').value='';
}