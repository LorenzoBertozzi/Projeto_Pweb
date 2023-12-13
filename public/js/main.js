const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Carrossel -->
const listaCarousel = [
    {
        id : 0 ,
        srcImage : './assets/Desktop/carousel/Carrossel - Whey.jpg',
        altImage : 'Proteinas',
        href     : '?page=produtos&c=proteinas'
    },
    {
        id : 1 ,
        srcImage : './assets/Desktop/carousel/Carrossel - Creatinas.png',
        altImage : 'Creatinas',
        href     : '?page=produtos&c=creatinas'
    },
    {
        id : 2 ,
        srcImage : './assets/Desktop/carousel/Carrossel - Cachorro.jpg',
        altImage : 'Vitaminas',
        href     : '?page=produtos&c=vitaminas'
    },
    {
        id : 3,
        srcImage : './assets/Desktop/carousel/Carrossel - Acessórios.jpg',
        altImage : 'Acessórios',
        href     : '?page=produtos&c=acessorios'
    }
];

if(listaCarousel.length != 0){
    const crop_carousel =
    `
    <div id="demo" class="carousel slide" data-bs-ride="carousel">

    <!-- Indicators/dots -->
    <div id="carousel-indicators" class="carousel-indicators"></div>
    
    <!-- The slideshow/carousel -->
    <div class="carousel-inner px-2" id="carousel-inner"></div>
    
    <!-- Left and right controls/icons -->
    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev" >
      <span class="carousel-control-prev-icon" ></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
    </div>
    `
    document.getElementById("Apresentação-itens").innerHTML += crop_carousel;

    for(const carousel of listaCarousel){   
        if(carousel.id == 0){
            const carousel_indicators = 
            `
            <button type="button" data-bs-target="#demo" data-bs-slide-to="${carousel.id}" class="active"></button>
            `
            document.getElementById("carousel-indicators").innerHTML += carousel_indicators;
        }else{    
            const carousel_indicators = 
            `
            <button type="button" data-bs-target="#demo" data-bs-slide-to="${carousel.id}" ></button>
            `
            document.getElementById("carousel-indicators").innerHTML += carousel_indicators;
        }
        
        if(carousel.id == 0){
            const carousel_image = 
            `
            <div class="carousel-item active">
              <a href="${carousel.href}">
                <img src="${carousel.srcImage}" alt="${carousel.altImage}" class="d-block rounded-3" style="width:100% ;">
              </a>
            </div>
            `
            document.getElementById("carousel-inner").innerHTML += carousel_image; 
        }else{    
            const carousel_image =
            `
            <div class="carousel-item">
              <a href="${carousel.href}">
                <img src="${carousel.srcImage}" alt="${carousel.altImage}" class="d-block   rounded-3" style="width:100% ; height: 40%;">
              </a>
            </div>
            `
            document.getElementById("carousel-inner").innerHTML += carousel_image;
        }
    }
}

// Kits em destaque-->
const listaKits = [
    {
        srcKit    : "./assets/kits/kit01.jpg",
        altKit    : "kit1",
        ahref_id  : "27"
    },
    {
        srcKit : "./assets/kits/kit02.jpg",
        altKit : "kit2",
        ahref_id  : "28"
    },
    {
        srcKit : "./assets/kits/kit01.jpg",
        altKit : "kit1",
        ahref_id  : "27"
    },
    {
        srcKit : "./assets/kits/kit02.jpg",
        altKit : "kit2",
        ahref_id  : "27"
    },
    {
        srcKit : "./assets/kits/kit01.jpg",
        altKit : "kit1",
        ahref_id  : "27"
    },
    {
        srcKit : "./assets/kits/kit02.jpg",
        altKit : "kit2",
        ahref_id  : "27"
    },
]; 

