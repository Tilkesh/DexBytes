<?php
if(isset($_POST['submit'])){
    // Get the submitted form data
    $email  = $_POST['email'];
    $name = $_POST['name'];
    $subject = 'Application for Recruitment';
    $years = $_POST['years'];
    $months = $_POST['months'];
    $contact = $_POST['contact'];
    $apply = $_POST['apply'];
    //$subject = $_POST['subject'];
    $message = $_POST['letter'];
    $uploadStatus = 1;
    // Upload attachment file
    if(!empty($_FILES["attachment"]["name"])){
        // File path config
        $targetDir = "uploads/";
        $fileName = basename($_FILES["attachment"]["name"]);
        $targetFilePath = $targetDir . $fileName;
        $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
        // Allow certain file formats
        $allowTypes = array('pdf', 'doc', 'docx', 'jpg', 'png', 'jpeg');
        if(in_array($fileType, $allowTypes)){
            // Upload file to the server
            $result = move_uploaded_file($_FILES["attachment"]["tmp_name"], $targetFilePath);
            if($result){
                $uploadedFile = $targetFilePath;
            }else{
                $uploadStatus = 0;
                $statusMsg = "Sorry, there was an error uploading your file.";
            }
        }else{
            $uploadStatus = 0;
            $statusMsg = 'Sorry, only PDF, DOC, JPG, JPEG, & PNG files are allowed to upload.';
        }
    }
    if($uploadStatus == 1){
        // Recipient
        $to = 'tilkeshj.dexbytes@gmail.com';
        $subject = "Application for Recruitment";
        // Sender
        $from = $email;
        // Subject
        $emailSubject = 'Email attachment request Submitted by '.$name;
        // Message
        $htmlContent = '<h2>Contact Request Submitted</h2>
                <p><b>Name:</b> '.$name.'</p>
                <p><b>Apply For:</b> '.$apply.'</p>
                <p><b>Email:</b> '.$email.'</p>
                <p><b>Contact No.:</b> '.$contact.'</p>
                <p><b>Experience:</b> Y '.$years.' M '.$months.'</p>
                <p><b>Message:</b><br/>'.$message.'</p>';
        // Header for sender info
        $headers = "From: $name"." <".$to.">";

        if(!empty($uploadedFile) && file_exists($uploadedFile)){
            // Boundary
            $semi_rand = md5(time());
            $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";
            // Headers for attachment
            $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";
            // Multipart boundary
            $message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" .
                "Content-Transfer-Encoding: 7bit\n\n" . $htmlContent . "\n\n";
            // Preparing attachment
            if(is_file($uploadedFile)){
                $message .= "--{$mime_boundary}\n";
                $fp =    @fopen($uploadedFile,"rb");
                $data =  @fread($fp,filesize($uploadedFile));
                @fclose($fp);
                $data = chunk_split(base64_encode($data));
                $message .= "Content-Type: application/octet-stream; name=\"".basename($uploadedFile)."\"\n" .
                    "Content-Description: ".basename($uploadedFile)."\n" .
                    "Content-Disposition: attachment;\n" . " filename=\"".basename($uploadedFile)."\"; size=".filesize($uploadedFile).";\n" .
                    "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
            }
            $message .= "--{$mime_boundary}--";
            $returnpath = "-f" . $email;
            // Send email
            try{
                $mail = mail($to, $subject, $message, $headers, $returnpath);
            }catch (exception $e) {
                 echo $e->getMessage();
            }
            
            // Delete attachment file from the server
            @unlink($uploadedFile);
        }else{
            // Set content-type header for sending HTML email
            $headers .= "\r\n". "MIME-Version: 1.0";
            $headers .= "\r\n". "Content-type:text/html;charset=UTF-8";
            // Send email
            //$mail = mail($to, $subject, $htmlContent, $headers);
            try{
                $mail = mail($to, $subject, $htmlContent, $headers);
            }catch (exception $e) {
                 echo $e->getMessage();
            }
        }
        // If mail sent
        if($mail){
            $statusMsg = 'Your request has been submitted successfully !';
        }else{
            $statusMsg = 'Your request submission failed, please try again.';
        }
    }
    echo '<script>alert("'.$statusMsg.'");window.location.href="./";</script>';
}
?>