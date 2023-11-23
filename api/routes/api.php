<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->post('/logout', [AuthController::class, 'logout']);

Route::post('/register', [AuthController::class, 'register']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/tasks', [TaskController::class, 'getAll']);
    Route::post('/tasks', [TaskController::class, 'create']);
    Route::delete('/tasks/{task}', [TaskController::class, 'delete']);
});