if(listaKits.length != 0){
    const cropKits = 
    `
    <h2 class="text-center">Produtos que estão bombando!</h2>

    <div class="container row mx-auto justify-content-center" id="layout-kits"></div>
    `
    document.getElementById("kits").innerHTML += cropKits;
    for(kit of listaKits){
        const kitCard = 
        `
        <div class="col-8 col-md-4 col-xxl-2 py-4">
            <div class="card" style="background-color: #292c31; border: 0;">
                <img class="bd-placeholder-img card-img-top rounded" width="100%" height="400"  src="${kit.srcKit}" alt="${kit.altKit}"> 
            </div>
            <div class="card-body py-1">
                    <a href="?page=prod_unico&id=${kit.ahref_id}" class="btn btn-primary" style="width: 100%; height: 40px; border: 0; border-radius: 5px; background-color: #ef7637;">Ver mais</a>
            </div>
        </div>
        `
        document.getElementById("layout-kits").innerHTML += kitCard;
        if (isMobile) {
            break;
        }
    }
}

// Feedback-->
const listaFeedbacks = [
    {
    id : 1,
    srcImage : './assets/feedback/avatar-gen02.jpg',
    nomeUsuario : 'Fernando',
    rating : '&#11088;&#11088;&#11088;&#11088;&#11088;',
    Comentario : 'Ótimos produtos',
    },

    {
    id : 2,
    srcImage : './assets/feedback/avatar-gen01.jpg',
    nomeUsuario : 'Luiz',
    rating : '&#11088;&#11088;&#11088;&#11088;&#11088;',
    Comentario : 'Quem fez o site é muito forte ',
    },

    {
    id : 3,
    srcImage : './assets/feedback/avatar-gen03.jpg',
    nomeUsuario : 'Guilherme',
    rating : '&#11088;&#11088;&#11088;&#11088;&#11088;',
    Comentario : 'Acessórios são muito úteis',
    },

    {
    id : 4,
    srcImage : './assets/feedback/avatar-gen04.jpg',
    nomeUsuario : 'Lorenzo',
    rating : '&#11088;&#11088;&#11088;&#11088;&#11088;',
    Comentario : 'Melhor pré-treino que já comprei',
    },

    {
    id : 5,
    srcImage : './assets/feedback/avatar-gen05.jpg',
    nomeUsuario : 'Natalia',
    rating : '&#11088;&#11088;&#11088;&#11088;&#11088;',
    Comentario : 'Site nota 10',
    }
];

if(listaFeedbacks.length > 0){
    const areaFeedback = 
    `
      <h2 style="padding-top: 20px;">FeedBack de quem confia !</h2>
      <div id="feedback-layout"></div>
      <p style="padding-bottom: 20px;">Não tem jeito! A honra é maxima, sempre! <br> Foco total naquilo que voce precisa.</p> 
    `
    document.getElementById("feedback").innerHTML += areaFeedback;

    if (isMobile) {
        const cartaoFeedback = 
        `
        <div class="col-10 col-md-2 col-xxl-2 py-4" id="cartaoFeedback">
          <div class="card" style="background-color: #292c31; border: 0;">
            <div class="col-md-12 row d-flex justify-content-center" style="align-self: center;"><img src="${listaFeedbacks[0].srcImage}">
            </div>
            <p class="col-md-12 row d-flex justify-content-center" style="color: #f5f5f5; margin-top: 50px;"> ${listaFeedbacks[0].rating}</p>
            <h6 class="col-md-12 row d-flex justify-content-center" style="color: #f5f5f5; margin-top: 50px;"> ${listaFeedbacks[0].nomeUsuario}</h6>
            <p style="color : #fff; text-transform: initial; margin-top: 50px;"> ${listaFeedbacks[0].Comentario}</p>
          </div>
        </div>    
        `
        document.getElementById("feedback-layout").innerHTML += cartaoFeedback; 
    }else{
        let cont = 0;
        for(const feedback of listaFeedbacks){
            cont++;
            const cartaoFeedback = 
            `
            <div class="col-12 col-md-2 col-xxl-2 py-4" id="cartaoFeedback">
              <div class="card mx-2" style="background-color: #292c31; border: 0;">
                  <img class="card-img-top rounded-circle mx-auto d-block mt-3" src=${feedback.srcImage} alt="Card image" style="height: 100px;width: 100px;">
                  <div class="card-body" style="color:#fff ;">
                      <h4 class="card-title text-center my-3">${feedback.nomeUsuario}</h4>
                      <p class="card-text">${feedback.Comentario}</p>
                  </div>
              </div>
          </div>    
            `
            document.getElementById("feedback-layout").innerHTML += cartaoFeedback; 
            if(cont >= 5){
                break;
            }
        }
    }
    
}

