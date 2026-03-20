<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class rooms extends Model
{
    protected $table = "rooms";

    public $primaryKey = "room_id";
    public $increment = false;

    protected $fillable = [
        "room_id",
        "room_name",
        "room_address",
        "room_price",
        "room_size",
        "room_status",
        "total_ratings",
        "is_verified",
        "property_type",
    ];
}
