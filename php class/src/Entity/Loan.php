<?php

namespace App\Entity;
use App\Enum\LoanStatus;

class Loan  {

    const LOAN_DURATION = "+2 weeks";
    public function __construct(
        private Member $member,
        private Media $media,
        private \DateTime $createdAt = new \DateTime(),
    )
    {}

    public function getDueAt(): \DateTime
    {
        return (clone $this->createdAt)->modify(self::LOAN_DURATION);

    }

    public function isExpired(): bool
    {
        $dueAt = $this->getDueAt();
        $now = new \DateTime();

        return $now > $dueAt;
    }

    public function getStatus(): LoanStatus
    {
        if ($this->isReturned()) {
            return LoanStatus::RETURNED;
        } else if ($this->isExpired()) {
            return LoanStatus::LATE;
        }

        return LoanStatus::ACTIVE;
    }

    public function getMember(): Member
    {
        return $this->member;
    }

    public function setMember(Member $member): void
    {
        $this->member = $member;
    }

    public function getMedia(): Media
    {
        return $this->media;
    }

    public function setMedia(Media $media): void
    {
        $this->media = $media;
    }

    public function getCreatedAt(): \DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTime $createdAt): void
    {
        $this->createdAt = $createdAt;
    }
}