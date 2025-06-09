-- Crear la base de datos
CREATE DATABASE tienda_digital;
USE tienda_digital;

-- Tabla: usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    direccion VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL
    -- fecha_reg DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nombre, email, direccion, contrasena)
VALUES ('usuario1', 'usuario1@gmail.com', 'calle21', '123456');

-- Tabla: productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descripcion TEXT,
    stock INT NOT NULL DEFAULT 0
    -- fecha_agregado DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: pedidos
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    fecha_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2) NOT NULL,
    estado ENUM('pendiente', 'completado', 'cancelado') DEFAULT 'pendiente',
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabla: detalles_pedido
CREATE TABLE detalles_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT,
    producto_id INT,
    cantidad INT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE
);

-- drop database tienda_digital;
