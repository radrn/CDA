<?php

namespace App\Entity;

abstract class Media{
    public function __construct(
        protected string $title,
        protected string $author,
        protected int $year,
    )
    {}
    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    public function getAuthor(): string
    {
        return $this->author;
    }

    public function setAuthor(string $author): void
    {
        $this->author = $author;
    }

    public function getYear(): int
    {
        return $this->year;
    }

    public function setYear(int $year): void
    {
        $this->year = $year;
    }

    public function getDetails(): string
    {
        return "Titre: {$this->title}, Année de sortie: {$this->year}, Auteur: {$this->author}.";
    }

}