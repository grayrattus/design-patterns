<?php
interface ThrowableObject {
    public function throwing();
} 

class CanThrow implements ThrowableObject {
    public function throwing() {
        echo "Throwing object \n";
    }
}

class CantThrow implements ThrowableObject {
    public function throwing() {
        echo "Can't throw object \n";
    }
}

class Item {
    private $throwableType;

    function __construct(ThrowableObject $throwableType) {
        $this->throwableType = $throwableType;

    }

    public function tryToThrow(){
        $this->throwableType->throwing();
    }
}

class Sword extends Item {

    function __construct() {
        parent::__construct(new CantThrow());
    }
}
class Bow extends Item {

    function __construct() {
        parent::__construct(new CanThrow());
    }
}

$mySword = new Sword();
$myBow = new Bow();

$myBow->tryToThrow();
$mySword->tryToThrow();