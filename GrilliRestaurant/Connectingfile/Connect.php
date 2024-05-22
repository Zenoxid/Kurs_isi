<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grilli Menu</title>
</head>
<body>
<?php
$servername = "localhost";
$username = "root";
$password = "";

try {
  $conn = new PDO("mysql:host=$servername;dbname=grillirestaurant", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
$stmt = $conn->prepare("SELECT ProductsName, Price, ProductPhotos FROM menuproducts ");
$stmt->execute();
$result= $stmt->setFetchMode(PDO::FETCH_ASSOC);
$row=$stmt->fetchAll();
/*foreach ($row as $rows)
echo $rows["ProductsName"] . " - " . $rows["Price"] . "<br>";*/
?>
</body>
</html>