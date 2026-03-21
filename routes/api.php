<?php 

use App\Http\Controllers\BrowseRoomController;

Route::get("/rooms", [BrowseRoomController::class, "get_listRoom"])->name("rooms");