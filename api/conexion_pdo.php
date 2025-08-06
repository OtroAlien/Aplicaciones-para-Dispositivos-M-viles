<?php
// Configuración de la conexión a la base de datos usando constantes
define('DB_HOST', 'localhost'); // o la dirección de tu servidor de base de datos
define('DB_USER', 'root'); // usuario de la base de datos
define('DB_PASS', ''); // contraseña del usuario
define('DB_NAME', 'gestor_financiero'); // nombre de la base de datos
define('DB_CHARSET', 'utf8mb4'); // conjunto de caracteres

try {
    // Crear conexión con PDO
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
    $opciones = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];
    
    $conexion = new PDO($dsn, DB_USER, DB_PASS, $opciones);
    
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

// Función para limpiar datos de entrada (no necesaria con PDO ya que usa prepared statements)
function limpiarDato($dato) {
    return trim($dato);
}

// Función para responder en formato JSON
function responderJSON($datos, $codigo = 200) {
    http_response_code($codigo);
    header('Content-Type: application/json');
    echo json_encode($datos);
    exit;
}
?>