<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Rooms;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoomDetailsController extends Controller
{
    public function roomDetails($room_id)
    {
        $room_data = Rooms::with([
            "room_amenities",
            "property"
        ])
            ->where("rooms.room_id", $room_id)
            ->get();

        return Inertia::render('RoomDetails', ['room_data' => $room_data]);
    }
}
