<?php 

namespace core\model;

use core\classes\Database;
use core\classes\Store;

class Produtos{

    public function lista_produtos($categoria){
        $bd = new Database();
        $produtos = $bd->select("SELECT * FROM produtos WHERE visivel = 1 ");
        
        return $produtos;
    }
//WHERE visivel = 1 AND estoque>0 AND categoria = ".$categoria

}


?>