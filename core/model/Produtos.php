<?php 

namespace core\model;

use core\classes\Database;

class Produtos{

    public function lista_produtos($categoria){
        $bd = new Database();
        $query = "SELECT * FROM produtos WHERE visivel = 1 AND categoria = '$categoria'";
        $produtos = $bd->select($query);
        
        return $produtos;
    }

}


?>