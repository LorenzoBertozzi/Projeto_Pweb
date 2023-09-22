const listaFeedbacks = [
    {
    id : 1,
    srcImage : '../assets/download.jpg',
    nomeUsuario : 'Macaco',
    Comentario : 'hashhahhahahahhhashhahhahahahhhashhahhahahahh',
    },
    {
    id : 2,
    srcImage : '../assets/macaco.jpg',
    nomeUsuario : 'Macaco 2',
    Comentario : 'hashhahhahahahhhashhahhahahahhhashhahhahahahh',
    },
    {
    id : 3,
    srcImage : '../assets/logo.jpg',
    nomeUsuario : 'Macaco 3',
    Comentario : 'hashhahhahahahhhashhahhahahahhhashhahhahahahh',
    },
    {
    id : 3,
    srcImage : '../assets/logo.jpg',
    nomeUsuario : 'Macaco 3',
    Comentario : 'hashhahhahahahhhashhahhahahahhhashhahhahahahh',
    },
    {
    id : 2,
    srcImage : '../assets/macaco.jpg',
    nomeUsuario : 'Macaco 2',
    Comentario : 'hashhahhahahahhhashhahhahahahhhashhahhahahahh',
    }
];

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
        srcImage : 'assets/sup1.jpg',
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
