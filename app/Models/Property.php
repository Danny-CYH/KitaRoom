<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    protected $table = "property";

    public $primaryKey = "property_id";

    public $incrementing = false;

    protected $keyType = 'string';

    protected $fillable = [
        "property_id",
        "user_id",
        "property_type",
        "locations",
        "floor",
        "furnished",
    ];

    public function user()
    {
        return $this->belongsTo(User::class, "user_id");
    }
}
