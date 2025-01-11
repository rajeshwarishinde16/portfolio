<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    
    if (isset($_POST['name'], $_POST['email'], $_POST['phone'], $_POST['message'])) {
        
       
        $username = htmlspecialchars($_POST['name']);
        $useremail = htmlspecialchars($_POST['email']);
        $userphone = htmlspecialchars($_POST['phone']);
        $usermessage = htmlspecialchars($_POST['message']);

        /
        $servername = "localhost";
        $username_db = "root"; 
        $password_db = "";    
        $dbname = "portfolio"; 

     
        $conn = new mysqli($servername, $username_db, $password_db, $dbname);

       
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        
        $sql = "INSERT INTO Info (Name, Email, Phone, Message) VALUES ('$username', '$useremail', '$userphone', '$usermessage')";

        if ($conn->query($sql) === TRUE) {
            echo "Data added successfully!";
        } else {
            echo "Error: " . $conn->error;
        }
       
        $conn->close();
    } else {
     
        echo "Please fill out all the fields.";
    }
}
?>

