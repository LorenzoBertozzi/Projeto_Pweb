<?php 

namespace core\model;

use core\classes\Store;
use core\classes\Database;


class Cliente{
    public function email_ja_registrado($email){
        //Verificar se o email já existe
        $bd = new Database();

        $arg = [
            ':email' => strtolower(trim($email))
        ];
        $query = "SELECT * FROM usuarios WHERE email = :email";
        $resultados = $bd->select($query, $arg);

        if(count($resultados) != 0){
            return true;
        }else{
            return false;
        }
    }

    public function registrar_cliente($post){
        //METER NO BANCO DE DADOS
        $purl = Store::criar_Hash(); #purl = person url
        $args =  [
            ':nome'          => strtolower(trim($post['nome'])), 
            ':email'         => strtolower(trim($post['email'])), 
            ':tel'           => strtolower(trim($post['tel'])), 
            ':date_nasc'     => date($post['date_nasc']),
            ':senha'         => password_hash($post['senha_01'], PASSWORD_DEFAULT), 
            ':purl'          => $purl
        ];
        $query = "INSERT INTO usuarios VALUES(DEFAULT, :email, :senha, :nome, :tel, :date_nasc,NULL, :purl, DEFAULT, NOW() , NULL)";
        $bd = new Database();
        $bd->insert($query, $args);

        return $purl;
    }

    public function validar_email($purl){
        $bd = new Database();
        $args = [':purl' => $purl];
        $result = $bd->select('SELECT * FROM usuarios WHERE purl = :purl', $args);
        
        if(count($result) != 01){
            return false;
        }
        
        $id = $result[0]->id;
        $args = [':id' => $id ];
        $result = $bd->update('UPDATE usuarios SET purl = NULL, user_ativo = 1 WHERE id = :id', $args);

        return true;
    }

    public function validar_login($user, $pass){
        $bd = new Database();
        $args = [
            ':email' => $user
        ];
        $qry = "SELECT * FROM usuarios WHERE email = :email and user_ativo = 1";
        $resultado = $bd->select($qry, $args);
        
        if(count($resultado) != 01)
            return false;
        else{
            $user = $resultado[0];
            //Verificar a senha
            if(!password_verify($pass, $user->senha)){
                return false;
            }
            else
                return $user;
        }
    }
}


?>