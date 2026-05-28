<?php
require __DIR__ . '/vendor/autoload.php';

use App\Entity\Member;
use App\Entity\Book;
use App\Entity\Movie;
use App\Entity\Loan;
use App\Entity\Music;


$bernard = new Member("Bernard", "Dupond", "b.dupond@gmail.com");
$charlotte = new Member("Charlotte", "Chevalier", "c.chvl@gmail.com");

$alchemised = new Book("Alchemised", "SenYu", 2025, 1024);
$cb = new Movie("Corpse Bride", "Tim Burton", 2005, 4500);
$ash =new Music("Ash", "Seventeen", 2022, 201);
$loan1 = new Loan($bernard, $alchemised);

echo $ash;





