<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [Controllers\UserController::class, 'register']);

Route::post('login', [Controllers\UserController::class, 'login']);

Route::post('addproduct', [Controllers\ProductController::class, 'addProduct']);

Route::get('products', [Controllers\ProductController::class, 'allProducts']);

Route::delete('product/{id}', [Controllers\ProductController::class, 'destroy']);

Route::get('product/{id}', [Controllers\ProductController::class, 'show']);

Route::get('product/search/{key}', [Controllers\ProductController::class, 'search']);
