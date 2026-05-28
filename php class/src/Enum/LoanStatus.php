<?php

namespace App\Enum;

enum LoanStatus: int
{
    case ACTIVE = 200;
    case RETURNED = 300;
    case LATE = 400;
}