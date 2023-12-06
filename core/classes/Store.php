<?php 

namespace core\classes;
use Exception;

class Store{
    public static function cliente_logado(){
        return isset($_SESSION['cliente']);
    }
}

?>