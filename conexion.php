<?php


$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "tienda_digital"; 

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}/*else{
    echo "conexion exitosa";
}*/
?>

