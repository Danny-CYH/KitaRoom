<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoomImage extends Model
{
    protected $table = "room_image";

    protected $fillable = [
        "room_id",
        "image_path",
    ];

    public function rooms()
    {
        return $this->belongsTo(Rooms::class, "room_id", "room_id");
    }
}
