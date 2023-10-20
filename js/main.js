const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const lista_link_nav = [
    {
        id : 1 ,
        alt: 'Proteinas' ,
        href:  '../pages/proteina.html'
    },
    {
        id : 2 ,
        alt: 'Creatina' ,
        href:  '../pages/creatina.html'
    },
    {
        id : 3 ,
        alt: 'Vitaminas' ,
        href:  '../pages/vitaminas.html'
    },
    {   
        id : 4 ,
        alt: 'Acessórios' ,
        href:  '../pages/acessorios.html'
    },
    {
        id : 5 ,
        alt: 'Pré-Treino' ,
        href:  '../pages/pre-trino.html'
    }
];

if(lista_link_nav.length != 0){
    const crop_menu = 
	`
    <nav class="navbar navbar-expand-md bg-body px-5 mt-0">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html"><img src="assets/Desktop/menu/logo_constancia.png" alt="Logo" height="70px"></a>
  
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto" id="nav-ul"></ul>
        <ul class="navbar-nav">
            <li class="nav-item">
                <form class="d-flex" role="search">
                    <div class="search-box">  
                        <input type="text" class="search-text" placeholder="Pesquisar...">
                        <a class="search-btn"><img src="assets/Desktop/menu/lupa.png" style=" height: 30px;"></a>
                    </div>
                </form>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pages/login.html"><img src="assets/Desktop/menu/login-image.png" alt="login" height="30px" ></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pages/carrinho.html"><img src="assets/Desktop/menu/cart.png" alt="carrinho" height="30px"></a>
            </li>
        </ul>
        </div>
    </div>
  </nav>
    `
    document.getElementById("menu-top").innerHTML += crop_menu;

    for(const link of lista_link_nav){
        const menu_nav_li =
        `
        <li class="nav-item">
            <a class="nav-link fs-3" href="${link.href}">${link.alt}</a>
        </li>
        `
        document.getElementById("nav-ul").innerHTML += menu_nav_li;
    } 
}

const listaCarousel = [
    {
        id : 0 ,
        srcImage : 'assets/Desktop/carousel/Carrossel - Whey.jpg',
        altImage : 'Proteinas'
    },
    {
        id : 1 ,
        srcImage : 'assets/Desktop/carousel/Carrossel - Creatinas.png',
        altImage : 'Creatinas'
    },
    {
        id : 2 ,
        srcImage : 'assets/Desktop/carousel/Carrossel - Cachorro.jpg',
        altImage : 'Vitaminas'
    },
    {
        id : 3,
        srcImage : 'assets/Desktop/carousel/Carrossel - Acessórios.jpg',
        altImage : 'Acessórios'
    }
];

if(listaCarousel.length != 0){
    const crop_carousel =
    `
    <div id="demo" class="carousel slide" data-bs-ride="carousel">

    <!-- Indicators/dots -->
    <div id="carousel-indicators" class="carousel-indicators"></div>
    
    <!-- The slideshow/carousel -->
    <div class="carousel-inner px-5" id="carousel-inner"></div>
    
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
                <img src="${carousel.srcImage}" alt="${carousel.altImage}" class="d-block rounded-3" style="width:100% ;">
            </div>
            `
            document.getElementById("carousel-inner").innerHTML += carousel_image; 
        }else{    
            const carousel_image =
            `
            <div class="carousel-item">
                <img src="${carousel.srcImage}" alt="${carousel.altImage}" class="d-block rounded-3" style="width:100% ; height: 40%;">
            </div>
            `
            document.getElementById("carousel-inner").innerHTML += carousel_image;
        }
    }
}

