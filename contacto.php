<?php
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (
        !empty($_POST['name']) &&
        !empty($_POST['email']) &&
        !empty($_POST['message'])
    ) {
        $name = trim($_POST['name']);
        $email = trim($_POST['email']);
        $message = trim($_POST['message']);

        $consulta = "INSERT INTO contacto(nombre, email, mensaje)
                     VALUES('$name','$email','$message')";
        $resultado = mysqli_query($conn, $consulta);

        if ($resultado) {
            header("Location: contacto.html?msg=ok");
        } else {
            header("Location: contacto.html?msg=error");
        }
        exit();
    } else {
        header("Location: contacto.html?msg=error");
        exit();
    }
}
?>