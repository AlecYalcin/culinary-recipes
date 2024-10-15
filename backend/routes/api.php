<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\ReceitaController;
use App\Http\Controllers\ComentarioController;
use App\Http\Controllers\AvaliacaoController;

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

// Laravel Sanctum (Autenticação de Usuários)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Grupo com o Middleware auth:sanctum
Route::middleware('auth:sanctum')->group(function() {
    Route::post('/logout', [AuthController::class, 'logjout']);
    // Rotas de Usuário
    Route::get('usuario/', [UsuarioController::class, 'index']);
    Route::post('usuario/', [UsuarioController::class, 'store']);
    Route::get('usuario/{id}', [UsuarioController::class, 'show']);
    Route::put('usuario/{id}', [UsuarioController::class, 'update']);
    Route::delete('usuario/{id}', [UsuarioController::class, 'destroy']);
    // Rotas de Receita
    Route::get('receita/', [ReceitaController::class, 'index']);
    Route::post('receita/', [ReceitaController::class, 'store']);
    Route::get('receita/{id}', [ReceitaController::class, 'show']);
    Route::put('receita/{id}', [ReceitaController::class, 'update']);
    Route::delete('receita/{id}', [ReceitaController::class, 'destroy']);
    // Rotas dos Comentários
    Route::get('comentario/', [ComentarioController::class, 'index']);
    Route::post('comentario/', [ComentarioController::class, 'store']);
    Route::get('comentario/{usuario_id}/{post_id}', [ComentarioController::class, 'show']);
    Route::put('comentario/{usuario_id}/{post_id}', [ComentarioController::class, 'update']);
    Route::delete('comentario/{usuario_id}/{post_id}', [ComentarioController::class, 'destroy']);
    // Rotas das Avaliações
    Route::get('avaliacao/', [AvaliacaoController::class, 'index']);
    Route::post('avaliacao/', [AvaliacaoController::class, 'store']);
    Route::get('avaliacao/{usuario_id}/{post_id}', [AvaliacaoController::class, 'show']);
    Route::put('avaliacao/{usuario_id}/{post_id}', [AvaliacaoController::class, 'update']);
    Route::delete('avaliacao/{usuario_id}/{post_id}', [AvaliacaoController::class, 'destroy']);
});


