<?php 
    require_once('../config.php');
    require_once('../vendor/autoload.php');
?>


<!--Carrossel-->
<section id="Apresentação-itens"></section>

<!--Benefícios da loja-->
<section class="p-5">
  <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 px-3">
    <div class="d-flex align-items-center">
      <div><i class="bi bi-x-diamond fs-1"></i></div>
      <div>
        <div class="ms-3 mb-1">PAGUE PELO PIX</div>
        <div class="texto-menor ms-3">Ganhe 5% OFF em
          pagamentos via PIX</div>
      </div>
    </div>

    <div class="d-flex align-items-center">
      <div><i class="bi bi-arrow-repeat fs-1"></i></div>
      <div>
        <div class="ms-3 mb-1">TROCA GRÁTIS</div>
        <div class="texto-menor ms-3">Fique livre para trocar em até 30 dias.</div>
      </div>
    </div>

    <div class="d-flex align-items-center">
      <div><i class="bi bi-flower1 fs-1"></i></div>
      <div>
        <div class="ms-3 mb-1">SUSTENTABILIDADE</div>
        <div class="texto-menor ms-3">Produtos sustentaveis, que respeita o meio ambiente.</div>
      </div>
    </div>
  </div>
</section>

<!--Kits em destaque-->
<section id="kits"></section> 

<!--Links p/ Páginas de Objetivos-->
<section id="Objetivo"></section>

<!--Feedback-->
<section id="feedback" class="mx-2 rounded-3"></section>

<!--Frame do Instagram-->
<section id="instagram" class="mx-2 mt-3 rounded-3" > 
  <iframe class="rounded-3" id="frame" width="100%" height="400px" style="background-color: #292c31;"  src="https://www.instagram.com/constanciasuplementos/embed" frameborder="0"></iframe>
</section>

<!--Leads para Newspaper-->
<section id="Cadastro-email" class="mx-2 my-3 rounded-3 py-3 text-center" style="background-color: #ff0f7c; border : 0;">
    <h5 style="color: #fff;">
      Cadastre seu E-mail e receba promoções e novidades exclusivas da constancia Suplementos
    </h5>
    <div class="input-group my-3 justify-content-center">
      <form action='/' method='post'>
        <input type='text' name='pesquisa' placeholder='**********@mail.com'>
        <button type='submit'>Enviar</button>
      </form>
    </div>
</section>

<script src="../public/js/main.js"></script>

