<?php 

namespace core\controllers;

use core\classes\EnviarEmail;
use core\classes\Functions;
use core\classes\Store;
use core\model\Cliente;
use core\model\Produtos;

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
        else //Se clicar no link de validação de email 2x or more volta pro index, de der erro tmb, mas isso é outros 500
            $this->index();
    }

    //  ######################################################
    public function login(){
        //Verifica se já não está logado
        if(Store::cliente_logado()){
            $this->index();
            return;
        }

        //Verifica se é válido os dados passados
        if( !isset($_POST['email']) ||
            !isset($_POST['senha']) ||
            !filter_var((trim($_POST['email'])), FILTER_VALIDATE_EMAIL))
        {
            $_SESSION['erro'] = 'Login inválido, verifique a senha e/ou email';
            $this->index();
        }
        
        //Verificar o login no banco de dados e iniciar sessão
        $cliente = new Cliente();

        $user = strtolower(trim($_POST['email']));
        $pass = $_POST['senha'];

        $result = $cliente->validar_login($user, $pass);
        if(is_bool($result)){
            $_SESSION['erro'] = 'Login inválido, verifique a senha e/ou email';
            $this->index();
        }else{
            $_SESSION['cliente'] = $result->id;
            $_SESSION['foto'] = base64_encode($result->img_perfil);
            $_SESSION['usuario'] = $result->email;
            $_SESSION['nome'] = $result->nome;
            $this->index();
        }
    }

    //  ######################################################
    public function logout(){
        unset($_SESSION['cliente']);
        unset($_SESSION['usuario']);
        unset($_SESSION['nome']);
        $this->index();
    }

    //  ######################################################
    public function produtos(){
        $produtos = new Produtos();
        $categoria = $_GET['c'];
        $lista_prod = $produtos->lista_produtos($categoria);

        Functions::Layout([
            'layouts/header',
            'produtos',
            'layouts/footer',
        ],['produtos'=> $lista_prod]); 
    }
}


?>