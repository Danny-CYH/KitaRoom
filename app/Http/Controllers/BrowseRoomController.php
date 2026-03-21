<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Rooms;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BrowseRoomController extends Controller
{
    public function browseRoom()
    {
        return Inertia::render('BrowseRoom');
    }

    public function get_listRoom()
    {
        $list_rooms = Rooms::all();

        return response()->json($list_rooms);
    }
}
