<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Register Account</title>
    <link rel="stylesheet" href="register.css">
  </head>
  <body>
    <?php
    if(isset($_POST["submit"])){
      require("mysql.php");
      $stmt = $mysql->prepare("SELECT * FROM accounts WHERE USERNAME = :user"); //Username überprüfen
      $stmt->bindParam(":user", $_POST["username"]);
      $stmt->execute();
      $count = $stmt->rowCount();
      if($count == 0){
        //Username ist frei
        $stmt = $mysql->prepare("SELECT * FROM accounts WHERE EMAIL = :email"); //Username überprüfen
        $stmt->bindParam(":email", $_POST["email"]);
        $stmt->execute();
        $count = $stmt->rowCount();
        if($count == 0){
          if($_POST["pw"] == $_POST["pw2"]){
            //User anlegen
            $stmt = $mysql->prepare("INSERT INTO accounts (USERNAME, PASSWORD, EMAIL, TOKEN) VALUES (:user, :pw, :email, null)");
            $stmt->bindParam(":user", $_POST["username"]);
            $hash = password_hash($_POST["pw"], PASSWORD_BCRYPT);
            $stmt->bindParam(":pw", $hash);
            $stmt->bindParam(":email", $_POST["email"]);
            $stmt->execute();
            header("location: registered.html");
          } else {
            echo "Die Passwörter stimmen nicht überein";
          }
        } else {
          echo "Email bereits vergeben";
        }
      } else {
        echo "Der Username ist bereits vergeben";
      }
    }
     ?>
    <h1>Register</h1>
    <form action="register.php" method="post">
      <input type="text" name="firstname" id="" placeholder="First Name"><br>
      <input type="text" name="lastname" id="" placeholder="Last Name"><br>
      <input type="text" name="username" placeholder="Username" required><br>
      <input type="text" name="email" placeholder="Email" required><br>
      <input type="password" name="pw" placeholder="Password" required><br>
      <input type="password" name="pw2" placeholder="Repeat Password" required><br>
      <button type="submit" name="submit">Create Account</button>
    </form>
    <br>
    <a href="../login/login.php">Do you already have an account?</a>
  </body>
</html>
