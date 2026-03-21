<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Property;
use App\Models\Rooms;
use Inertia\Inertia;

class BrowseRoomController extends Controller
{
    public function browseRoom()
    {
        return Inertia::render('BrowseRoom');
    }

    public function get_listRoom()
    {
        $list_rooms = Rooms::with([
            "room_amenities",
            "property"
        ])
            ->get();

        return response()->json($list_rooms);
    }
}
