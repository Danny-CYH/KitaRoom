<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoomAmenities extends Model
{
    protected $table = "room_amenities";

    protected $fillable = [
        "room_id",
        "name",
        "description",
        "is_available",
        "additional_cost",
    ];

    public function rooms()
    {
        return $this->belongsTo(Rooms::class, "room_id", 'room_id');
    }
}
