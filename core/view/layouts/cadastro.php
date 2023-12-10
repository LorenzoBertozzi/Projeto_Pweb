<?php 
  require_once('../config.php');
  require_once('../vendor/autoload.php');

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Suplementos Store | Cadastro</title>

    <!--Icone-->
    <link rel="shortcut icon" href="./assets/icon.ico">
    
    <!--BootStrap-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    
    <!--CSS -->
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <header class="text-center rounded-bottom mx-2 row justify-content-center py-3" style="color: #fff;;">
        <div class="col-4 d-sm-none d-none d-md-block px-5">
           <h3 style="text-align: left;">Máximo Potencial Atlético, <br>Saúde & Bem-estar</h3>
        </div>
        <div class="col-4">
            <a href="?page=home"><img src="./assets/Desktop/menu/logo_constancia.png" alt="Go Home" height="70px"></a>
        </div>
        <div class="col-4 d-sm-none d-none d-md-block">
            <a href="https://www.instagram.com/constanciasuplementos" target="_blank" style="text-decoration: none;">
                <img class="icon-insta mt-2" style="filter: invert(1);" src="https://th.bing.com/th/id/R.4af42c87858bf65a60f6632aaf366a2f?rik=NGuIpcspN7X91g&riu=http%3a%2f%2fpluspng.com%2fimg-png%2finstagram-logo-eps-png-instagram-logo1-instagram-logo-1915.png&ehk=fvtoXiEoQhjKg0l38At0nkWKwoCxRe14IAkiIwAsQRg%3d&risl=&pid=ImgRaw&r=0" height="30px">
                <h3 style="color: #fff;">@constanciasuplementos</h3>
            </a>
        </div>
    </header>

    <section>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card shadow-2-strong" style="border-radius: 1rem;">
                <div class="card-body p-5 text-center">
      
                  <h3 class="mb-5">CADASTRO</h3>

                  <form action="?page=criar_cliente" method="post">
                    <?php //Verifica se as senhas são iguais
                      if(isset($_SESSION['erro'])):
                    ?>
                        <div class="alert alert-danger text-center p-2">
                          <?= $_SESSION['erro']?>
                          <?php unset($_SESSION['erro']) //Destroi o aviso apos ele ter sido apresentado ?> 
                        </div>
                    <?php endif;?>
                    
                    <div class="form-outline mb-4">
                      <label class="form-label" for="nome">Seu Nome</label>
                      <input name="nome" type="text" id="nome-2" class="form-control form-control-lg" />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="email">E-mail</label>
                      <input name="email" type="email" id="email-2" class="form-control form-control-lg" />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="telefone">Telefone</label>
                      <input name="tel" type="tel" id="telefone" class="form-control form-control-lg" />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="data_nascimento">Data de Nascimento</label>
                      <input name="date_nasc" type="date" id="data_nascimento" class="form-control form-control-lg" />
                    </div>
        
                    <div class="form-outline mb-4">
                      <label class="form-label" for="senha">Senha</label>
                      <input name="senha_01" type="password" id="senha" class="form-control form-control-lg" />
                    </div>
                    
                    <div class="form-outline mb-4">
                      <label class="form-label" for="confirm_senha">Confirme sua senha</label>
                      <input name="senha_02" type="password" id="confirm_senha" class="form-control form-control-lg" />
                    </div>
                    
                    <input class="btn btn-primary btn-lg btn-block" type="submit" value="Cadastrar">
                    
                  </form>        
                  
                  <hr class="my-4">                  
                  <button class="btn btn-lg btn-block btn-primary border-0 " style="background-color: #dd4b39; width: 80%;"
                    type="submit"><i class="fab fa-google me-2"></i>Entrar com google</button> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <script src=".\public\js\main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

<?php 
    #Footer
    include "footer.php";
?>