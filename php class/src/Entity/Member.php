<?php

namespace App\Entity;

class Member
{
    public function __construct(
        private string $firstname,
        private string $lastname,
        private string $email,
    ) {
    }

    // Methods
    public function getFirstname(): string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): void
    {
        $this->firstname = $firstname;
    }

    public function getLastname(): string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): void
    {
        $this->lastname = $lastname;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getFullname(): string
    {
        return strtoupper($this->getLastname()) . " Member.php" . $this->getFirstname();
    }

    public function loanMedia(Media $media): Loan
    {
        return new Loan($this, $media);
    }

}