<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index()
    {

        $data = [
            'nama' => 'Ikrom'
        ];


        return inertia('Home', $data);
    }
}
