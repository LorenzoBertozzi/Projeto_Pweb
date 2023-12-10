<?php 

namespace core\classes;
use Exception;

class Store{
    public static function cliente_logado(){
        return isset($_SESSION['cliente']);
    }

    public static function criar_Hash($num = 13){
        //Caracteres possiveis
        $chars = '01234567890123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return substr(str_shuffle($chars), 0, $num);        
    }
}

?>