$(document).ready(function ()  
{
    var envia = document.getElementById("envia_form");
    var send = $("#enviar");#enviar[disabled=disabled],



    $('#envia_form').submit(function () {
        send.prop('disabled',true);
        send.text('Enviando');
        $('#resposta_email').html('');
        var datastring = $(this).serialize();
        
        $.ajax({
            type: "POST",
            url: "envia_email_form.php",
            data: datastring,
            dataType: "html",
            success: function (data) {
                if (data == 'OK') {
                    var resp =
                        '<div class="alert alert-success" role="alert">E-mail enviado com sucesso!</div>';
                } else {
                    var resp = '<div class="alert alert-danger" role="alert">' + data +
                        '</div>';
                }
                $('#resposta_email').html(resp);
                $('#envia_form').trigger("reset");
                $("#Telefone").val("");
                send.prop('disabled', false);
                send.text('Enviar');

            },
            error: function () {
                $('#resposta_email').html(
                    '<div class="alert alert-danger" role="alert">Erro ao enviar e-mail</div>'


                );
            }
        });
        return false;
   });
}