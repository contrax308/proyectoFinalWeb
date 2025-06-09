<?php
// Conexión a la base de datos
$servername = "localhost"; // Cambia si es necesario
$username = "root"; // Cambia si es necesario
$password = ""; // Cambia si es necesario
$dbname = "tienda_digital";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

function procesarCompra() {
    global $conn;

    // Validar que todos los campos requeridos estén llenos
    if (empty($_POST['fullName']) || empty($_POST['email']) || empty($_POST['address']) || empty($_POST['phone']) || empty($_POST['cartItems'])) {
        header("Location: compra.html?msg=error&error=campos_vacios");
        exit();
    }

    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $cartItems = json_decode($_POST['cartItems'], true);

    // Verificar si el carrito está vacío
    if (empty($cartItems)) {
        header("Location: compra.html?msg=error&error=carrito_vacio");
        exit();
    }

    $res = mysqli_query($conn, "SELECT id_usuario FROM usuarios WHERE email = '$email'");
    if ($res && $row = mysqli_fetch_assoc($res)) {
        $usuario_id = $row['id_usuario'];
    } else {
        $sql_usuario = "INSERT INTO usuarios (nombre, email, direccion, contrasena) VALUES ('$fullName', '$email', '$address', '')";
        if (mysqli_query($conn, $sql_usuario)) {
            $usuario_id = mysqli_insert_id($conn); // Obtener el ID del nuevo usuario
        } else {
            header("Location: compra.html?msg=error");
            exit();
        }
    }

    $total = 0;
    foreach ($cartItems as $item) {
        $total += $item['price'] * $item['quantity'];
    }

    // Insertar el pedido
    $sql_pedido = "INSERT INTO pedidos (usuario_id, total) VALUES ('$usuario_id', '$total')";
    if (mysqli_query($conn, $sql_pedido)) {
        $pedido_id = mysqli_insert_id($conn); // Obtener el ID del nuevo pedido

        // Insertar detalles del pedido
        foreach ($cartItems as $item) {
            $sql_detalle = "INSERT INTO detalles_pedido (pedido_id, producto_id, cantidad, precio) VALUES ('$pedido_id', '{$item['id']}', '{$item['quantity']}', '{$item['price']}')";
            mysqli_query($conn, $sql_detalle);
        }

        // Redirigir a la página de confirmación
        header("Location: compra_confirmacion.html");
        exit();
    } else {
        header("Location: compra.html?msg=error");
        exit();
    }
}

// Llamar a la función para procesar la compra
procesarCompra();

// Cerrar conexión
$conn->close();
?>

