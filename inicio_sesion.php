<?php
session_start();
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    if ($email != "" && $password != "") {
        $query = "SELECT * FROM usuarios WHERE email = '$email' LIMIT 1";
        $result = mysqli_query($conn, $query);

        if ($result && mysqli_num_rows($result) == 1) {
            $user = mysqli_fetch_assoc($result);

            if ($password === $user['contrasena']) {
                $_SESSION['usuario'] = $user['nombre'];
                header("Location: dashboard.php");
                exit();
            } 
            else {
                header("Location: inicio_sesion.html?error=1");
                exit();
            }
        } else {
            header("Location: inicio_sesion.html?error=1");
            exit();
        }
    } else {
        header("Location: inicio_sesion.html?error=1");
        exit();
    }
} else {
    // Si acceden directo sin POST
    header("Location: inicio_sesion.html");
    exit();
}
