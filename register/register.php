<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Register Account</title>
    <link rel="stylesheet" href="register.css">
  </head>
  <body>
    <?php

  function generateUuid() {
    $data = random_bytes(16);
    $data[6] = chr(ord($data[6]) & 0x0f | 0x40); // set version to 0100
    $data[8] = chr(ord($data[8]) & 0x3f | 0x80); // set bits 6-7 to 10
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
  }


   if(isset($_POST["submit"])){
    require("../mysql.php"); // assuming this file contains database connection settings
    
    $user = $_POST["username"];

    // Prepare and execute SELECT query
    $stmt = $conn->prepare("SELECT * FROM accounts WHERE USERNAME = ?");
    $stmt->execute([$user]);
    $result = $stmt->fetchAll();

    $count = count($result);
    if($count == 0){
        if($_POST["pw"] == $_POST["pw2"]){
            // User anlegen
            $pw = password_hash($_POST["pw"], PASSWORD_BCRYPT);
            $stmt = $conn->prepare("INSERT INTO accounts (id, USERNAME, PASSWORD) VALUES (?, ?, ?)");
            $id = generateUuid();
            $stmt->execute([$id, $user, $pw]);
            header("location: registered.html");
        } else {
            echo "<h2>The password fields do not match</h2>";
        }
    } else {
        echo "<h2>Username is already in use</h2>";
    }
}


    
     ?>
    <h1>Register</h1>
    <form action="register.php" method="post">
      <input type="text" name="username" placeholder="Username" minlength="5" maxlength="15" required><br>
      <input type="password" name="pw" placeholder="Password" required><br>
      <input type="password" name="pw2" placeholder="Repeat Password" required><br>
      <button type="submit" name="submit">Create Account</button>
    </form>
    <br>
    <a href="../login/login.php">Do you already have an account?</a>
  </body>
</html>
