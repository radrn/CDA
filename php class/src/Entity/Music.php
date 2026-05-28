<?php

namespace App\Entity;

class Music extends Media {
    public function __construct(
        string $title,
        string $author,
        int $year,
        private int $duration,
    )
    {
        parent::__construct($title, $author, $year);
    }

    public function getDuration(): int
    {
        return $this->duration;
    }

    public function setDuration(int $duration): void
    {
        $this->duration = $duration;
    }
}