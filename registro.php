<?php

    include("conexion.php");

    $mensaje = "Usuario";

    if(isset($_POST['register'])){
        if(
            strlen($_POST['name']) >=1 &&
            strlen($_POST['email']) >=1 &&
            strlen($_POST['direction']) >=1 &&
            strlen($_POST['password']) >=1
          ) {
            $name=trim($_POST['name']);
            $email=trim($_POST['email']);
            $direction=trim($_POST['direction']);
            $password=trim($_POST['password']);

            $consulta="INSERT INTO usuarios(nombre, email, direccion, contrasena)
                        VALUES('$name','$email','$direction','$password')";
            $resultado=mysqli_query($conn, $consulta);

            if($resultado){
                $mensaje = "Tu registro se ha completado.";
            }else{
                $mensaje = "Tu registro no se ha completado.";
            }
        }else{
            $mensaje = "Por favor, completa todos los campos.";
        }

        if ($resultado) {
    header("Location: registro.html?msg=ok");
} else {
    header("Location: registro.html?msg=error");
}
exit();

    }

?>