<?php

class ClientFactory {
    public function makeClient(String $type): Client {
        switch($type) {
            case 'N':
                return new NormalClient("Artur");
                break;
            case 'F':
                return new FrequentClient("Frequent Artur");
                break;
            default: 
                throw new Exception("Wrong client");

        }

    }
}

abstract class Client {
    private $name;
    function __construct(String $name) {
        $this->name = $name;
    }

    public function signIn() {
        echo $this->name . " is now signedin \n";
    }

    abstract function getDiscount();
}

class NormalClient extends Client {
    function __construct(String $name) {
        parent::__construct($name);
    }

    public function getDiscount(): Float {
        return 1;
    }
}
class FrequentClient extends Client {
    function __construct(String $name) {
        parent::__construct($name);
    }

    public function getDiscount(): Float {
        return 1.4;
    }
}

$clientFactory = new ClientFactory();

$clients = Array();

try {
    $clients[] = $clientFactory->makeClient('N');
    $clients[] = $clientFactory->makeClient('F');
    $clients[] = $clientFactory->makeClient('G');
    $clients[] = $clientFactory->makeClient('F');
} catch (Exception $error) {
    echo $error->getMessage();
}

var_dump($clients);