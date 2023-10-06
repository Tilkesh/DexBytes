<?php
ini_set('display_errors', 1);
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
// Load Composer's autoloader
require 'vendor/autoload.php';

if(isset($_POST['submit_contact'])){
   // Check all validations
   $name = htmlspecialchars($_POST['name']);
   $email = htmlspecialchars($_POST['email']);
   $phone = htmlspecialchars($_POST['phone']);
   $cate = htmlspecialchars($_POST['cate']);
   $message = htmlspecialchars($_POST['message']);

   $errors = [];
   if($name == ''){
      $errors['name'] = 'Name is required.';
   }

   if($email == ''){
      $errors['email'] = 'Email address is required.';
   }

   if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
      //Failed
      $errors['email'] = 'Email is invalid';
   }

   if($phone == ''){
      $errors['phone'] = 'Phone is required.';
   }

   if($cate == ''){
      $errors['cate'] = 'Category is required.';
   }

   if($message == ''){
      $errors['message'] = 'Message can not be empty.';
   }

// Instantiation and passing `true` enables exceptions
   if(empty($errors)) {
      $mail = new PHPMailer(true);
      try {
         //Server settings
         //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
         $mail->isSMTP();                                            // Send using SMTP
         $mail->Host       = 'smtp.googlemail.com';                    // Set the SMTP server to send through
         $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
         $mail->Username   = 'noreply.dexbytes@gmail.com';                     // SMTP username
         $mail->Password   = 'dexbytes@2019';                               // SMTP password
         $mail->SMTPSecure = 'ssl';//PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_S$
         $mail->Port       = 465;                                    // TCP port to connect to
         //Recipients
         $mail->setFrom('contact@dexbytes.com', 'Dexbytes');
         $mail->addAddress('contact@dexbytes.com', 'Dexbytes');     // Add a recipient
         
            // Attachments
         
         // Content
         $bodyText = '<p>Hello Admin,</p><p>Somone has contacted you with following details.</p>';
         $bodyText .= '<p>Name: '.$name.'</p>';
         $bodyText .= '<p>Email: '.$email.'</p>';
         $bodyText .= '<p>Phone: '.$phone.'</p>';
         $bodyText .= '<p>Category: '.$cate.'</p>';
         $bodyText .= '<p>Message: '.$message.'</p>';
         $bodyText .= '<p>Thanks,<br/>Dexbytes</p>';

         $mail->isHTML(true);                                  // Set email format to HTML
         $mail->Subject = 'Contact Us: '.$name;
         $mail->Body    = $bodyText;
         $mail->AltBody = 'You have been contacted by '.$email;
         $mail->send();
         echo json_encode(['status' => 'success', 'message' => 'Email has been sent.']);
      } catch (Exception $e) {
         echo json_encode(['status' => 'error', 'errors' => ['smtp_failure' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]]);
      } 
   } else {
      echo json_encode(['status' => 'error', 'errors' => $errors]);
   }
}
