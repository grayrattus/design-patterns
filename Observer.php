<?php
interface Observer {
    public function update(Float $price);
}

interface Subject {
    public function register(Observer $o);
    public function unregister(Observer $o);
    public function notifyObservers();
}

class Mail {
    private $email;

    function __construct(String $email) {
        $this->email = $email;
    }

    public function send() {
        echo "Sended email on adress: ". $this->email. "\n";
    }
}

class Mailer implements Subject{
    private $subscribers;
    private $price;


    function __construct() {
        $this->subscribers = Array();
    }
    public function register(Observer $o) {
        $this->subscribers[] = $o;
    }
    public function unregister(Observer $o) {
        $index = array_search($o, $this->subscribers);
        array_splice($this->subscribers, $index, 1);
    }

    public function notifyObservers() {
        foreach($this->subscribers as $subscriber) {
            $subscriber->update($this->price);
        }
    }
    public function newPrice(Float $newPrice) {
        $this->price = $newPrice;
        $this->notifyObservers();
    }
}

class NormalSub extends Mail implements Observer {
    private $subject;
    function __construct(String $email, Subject $subject) {
        parent::__construct($email);

        $this->subject = $subject; 
        $this->subject->register($this);
    }

    public function update(Float $price) {
        echo "New price for normal client: $price ";
        $this->send();
    }
}
class PremiumSub extends Mail implements Observer {
    private $subject;
    function __construct(String $email, Subject $subject) {
        parent::__construct($email);

        $this->subject = $subject; 
        $this->subject->register($this);
    }

    public function update(Float $price) {
        echo "New price for our special premium client: $price ";
        $this->send();
    }
}

$subject = new Mailer();

$normalSub = new NormalSub("kek@gmail.com", $subject);
$premiumSub = new PremiumSub("premiumSubscriber@gmail.com", $subject);

$subject->newPrice(99.9);


$subject->unregister($normalSub);

echo "\n After removing normal client \n";


$subject->newPrice(666.9);