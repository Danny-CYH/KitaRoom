<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Rooms;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function home()
    {
        $room_data = Rooms::with([
            "room_amenities",
            "property"
        ])->get();

        return Inertia::render("Home", ["room_data" => $room_data]);
    }
}
