<?php 

namespace core\controladores;

use core\classes\Functions;

class Main{
    public function index(){
        Functions::Layout([
            'layouts/header',
            'home',
            'layouts/footer',

        ]);
    }

    public function cadastro(){
        Functions::Layout([
            'layouts/cadastro'
        ]);
    }

    public function carrinho(){
        Functions::Layout([
            'layouts/header',
            'carrinho',
            'layouts/footer',
        ]);
    }
}
 


?>