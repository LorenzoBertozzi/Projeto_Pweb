const listaFeedbacks = [
    {
    id : 1,
    srcImage : '../assets/pfp.jpg',
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
}

let limit = 0;
for(const feedback of listaFeedbacks){
    limit++;
    const cartaoFeedback = 
    `
    <div class="cartaoFeedback">
        <img src="${feedback.srcImage}" alt="${feedback.nomeUsuario}">
        <h4 style="color: #f5f5f5; margin-top: 50px;"> ${feedback.nomeUsuario} </h4>
        <p style="color : #fff; text-transform: initial; margin-top: 50px;"> ${feedback.Comentario}</p>
    </div>
    `
    
    document.getElementById("feedback-layout").innerHTML += cartaoFeedback; 
    if(limit >= 5){
        break;
    }
}

const listaCarousel = [
    {
        id : 0 ,
        srcImage : '../assets/Carrossel-Whey.jpg',
        altImage : 'Proteinas'
    },
    {
        id : 1 ,
        srcImage : 'assets/sup2.jpg',
        altImage : 'Creatinas'
    },
    {
        id : 2 ,
        srcImage : 'assets/sup3.jpg',
        altImage : 'Vitaminas'
    },
    {
        id : 3,
        srcImage : 'assets/sup4.jpg',
        altImage : 'Acessórios'
    }
    ,
    {
        id : 4,
        srcImage : 'assets/sup5.jpg',
        altImage : 'Pre-Treino'
    }
];

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
            <img src="${carousel.srcImage}" alt="${carousel.altImage}" class="d-block" style="width:100% ; height: 40%;">
        </div>
        `
        document.getElementById("carousel-inner").innerHTML += carousel_image; 
    }else{    
        const carousel_image =
        `
        <div class="carousel-item">
            <img src="${carousel.srcImage}" alt="${carousel.altImage}" class="d-block" style="width:100% ; height: 40%;">
        </div>
        `
        document.getElementById("carousel-inner").innerHTML += carousel_image;
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
        srcKit : "kit5.jpg",
        altKit : "kit5"
    },
    {
        srcKit : "kit5.jpg",
        altKit : "kit5"
    }
];

for(const kits of listaKits){
    const cartaoKit = 
    `
    <div class="kit">
        <div class="kit-image">
            <img src="${kits.srcKit}" alt="${kits.altKit}">
        </div>
        <div class="kit-btn"><button> Ver Mais</button></div>
    </div>
    `
    document.getElementById("kits-layout").innerHTML += cartaoKit;
}

const dadosEmpresa = [
    {
        email : 'algumacoisadasilva@gmail.com',
        telefone : '(32) 9 1234-1234'
    }
];

for(const dados of dadosEmpresa){
    const atendimento = 
    `
        <h6>Atendimento</h6>
        <p>E-mail : ${dados.email} <br>tel : ${dados.telefone}</p>
    `
    document.getElementById("Atendimento").innerHTML += atendimento;
}

const linksNav = [
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

{       
    for(const link of linksNav)
    {
        const menu =
        `
            <li class="nav-item" ><a class="nav-link" href="${link.href}">${link.alt}</a></li>
        `
        document.getElementById("celular-nav1").innerHTML += menu;
    }
    const menu_footer =
    `
        <h6>Menu</h6>
    `
    document.getElementById("menu-footer").innerHTML += menu_footer;
    for(const link of linksNav)
    {
        const menu_footer =
        `
            <a href="${link.href}">${link.alt}</a><br>
        `
        document.getElementById("menu-footer").innerHTML += menu_footer;
    }
}

const formasPagamento = ['pix','debito','credito','boleto'];
{
    const titulo =
    `
        <p>Formas de Pagamento :</p>
    `    
    document.getElementById("forma-de-pagamento").innerHTML += titulo;

    for(const forma of formasPagamento){
        const printForma =
        `
            <p style="text-transform: capitalize;">${forma}</p>   
        `
        document.getElementById("forma-de-pagamento").innerHTML += printForma;
    }
}