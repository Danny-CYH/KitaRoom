<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoomDetailsController extends Controller
{
    public function roomDetails()
    {
        return Inertia::render('RoomDetails');
    }
}
