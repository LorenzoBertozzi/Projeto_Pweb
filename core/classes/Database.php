<?php 

namespace core\classes;

use Exception;
use PDO;
use PDOException;

require_once('../config.php');
require_once('../vendor/autoload.php');

class Database{
    private $conexao;
    //Conectar ao banco de dados
    private function conectar(){
        $this->conexao = new PDO(
            'mysql:'.
            'host='.MYSQL_SERVER.';'.
            'dbname='.MYSQL_DATABASE.';'.
            'charset='.MYSQL_CHARSET.';'.
            'port='.MYSQL_PORT, //Meu xampp tá na 3308, a padrao é 3306
            MYSQL_USER,
            MYSQL_SENHA,
            array(PDO::ATTR_PERSISTENT => true)

        );

        //debug
        $this->conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    }

    private function desconectar(){
        $this->conexao = null;
    }

    public function select($sql, $arg = null){
        //verifica se é uma instrução de seleção
        if(!preg_match("/^SELECT/i", $sql))
            throw new Exception('Base da dados - Não é uma instrução de SELECT');
        
        $this->conectar();

        $resultado = null;
        try{
            //Caso houver parametros
            if(!empty($arg)){
                $query = $this->conexao->prepare($sql);
                $query->execute($arg);
                //adiciono os parametros na minha query a ser enviada e pego o objeto retornado
                $resultado = $query->fetchAll(PDO::FETCH_CLASS); 
            }else{
                $query = $this->conexao->prepare($sql);
                $query->execute();
                $resultado = $query->fetchAll(PDO::FETCH_CLASS); 
            }
        }catch(PDOException $errou_ai){
            //Se der erro retorna falso 
            return false;
        }

        $this->desconectar();

        return $resultado;
    }

    public function insert($sql, $arg = null){
        //verifica se é uma instrução de seleção
        if(!preg_match("/^INSERT/i", $sql))
            throw new Exception('Base da dados - Não é uma instrução de INSERT');
        
        $this->conectar();

        $resultado = null;
        try{
            //Caso houver parametros
            if(!empty($arg)){
                $query = $this->conexao->prepare($sql);
                $query->execute($arg);
                //adiciono os parametros na minha query a ser enviada e pego o objeto retornado
                $resultado = $query->fetchAll(PDO::FETCH_CLASS); 
            }else{
                $query = $this->conexao->prepare($sql);
                $query->execute();
                $resultado = $query->fetchAll(PDO::FETCH_CLASS); 
            }
        }catch(PDOException $errou_ai){
            //Se der erro retorna falso 
            return false;
        }

        $this->desconectar();

        return $resultado;
    }

    public function update($sql, $arg = null){
        //verifica se é uma instrução de seleção
        if(!preg_match("/^UPDATE/i", $sql))
            throw new Exception('Base da dados - Não é uma instrução de UPDATE');
        
        $this->conectar();

        $resultado = null;
        try{
            //Caso houver parametros
            if(!empty($arg)){
                $query = $this->conexao->prepare($sql);
                $query->execute($arg);
                //adiciono os parametros na minha query a ser enviada e pego o objeto retornado
                $resultado = $query->fetchAll(PDO::FETCH_CLASS); 
            }else{
                $query = $this->conexao->prepare($sql);
                $query->execute();
                $resultado = $query->fetchAll(PDO::FETCH_CLASS); 
            }
        }catch(PDOException $errou_ai){
            //Se der erro retorna falso 
            return false;
        }

        $this->desconectar();

        return $resultado;
    }

    public function delete($sql, $arg = null){
        //verifica se é uma instrução de seleção
        if(!preg_match("/^DELETE/i", $sql))
            throw new Exception('Base da dados - Não é uma instrução de DELETE');
        
        $this->conectar();

        $resultado = null;
        try{
            //Caso houver parametros
            if(!empty($arg)){
                $query = $this->conexao->prepare($sql);
                $query->execute($arg);
                //adiciono os parametros na minha query a ser enviada e pego o objeto retornado
                $resultado = $query->fetchAll(PDO::FETCH_CLASS); 
            }else{
                $query = $this->conexao->prepare($sql);
                $query->execute();
                $resultado = $query->fetchAll(PDO::FETCH_CLASS); 
            }
        }catch(PDOException $errou_ai){
            //Se der erro retorna falso 
            return false;
        }

        $this->desconectar();

        return $resultado;
    }

    public function statemant($sql, $arg = null){
        //verifica se é uma instrução de seleção
        if(preg_match("/^(SELECT|UPDATE|DELET|INSERT)/i", $sql))
            throw new Exception('Base da dados - Não é uma instrução válida');
        
        $this->conectar();

        $resultado = null;
        try{
            //Caso houver parametros
            if(!empty($arg)){
                $query = $this->conexao->prepare($sql);
                $query->execute($arg);
                //adiciono os parametros na minha query a ser enviada e pego o objeto retornado
                $resultado = $query->fetchAll(PDO::FETCH_CLASS); 
            }else{
                $query = $this->conexao->prepare($sql);
                $query->execute();
                $resultado = $query->fetchAll(PDO::FETCH_CLASS); 
            }
        }catch(PDOException $errou_ai){
            //Se der erro retorna falso 
            return false;
        }

        $this->desconectar();

        return $resultado;
    }


}
