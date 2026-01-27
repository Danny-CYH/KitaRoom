<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExploreLocationController extends Controller
{
    public function exploreLocations()
    {
        return Inertia::render('ExploreLocations');
    }
}
