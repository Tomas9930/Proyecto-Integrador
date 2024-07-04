<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $src = $_POST['src'];
    $alt = $_POST['alt'];
    $author = $_POST['author'];

    $sql = "UPDATE images SET src = :src, alt = :alt, author = :author WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->bindParam(':src', $src);
    $stmt->bindParam(':alt', $alt);
    $stmt->bindParam(':author', $author);
    $stmt->execute();
    
    header("Location: index.html");
}
?>

