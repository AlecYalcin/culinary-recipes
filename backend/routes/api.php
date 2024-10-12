<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\ReceitaController;
use App\Http\Controllers\ComentarioController;


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

Route::resource('usuario', UsuarioController::class);
Route::resource('receita', ReceitaController::class);
// Rotas dos Comentários
Route::get('comentario/', [ComentarioController::class, 'index']);
Route::post('comentario/', [ComentarioController::class, 'store']);
Route::get('comentario/{usuario_id}/{post_id}', [ComentarioController::class, 'show']);
Route::put('comentario/{usuario_id}/{post_id}', [ComentarioController::class, 'update']);
Route::delete('comentario/{usuario_id}/{post_id}', [ComentarioController::class, 'destroy']);
