<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BrowseRoomController extends Controller
{
    public function browseRoom()
    {
        return Inertia::render('BrowseRoom');
    }
}
