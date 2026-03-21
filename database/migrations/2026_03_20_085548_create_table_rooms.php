<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->string("room_id")->primary();
            $table->string("property_id");
            $table->string("room_type");
            $table->string("room_address");
            $table->float("room_price");
            $table->integer("room_size");
            $table->string("room_deposit");
            $table->integer("total_ratings");
            $table->string("gender_preference");
            $table->string("race_preference");
            $table->string("lease_duration");
            $table->boolean("is_verified");
            $table->date("available_from");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rooms');
    }
};
