<?php 

namespace core\classes;

use Exception;

class Functions{
    public static function Layout($estruturas, $dados = null){
        //Apresentar as páginas contindas na views
        if(!is_array($estruturas))
            throw new Exception('Coleção de estruturas inválidas');

        if(!empty($dados) && is_array($dados)){
            extract($dados);

        }
        
        foreach($estruturas as $i){
            include("../core/view/$i.php");
        }

    }

}

?>