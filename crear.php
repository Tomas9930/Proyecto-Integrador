<?php
include 'conexion.php'; 

echo $_SERVER;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $src = $_POST['src'];
    $alt = $_POST['alt'];
    $author = $_POST['author'];

    $q1 = "INSERT INTO images (src, alt, author) VALUES (:src, :alt, :author)";

    $q2=mysqli_query($conn,$q1);

    if(mysqli_query($conn,$q1))
    {
        $msg = 'User information saved successfully.';
    }
    else
    {
        $msg = 'Error: We encountered an error while inserting the new record.';
    }
    echo $msg;
    mysqli_close($conn);
}
?>
