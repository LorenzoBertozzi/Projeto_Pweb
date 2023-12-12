<?php 

namespace core\classes;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class EnviarEmail{//
    public function enviar_confir($cliente_email, $purl){
        
        $purl = BASE_URL . '?page=confirmar_email&purl=' . $purl;

        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug  = SMTP::DEBUG_OFF;                      
            $mail->isSMTP(true);                                            
            $mail->Host       = EMAIL_SMTP;                             
            $mail->SMTPAuth   = true;                                    
            $mail->Username   = EMAIL_USER;                            
            $mail->Password   = EMAIL_SENHA;                            
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            
            $mail->Port       = EMAIL_PORT;
            $mail->CharSet    = 'UTF-8';                                     

            //Cliente
            $mail->setFrom(EMAIL_USER, APP_NAME);
            $mail->addAddress($cliente_email);     //Add a recipient

            //Conteudo
            $mail->isHTML(true);                                  
            $mail->Subject = APP_NAME . " - Confirmação de Cadastro";
            $corpo = '<p>Seja bem-vindo á nossa loja ' . APP_NAME . ' . </p><p>Clique no botão abaixo para confirmar seu e-mail</p><p><a href="'.$purl.'">Confirmar Cadastro</a></p>';
            $mail->Body    = $corpo;

            $mail->send();
            return true;
        } catch (Exception $e) {
            return false;
        }
    }
}



?>