const listaKits = [
    {
        srcKit : "kit1.jpg",
        altKit : "kit1"
    },
    {
        srcKit : "kit2.jpg",
        altKit : "kit2"
    },
    {
        srcKit : "kit3.jpg",
        altKit : "kit3"
    },
    {
        srcKit : "kit4.jpg",
        altKit : "kit4"
    },
    {
        srcKit : "kit1.jpg",
        altKit : "kit1"
    },
    {
        srcKit : "kit1.jpg",
        altKit : "kit1"
    }
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
                    <a href="pages/kits.html" class="btn btn-primary" style="width: 100%; height: 40px; border: 0; border-radius: 5px; background-color: #ef7637;">Ver mais</a>
            </div>
        </div>
        `
        document.getElementById("layout-kits").innerHTML += kitCard;

        if (isMobile) {
            break;
        }
    }
}

const listaFeedbacks = [
    {
    id : 1,
    srcImage : '../assets/########',
    nomeUsuario : 'usuario 1',
    Comentario : 'Comentario deixado pelo usuario',
    },
    {
    id : 2,
    srcImage : '../assets/pfp.jpg',
    nomeUsuario : 'usuario 2',
    Comentario : 'Comentario deixado pelo usuario',
    },
    {
    id : 3,
    srcImage : '../assets/pfp.jpg',
    nomeUsuario : 'usuario 3',
    Comentario : 'Comentario deixado pelo usuario',
    },
    {
    id : 3,
    srcImage : '../assets/pfp.jpg',
    nomeUsuario : 'usuario 4',
    Comentario : 'Comentario deixado pelo usuario',
    },
    {
    id : 2,
    srcImage : '../assets/pfp.jpg',
    nomeUsuario : 'usuario 5',
    Comentario : 'Comentario deixado pelo usuario',
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
        <div class="col-md-12 row d-flex justify-content-center" style="align-self: center;"><img src="${listaFeedbacks[0].srcImage}"></div>
        <h6 class="col-md-12 row d-flex justify-content-center" style="color: #f5f5f5; margin-top: 50px;"> ${listaFeedbacks[0].nomeUsuario} </h6>
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
                    <div class="col-md-12 row d-flex justify-content-center" style="align-self: center;"><img src="${feedback.srcImage}"></div>
                    <h6 class="col-md-12 row d-flex justify-content-center" style="color: #f5f5f5; margin-top: 50px;"> ${feedback.nomeUsuario} </h6>
                    <p style="color : #fff; text-transform: initial; margin-top: 50px;"> ${feedback.Comentario}</p>
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

//objetivo
if (isMobile){
    const objetivos = 
    `
    <h2 class="text-center">QUAL SEU OBJETIVO ?</h2>
    <div class="underline"></div>

    <div class="container row mx-auto g-4 justify-content-center text-center p-5">
      <div class="col-4 col-md-2 col-xxl-6 mx-1 text-center">
        <div class="objetivo-btn">
          <button style="width: 100px; height: 100px;"><a href="-----------------"><img src="assets/Desktop/objetivos/Muscle.png" alt="Massa Muscular" style="height: 75px;"></a></button>
          <p>Massa Muscular</p>
        </div>
      </div>
      <div class="col-4 col-md-2 col-xxl-6 mx-1 text-center">
        <div class="objetivo-btn">
          <button style="width: 100px; height: 100px;"><a href="-----------------"><img src="assets/Desktop/objetivos/Measuring tape.png" alt="Emagrecimento" style="height: 60px;"></a></button>
          <p>Emagrecimento</p>
        </div>
      </div>
      <div class="col-4 col-md-2 col-xxl-6 mx-1 text-center">
        <div class="objetivo-btn">
          <button style="width: 100px; height: 100px;"><a href="-----------------"><img src="assets/Desktop/objetivos/Heart.png" alt="Saúde" style="height: 75px;"></a></button>
          <p>Saúde</p>
        </div>
      </div>
      <div class="col-4 col-md-2 col-xxl-6 mx-1 text-center">
        <div class="objetivo-btn">
          <button style="width: 100px; height: 100px;"><a href="-----------------"><img src="assets/Desktop/objetivos/Energy.png" alt="Energia" style="height: 75px;"></a></button>
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
          <button style="width: 200px; height: 200px;"><a href="-----------------"><img src="assets/Desktop/objetivos/Muscle.png" alt="Massa Muscular" style="height: 150px;"></a></button>
          <p>Massa Muscular</p>
        </div>
      </div>
      <div class="col-8 col-md-4 col-xxl-2 mx-1 text-center">
        <div class="objetivo-btn">
          <button style="width: 200px; height: 200px;"><a href="-----------------"><img src="assets/Desktop/objetivos/Measuring tape.png" alt="Emagrecimento" style="height: 120px;"></a></button>
          <p>Emagrecimento</p>
        </div>
      </div>
      <div class="col-8 col-md-4 col-xxl-2 mx-1 text-center">
        <div class="objetivo-btn">
          <button style="width: 200px; height: 200px;"><a href="-----------------"><img src="assets/Desktop/objetivos/Heart.png" alt="Saúde" style="height: 150px;"></a></button>
          <p>Saúde</p>
        </div>
      </div>
      <div class="col-8 col-md-4 col-xxl-2 mx-1 text-center">
        <div class="objetivo-btn">
          <button style="width: 200px; height: 200px;"><a href="-----------------"><img src="assets/Desktop/objetivos/Energy.png" alt="Energia" style="height: 150px;"></a></button>
          <p>Energia</p>
        </div>
      </div>
    </div>
    `

    document.getElementById("Objetivo").innerHTML += objetivos;
}

//footer
const formasPagamento = ['pix','debito','credito','boleto'];
const dadosEmpresa = [
    {
        email : 'algumacoisadasilva@gmail.com',
        telefone : '(32) 9 1234-1234'
    }];

if(lista_link_nav.length != 0 && !isMobile){
    const titulo = 
    `
    <h2>Constancia Suplementos</h2>
    <div id="forma-de-pagamento"></div>
    <div class="container row mx-auto justify-content-center" id="menu-rodape">
    `
    document.getElementById("footer").innerHTML += titulo;
    if(formasPagamento.length != 0){
        const titulo =
        `
        <p style="text-transform: capitalize; float: left; margin: 10px 50px; ">Formas de Pagamento :</p>
        `    
        document.getElementById("forma-de-pagamento").innerHTML += titulo;
        for(const forma of formasPagamento){
            const printForma =
            `
            <p style="text-transform: capitalize; float: left; margin: 10px 50px;">${forma}</p>   
            `
            document.getElementById("forma-de-pagamento").innerHTML += printForma;
        }
    }
    
    const divs_menu =
    `
    <div class="col-6 col-xxl-6 p-5" id="Atendimento"></div>
    <div class="col-6 col-xxl-6 p-5" id="menu-footer"></div>
    `
    document.getElementById("menu-rodape").innerHTML += divs_menu;

    const menu_footer =
    `
        <h6>Menu</h6>
    `
    document.getElementById("menu-footer").innerHTML += menu_footer;
    for(const link of lista_link_nav)
    {
        const menu_footer =
        `
            <a href="${link.href}" style="text-decoration: none; color: #fff;">${link.alt}</a><br>
        `
        document.getElementById("menu-footer").innerHTML += menu_footer;
    }

    for(const dados of dadosEmpresa){
        const atendimento = 
        `
            <h6>Atendimento</h6>
            <p>E-mail : ${dados.email} <br>telefone : ${dados.telefone}</p>
        `
        document.getElementById("Atendimento").innerHTML += atendimento;
    }  
}else{
    const titulo = 
    `
    <h2 class="my-3">Constancia Suplementos</h2>
    <div class="container row justify-content-center" id="menu-rodape">
    `
    document.getElementById("footer").innerHTML += titulo;
    
    const divs_menu =
    `
    <div class="col-12 col-xxl-12 " id="Atendimento"></div>
    <div class="col-12 col-xxl-12 " id="menu-footer"></div>
    `
    document.getElementById("menu-rodape").innerHTML += divs_menu;

    const menu_footer =
    `
        <h6>Menu</h6>
    `
    document.getElementById("menu-footer").innerHTML += menu_footer;
    for(const link of lista_link_nav)
    {
        const menu_footer =
        `
            <a href="${link.href}" style="text-decoration: none; color: #fff;">${link.alt}</a><br>
        `
        document.getElementById("menu-footer").innerHTML += menu_footer;
    }

    for(const dados of dadosEmpresa){
        const atendimento = 
        `
            <h6>Atendimento</h6>
            <p>${dados.email}<br>${dados.telefone}</p>
        `
        document.getElementById("Atendimento").innerHTML += atendimento;
    }  
}