<?php

namespace App\Entity;

class Book extends Media
{
    const int PAGES_THRESHOLD = 500;
    public function __construct(
    string $title,
    string $author,
    int $year,
    private int $nbOfPages,
) {
        parent::__construct($title, $author, $year);
    }

    public function getNbOgPages(): int
    {
        return $this->nbOfPages;
    }

    public function setNbOgPages(int $nbOgPages): void
    {
        $this->nbOfPages = $nbOgPages;
    }

    public function isLong(): bool
    {
        return $this->nbOfPages > self::PAGES_THRESHOLD;
    }
}
echo book::PAGES_THRESHOLD;
