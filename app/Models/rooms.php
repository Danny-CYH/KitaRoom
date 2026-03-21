<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rooms extends Model
{
    protected $table = "rooms";

    // public $primaryKey = "room_id";

    protected $fillable = [
        "room_id",
        "property_id",
        "room_type",
        "room_address",
        "room_price",
        "room_size",
        "room_deposit",
        "total_ratings",
        "gender_preference",
        "race_preference",
        "lease_duration",
        "is_verified",
        "available_from",
    ];

    public function room_amenities()
    {
        return $this->hasMany(RoomAmenities::class, 'room_id', "room_id");
    }

    public function property()
    {
        return $this->hasOne(Property::class, "property_id", "property_id");
    }
}
