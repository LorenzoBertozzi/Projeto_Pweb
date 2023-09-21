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



