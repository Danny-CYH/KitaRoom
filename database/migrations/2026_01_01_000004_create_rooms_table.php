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
            $table->string("property_id")->nullable();
            $table->string("room_type");
            $table->string("room_address");
            $table->decimal("room_price", 10, 2);
            $table->integer("room_size");
            $table->string("room_deposit");
            $table->integer("total_ratings");
            $table->string("gender_preference");
            $table->string("race_preference");
            $table->string("lease_duration")->default("6 month");
            $table->boolean("is_verified")->default(false);
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
