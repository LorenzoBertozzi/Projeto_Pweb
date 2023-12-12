<?php 
#páginas
$rotas = [
    'home' => 'main@index',

    //Cadastro
    'cadastro' => 'main@cadastro',
    'criar_cliente' => 'main@criar_cliente',
    'confirmar_email' => 'main@confirmar_email',
    
    //Login
    'login' => 'main@login',
    'logout' => 'main@logout',

    //Carrinho
    'carrinho' => 'main@carrinho',

    //Produtos
    'proteinas' => 'main@proteinas',
];

$page = 'home';

#Página Exibida
if(isset($_REQUEST['page'])){
    if(!key_exists($_REQUEST['page'],$rotas ))
        $page = 'home';
    else
        $page = $_REQUEST['page'];
}

#Trata a Definição das rotas
$partes = explode('@', $rotas[$page]);

//Recebe a classe que vou instanciar
$controlador = 'core\\controllers\\'.ucfirst($partes[0]);
$metodo = $partes[1];

//Instancio a Classe e acesso a função
$inst = new $controlador();
$inst->$metodo();


?>