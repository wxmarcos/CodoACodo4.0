<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $destinatario = $email;
    $asunto = "Veterinaria Codo a Codo";
    $cuerpoMensaje = "Hola $nombre,\n\n";
    $cuerpoMensaje .= $mensaje;

    if (mail($destinatario, $asunto, $cuerpoMensaje)) {
        echo "Correo enviado exitosamente.";
    } else {
        echo "Error al enviar el correo.";
    }
}
?>
