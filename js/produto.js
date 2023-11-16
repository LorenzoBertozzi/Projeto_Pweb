const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const lista_link_nav = [
    {
        id : 1 ,
        alt: 'Proteinas' ,
        href:  'proteinas.html'
    },
    {
        id : 2 ,
        alt: 'Creatina' ,
        href:  'creatina.html'
    },
    {
        id : 3 ,
        alt: 'Vitaminas' ,
        href:  'vitaminas.html'
    },
    {   
        id : 4 ,
        alt: 'Acessórios' ,
        href:  'acessorios.html'
    },
    {
        id : 5 ,
        alt: 'Pré-Treino' ,
        href:  'pre-trino.html'
    }
];

if(lista_link_nav.length != 0){
    const crop_menu = 
	`
    <nav class="navbar navbar-expand-md bg-body px-5 mt-0">
    <div class="container-fluid">
        <a class="navbar-brand" href="../index.html"><img src="../assets/Desktop/menu/logo_constancia.png" alt="Logo" height="70px"></a>
  
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
                        <a class="search-btn"><img src="../assets/Desktop/menu/lupa.png" style=" height: 30px;"></a>
                    </div>
                </form>
            </li>
            <li class="nav-item">
                <div class="dropdown">
                    <button class="btn border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../assets/Desktop/menu/login-image.png" alt="login" height="30px" >
                    </button>
                    <div class="dropdown-menu dropdown-menu-end justify-content-center text-center">
                        <form class="px-4 py-3">
                          <div class="mb-3">
                            <label for="exampleDropdownFormEmail1" class="form-label">E-mail</label>
                            <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
                          </div>
                          <div class="mb-3">
                            <label for="exampleDropdownFormPassword1" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
                          </div>
                          <button type="submit" class="btn btn-primary">Entrar</button>
                        </form>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="./pages/cadastro.html">Novo aqui? Cadastre-se</a>
                        <a class="dropdown-item" href="#">Esqueceu sua senha?</a>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../pages/carrinho.html"><img src="../assets/Desktop/menu/cart.png" alt="carrinho" height="30px"></a>
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

//produto
const lista_produtos = [
    {
        id : 1 ,
        nome: 'Super Whey (REFIL-900G) Max Titanium Baunilha',
        categoria : 'proteina',
        alt: 'porteina max',
        preco : 63.15 ,
        href:  'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRefSAXWjIFB0uZPwu0Pqdn8D84xiLZFSg3qYWv25kpqza11CVYBsovQ2hWsRzFepOKuQVBPM_xhL07GhgI9n4X99Kk4-JwJ8xur5f0KQHxAPz2CXGrn3wo5Q&usqp=CAE'
    },
    {
        id : 2 ,
        nome: '(top) Whey Protein Concentrado 1kg',
        categoria : 'proteina',
        alt: 'proteina growth',
        preco : 99.00 ,
        href:  'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSehGs2pNCDezBO3so1cswGdNbsPKyhdqkRLyEmpRg089mGa4OqYI0qmUxMt_uQvtv0OrYa2YXw7LMrSgOqyiyv4ErjwGTw&usqp=CAE'
    },
    {
        id : 3 ,
        nome: 'Whey Protein 100% 2kg',
        categoria : 'proteina',
        alt: 'porteina chocola',
        preco : 83.32 ,
        href:  'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRsrCoZb5uht0C1icbfsP88qmybCUJ62VXbb7Kfls1O8jUapwpMhEzmbNQMLJ-VemFuAUZeUpNcPX4hd-RNcuq2itzOKvuZaMdJadXsjegx7WmH92rJTjf0&usqp=CAE'
    },
    {
        id : 1 ,
        nome: 'Super Whey (REFIL-900G) Max Titanium Baunilha',
        categoria : 'proteina',
        alt: 'porteina max',
        preco : 63.15 ,
        href:  'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRefSAXWjIFB0uZPwu0Pqdn8D84xiLZFSg3qYWv25kpqza11CVYBsovQ2hWsRzFepOKuQVBPM_xhL07GhgI9n4X99Kk4-JwJ8xur5f0KQHxAPz2CXGrn3wo5Q&usqp=CAE'
    },

];

if(lista_produtos.length != 0){
    const crop_top_menu =
    `
    <div class="container mydiv">
        <div class="row" id="layout-produto">
        </div>
    </div>
    `
    document.getElementById("produtos").innerHTML += crop_top_menu ;

    for(const produto of lista_produtos){
        const item_produto =
        `
        <div class="col-md-4">
            <div class="bbb_deals">
                <div class="bbb_deals_slider_container">
                    <div class=" bbb_deals_item">
                        <div class="bbb_deals_image"><img src="${produto.href}" alt="${produto.alt}" height="400px" ></div>
                        <div class="my-3">
                            <div class="bbb_deals_item_name">${produto.nome}</div>
                            <div class="bbb_deals_item_price ml-auto">R$${produto.preco}</div>
                        </div>
                        <div class="my-0">
                            <button class="btn btn-lg btn-block btn-primary border-0 " style="background-color: #f07a32; width: 80%;"
                                type="submit"><i class="fab fa-google me-2"></i>Adicionar ao carrinho</button>
                            <button class="btn btn-lg mb-2 mt-1 border-2" style="background-color: transparent; color : #f91bb2; border-color: #f91bb2;  width: 80%;"
                                type="submit"><i class="fab fa-facebook-f me-2"></i>Ver Mais</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        document.getElementById("layout-produto").innerHTML += item_produto;

    }


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
