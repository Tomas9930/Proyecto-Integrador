<?php
include 'conexion.php';

$sql = "SELECT * FROM images";
$stmt = $conn->prepare($sql);
$stmt->execute();
$images = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($images);
?>
