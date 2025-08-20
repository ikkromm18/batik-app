<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\DiscoverBatikController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia('Home');
// });

Route::get('/', [TestController::class, 'index'])->name('test');

Route::get('/discover-batik', [DiscoverBatikController::class, 'index'])->name('discoverbatik');

Route::get('/about', [AboutController::class, 'index'])->name('about');
