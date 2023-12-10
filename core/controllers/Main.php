<?php 

namespace core\controllers;

use core\classes\Database;
use core\classes\EnviarEmail;
use core\classes\Functions;
use core\classes\Store;
use core\model\Cliente;

class Main{
    //  ######################################################
    public function index(){
        Functions::Layout([
            'layouts/header',
            'home',
            'layouts/footer',
        ]);
    }

    //  ######################################################    
    public function carrinho(){
        Functions::Layout([
            'layouts/header',
            'carrinho',
            'layouts/footer',
        ]);
    }

    //  ######################################################
    public function cadastro(){
        //Verifica se já não está logado
        if(Store::cliente_logado()){
            $this->index();
            return;
        }

        //Caso contrario ele entra na pagina de cadastro
        Functions::Layout([
            'layouts/cadastro'
        ]);
    }

    //  ######################################################
    public function criar_cliente(){
        //Verifica se já não está logado
        if(Store::cliente_logado()){
            $this->index();
            return;
        }
        
        //Verifica se foi enviado algum formulario
        if($_SERVER['REQUEST_METHOD'] != 'POST'){
            $this->index();
            return;
        }
        
        //Verificar se as senhas coincidem
        if($_POST['senha_01'] != $_POST['senha_02']){
            $_SESSION['erro'] = 'Senhas diferentes !';
            $this->cadastro();
            return;
        }

        //Verificar se o email já está cadastrado
        $cliente = new Cliente();
        if($cliente->email_ja_registrado($_POST['email'])){
            $_SESSION['erro'] = 'E-mail já cadastrado !';
            $this->cadastro();
            return;
        }

        //Registrar os dados do cliente
        $purl = $cliente->registrar_cliente($_POST);

        //Enviar e-mail de confirmação de conta
        $email = new EnviarEmail();
        $resultado = $email->enviar_confir(strtolower(trim($_POST['email'])), $purl);
        if($resultado){
            Functions::Layout([
                'layouts/header',
                'layouts/criar_cliente',
                'layouts/footer',
            ]);
        }
        else
            echo "Falha ao enviar e-mail";

    }

    //  ######################################################
    public function confirmar_email(){
        //Verifica se já não está logado
        if(Store::cliente_logado()){
            $this->index();
            return;
        }

        //Verificar existencia do purl
        if(!isset($_GET['purl']))
            return;
        
        //Verifica se é um purl válido
        $purl = $_GET['purl'];
        if(strlen($purl) != 13)
            return;

        $cliente = new Cliente();
        $result = $cliente->validar_email($purl);

        if($result){
            Functions::Layout([
                'layouts/header',
                'layouts/conta_validada',
                'layouts/footer',
            ]);
        }
        else
            echo 'erro ao validar';
    }


}
 


?>