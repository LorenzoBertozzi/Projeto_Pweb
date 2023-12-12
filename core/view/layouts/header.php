<?php 

require_once('../config.php');
require_once('../vendor/autoload.php');

use core\classes\Store;
use core\classes\Database;

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Loja de Suplementos</title>
  <!--Icone-->
  <link rel="shortcut icon" href=".\assets\icon.ico">
  
  <!--CSS -->
  <link rel="stylesheet" href=".\css\style.css">
  
  <!--BootStrap-->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>

  <header class="text-center rounded-bottom mx-2" style="color: #fff;">
    <p> Mande um direct "VIM PELO SITE" em nosso insta e ganhe R$20,00 </p>
  </header>

  <nav class="navbar navbar-expand-md bg-body px-5 mt-0">

  <a class="navbar-brand" href="?page=home"><img src="./assets/Desktop/menu/logo_constancia.png" alt="Logo" height="70px"></a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav me-auto" id="nav-ul"><!--Navbar das Páginas de produtos-->
    <?php
      
      $consulta = new Database();
      $linha = $consulta->select("select * from navbar");
      foreach($linha as $iten){
        $link_pag = $iten->link;
        echo "<li class=\"nav-item\">
        <a class=\"nav-link fs-3\" href=\"$link_pag\">".$iten->nome_pagina."</a>
        </li>";
      }
    ?>
  </ul><!--Navbar das Páginas de produtos-->

  <ul class="navbar-nav"><!--Busca|Carrinho|Login-->
            <li class="nav-item"><!--Busca-->
                <form class="d-flex" role="search">
                    <div class="search-box">  
                        <input type="text" class="search-text" placeholder="Pesquisar...">
                        <a class="search-btn"><img src="./assets/Desktop/menu/lupa.png" style=" height: 30px;"></a>
                    </div>
                </form>
            </li><!--Busca-->
            <li class="nav-item"><!--Login-->     
                <!--Se o cliente estiver logado mostra o perfil -->           
                <?php 
                if(Store::cliente_logado()):?>
                  <div class="dropdown">
                    <button class="btn border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="./assets/Desktop/menu/user-icon.png" alt="login" height="40px" >
                    </button>
                    <div class="dropdown-menu dropdown-menu-end justify-content-center text-center">                        
                        <a class="dropdown-item" href="?page=cadastro">Minha Conta</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="?page=logout">Logout</a>                        
                    </div>
                </div>

                <?php else:?>
                <div class="dropdown">
                    <button class="btn border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="./assets/Desktop/menu/login-image.png" alt="login" height="30px" >
                    </button>
                    <div class="dropdown-menu dropdown-menu-end justify-content-center text-center">
                        <form class="px-4 py-3" method="post" action="?page=login">
                        <?php if(isset($_SESSION['erro'])): ?>
                            <div class="alert alert-danger text-center p-2">
                              <?= $_SESSION['erro']?>
                              <?php unset($_SESSION['erro']) //Destroi o aviso apos ele ter sido apresentado ?> 
                            </div>
                        <?php endif;?>

                          <div class="mb-3">
                              <label for="exampleDropdownFormEmail1" class="form-label">E-mail</label>
                              <input type="email" class="form-control" id="email" name="email" placeholder="email@example.com">
                          </div>
                          <div class="mb-3">
                              <label for="exampleDropdownFormPassword1" class="form-label">Senha</label>
                              <input type="password" class="form-control" id="senha" name="senha" placeholder="Password">
                          </div>
                          <button type="submit" class="btn btn-primary">Entrar</button>
                        </form>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="?page=cadastro">Novo aqui? Cadastre-se</a>
                        <a class="dropdown-item" href="#">Esqueceu sua senha?</a>
                    </div>
                </div>
                <?php endif;?>
            </li><!--Login-->
            <li class="nav-item"><!--Carrinho-->
                <a class="nav-link" href="?page=carrinho"><img src="./assets/Desktop/menu/cart.png" alt="carrinho" height="30px"></a>
            </li><!--Carrinho-->
        </ul>
  </div>
</nav>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>

