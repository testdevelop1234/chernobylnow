<?php
header('Content-Type: text/html; charset=utf-8'); 
ini_set('error_reporting', E_ALL); error_reporting(E_ALL);

// $data = json_decode(file_get_contents('php://input'));


$test = '{"email":"test@test.com","name":"John Smith","passport":"1234PASSPORT","citizenship":"UA","dateofbirth":"2012-12-11T22:00:00.000Z","phone":"380966475414","tourtype":"group","tourdate":"2012-12-11T22:00:00.000Z","tourlist":{"option1":"Мемориал героям-чернобыльцам (АПК Чернобыльской АЭС)","option2":"Обводной канал","option3":"Смотровая площадка объекта \"Укрытие\"","option4":"Обзор г. Припять: отель “Полесье”, стадион, школа, бассейн, больница, главная площадь","option5":"Объект «Чернобыль-2»","option6":"Обзор м. Чернобыль: мемориал “Тем, кто спас мир”, Свято-Ильинский храм, Парк Славы."},"grouptourlist":"Test\nTestname\nTestnamename"}';
$data = json_decode($test);

print_r($data);

echo "\n\n\n\n\n\n";

class Order
{
  public function __construct($email, $name, $passport, $citizenship, $dateofbirth, $phone, $tourtype, $tourdate, $options, $grouptourlist) 
  {
    $this->email = $email;
    $this->name = $name;
    $this->passport = $passport;
    $this->citizenship = $citizenship;
    $this->dateofbirth = $dateofbirth;
    $this->phone = $phone;
    $this->tourtype = $tourtype;
    $this->tourdate = $tourdate;
    $this->options = $options;
    $this->grouptourlist = $grouptourlist;
  }
  
  public function sendEmail() 
  {
    $to = 'mdemchuk22@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
    $email_subject = "Website Contact Form:  $name";
    $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
    $headers .= "Reply-To: $email_address";   
    mail($to,$email_subject,$email_body,$headers);
  }
  
};

class MakeOrder 
{
  public function setEmail($v) 
  {
    $this->email = $v;
    return $this;
  }
  
  public function setName($v) 
  {
    $this->name = $v;
    return $this;
  }
  
  public function setPassport($v) 
  {
    $this->passport = $v;
    return $this;
  }
  
  public function setCitizenship($v) 
  {
    $this->citizenship = $v;
    return $this;
  }
  
  public function setDateOfBirth($v) 
  {
    $this->dateofbirth = $v;
    return $this;
  }
  
  public function setPhone($v) 
  {
    $this->phone = $v;
    return $this;
  }
  
  public function setTourType($v) 
  {
    $this->tourtype = $v;
    return $this;
  }
  
  public function setTourDate($v) 
  {
    $this->tourdate = $v;
    return $this;
  }
  
  public function setOptions($v) 
  {
    $this->options = $v;
    return $this;
  }
  
  public function setGroupTourList($v) 
  {
    $this->grouptourlist = $v;
    return $this;
  }
  
  public function createOrder() {
    return new Order($this->email, $this->name, $this->passport, $this->citizenship, $this->dateofbirth, $this->phone, $this->tourtype, $this->tourdate, $this->options, $this->grouptourlist);
  }
}


$makeOrder = new MakeOrder();
$order = $makeOrder->
  setEmail($data->email)
  ->setName($data->name)
  ->setPassport($data->passport)
  ->setCitizenship($data->citizenship)
  ->setDateOfBirth($data->dateofbirth)
  ->setPhone($data->phone)
  ->setTourType($data->tourtype)
  ->setTourDate($data->tourdate)
  ->setOptions($data->options)
  ->setGroupTourList($data->grouptourlist)
  ->createOrder();

echo $order->email;
echo $order->passport;
$order->sendEmail();
