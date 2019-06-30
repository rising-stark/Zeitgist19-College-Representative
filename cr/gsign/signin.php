<?php
//   namespace Zeitgeist;
require_once 'vendor/autoload.php';
require_once '../include/include.php';
require 'PHPMailer/PHPMailerAutoload.php';

error_reporting(E_ALL);
ini_set('display_errors', 'on');

$email = $_POST['email'];
$fname = $_POST['fname'];
if (isset($_POST['lname'])) { 
$lname = $_POST['lname']; 
}
$name = "$fname"." "."$lname";
$college = mysqli_real_escape_string($conn, $_POST['college']);
$contact = $_POST['contact'];
$whyca = mysqli_real_escape_string($conn, $_POST['whyca']);
if (isset($_POST['anyexp'])){ 
$anyexp = mysqli_real_escape_string($conn, $_POST['anyexp']);
}

  if(! ( is_null($fname) || is_null($college) || is_null($contact) || is_null($whyca) || is_null($email))) {
    // $userid = $payload['sub'];
    $sql = "SELECT fname,lname,college FROM ca_tb WHERE email='$email' or contact='$contact'";
    $result=mysqli_query($conn,$sql);

    if (mysqli_num_rows($result) > 0) {
      $row=mysqli_fetch_row($result);
      echo json_encode(array("result" => "Already Registered :).<br><br> The email-id <strong>"."$email"."</strong> or the contact number <strong>"."$contact"."</strong> are already associated with: <br><strong>"."$row[0]"." "."$row[1]"."</strong> from <strong>"."$row[2]"."</strong><br>","status1" => "already"));  
      mysqli_free_result($result);
    }
    else{
        if(is_null($lname)){
            $name1 = strtolower(substr($fname, 0, min(strlen($fname),5)));
        }else{
            $name1 = strtolower(substr($fname, 0, min(strlen($fname),3)));
        }
        $name2 = strtolower(substr($lname, 0, 2));
        $code = rand(10, 100);
        $referralCode = "$name1"."$name2"."$code"."ZE19";
        
        $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->Port = 587;
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
        $mail->Username = 'zeitgeist.pr@iitrpr.ac.in';
        $mail->Password = 'letsdoitbetter';
        $mail->setFrom('zeitgeist.pr@iitrpr.ac.in', 'ZEITGEIST, IIT Ropar');
        $mail->addAddress($email, $name);
        $mail->Subject = 'Successful Zeitgeist2K19, IIT Ropar Registration and Referral code';
        $mail->Body = implode("\r\n", array('Thank You',
        'You have been successfully registered for College Representative program for Zeitgeist 2K19.',
        'We are excited for your journey with us.',
        'Your College Representative referral code is '.$referralCode.".",
        'CR Policy : https://www.zeitgeist.org.in/Zeitgeist19/cr/CR%20Policy.pdf',
        '',
        'Team Zeitgeist',
        'Indian Institute of Technology (IIT), Ropar',
        'Rupnagar, Punjab, 140001'));
        $mailsentstatus=$mail->send();
        if($mailsentstatus==1){
        $sql = "INSERT INTO ca_tb (fname,lname, email, college, contact, whyca, anyexp, referral) VALUES ('$fname','$lname', '$email', '$college' ,'$contact', '$whyca', '$anyexp', '$referralCode')";
        if(! mysqli_query($conn,$sql)){
            echo json_encode(array("result" => "Something went wrong!<br>Error: "."$conn->error"."<br>"));
        }
        echo json_encode(array("result" => "Successfully Registered :)<br><br>An email has been sent to the provided emailid.<br>","status1" => "sent"));
        }
        else{
        echo json_encode(array("result" => "Email not sent.<br> Please try Again!<br>","status1" => "error"));
        }
    }
}
else {
    echo json_encode(array("result" => "Some field data is corrupted","status1" => "error"));
}
mysqli_close($conn);
?>