// Links p/ Páginas de Objetivos-->
if (isMobile){
    const objetivos = 
    `
    <h2 class="text-center">QUAL SEU OBJETIVO ?</h2>
    <div class="underline"></div>

    <div class="container row mx-auto g-4 justify-content-center text-center p-5">
      <div class="col-4 col-md-2 col-xxl-6 mx-1 text-center">
        <div class="objetivo-btn">
          <button style="width: 100px; height: 100px;"><a href="?page=produtos&c=proteinas"><img src="./assets/Desktop/objetivos/Muscle.png" alt="Massa Muscular" style="height: 75px;"></a></button>
          <p>Massa Muscular</p>
        </div>
      </div>
      <div class="col-4 col-md-2 col-xxl-6 mx-1 text-center">
        <div class="objetivo-btn">
          <button style="width: 100px; height: 100px;"><a href="?page=produtos&c=vitaminas"><img src="./assets/Desktop/objetivos/Measuring tape.png" alt="Emagrecimento" style="height: 60px;"></a></button>
          <p>Emagrecimento</p>
        </div>
      </div>
      <div class="col-4 col-md-2 col-xxl-6 mx-1 text-center">
        <div class="objetivo-btn">
          <button style="width: 100px; height: 100px;"><a href="?page=produtos&c=vitaminas"><img src="./assets/Desktop/objetivos/Heart.png" alt="Saúde" style="height: 75px;"></a></button>
          <p>Saúde</p>
        </div>
      </div>
      <div class="col-4 col-md-2 col-xxl-6 mx-1 text-center">
        <div class="objetivo-btn">
          <button style="width: 100px; height: 100px;"><a href="?page=produtos&c=pretreino"><img src="./assets/Desktop/objetivos/Energy.png" alt="Energia" style="height: 75px;"></a></button>
          <p>Energia</p>
        </div>
      </div>
    </div>
    `
    document.getElementById("Objetivo").innerHTML += objetivos;
}else{
    const objetivos = 
    `
    <h2 class="text-center">QUAL SEU OBJETIVO ?</h2>
    <div class="underline"></div>

    <div class="container row mx-auto g-4 justify-content-center text-center p-5">
      <div class="col-8 col-md-4 col-xxl-2 mx-1 text-center">
        <div class="objetivo-btn">
          <button style="width: 200px; height: 200px;"><a href="?page=produtos&c=proteinas"><img src="./assets/Desktop/objetivos/Muscle.png" alt="Massa Muscular" style="height: 150px;"></a></button>
          <p>Massa Muscular</p>
        </div>
      </div>
      <div class="col-8 col-md-4 col-xxl-2 mx-1 text-center">
        <div class="objetivo-btn">
          <button style="width: 200px; height: 200px;"><a href="?page=produtos&c=vitaminas"><img src="./assets/Desktop/objetivos/Measuring tape.png" alt="Emagrecimento" style="height: 120px;"></a></button>
          <p>Emagrecimento</p>
        </div>
      </div>
      <div class="col-8 col-md-4 col-xxl-2 mx-1 text-center">
        <div class="objetivo-btn">
          <button style="width: 200px; height: 200px;"><a href="?page=produtos&c=vitaminas"><img src="./assets/Desktop/objetivos/Heart.png" alt="Saúde" style="height: 150px;"></a></button>
          <p>Saúde</p>
        </div>
      </div>
      <div class="col-8 col-md-4 col-xxl-2 mx-1 text-center">
        <div class="objetivo-btn">
          <button style="width: 200px; height: 200px;"><a href="?page=produtos&c=pretreino"><img src="./assets/Desktop/objetivos/Energy.png" alt="Energia" style="height: 150px;"></a></button>
          <p>Energia</p>
        </div>
      </div>
    </div>
    `
    document.getElementById("Objetivo").innerHTML += objetivos;
}