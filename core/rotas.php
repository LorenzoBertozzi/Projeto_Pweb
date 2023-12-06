<?php 
#páginas
$rotas = [
    'home' => 'main@index',
    'cadastro' => 'main@cadastro',
    'carrinho' => 'main@carrinho'
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
$controlador = 'core\\controladores\\'.ucfirst($partes[0]);
$metodo = $partes[1];

//Instancio a Classe e acesso a função
$inst = new $controlador();
$inst->$metodo();


?>