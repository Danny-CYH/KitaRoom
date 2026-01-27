<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SocialFeedController extends Controller
{
    public function socialFeed()
    {
        return Inertia::render('SocialFeed');
    }
}
