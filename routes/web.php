<?php

use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia('Home');
// });

Route::get('/', [TestController::class, 'index'])->name('test');
