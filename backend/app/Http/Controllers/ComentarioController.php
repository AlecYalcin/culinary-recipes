<?php

namespace App\Http\Controllers;

use App\Models\Comentario;
use Illuminate\Http\Request;

class ComentarioController extends Controller
{
    public function index()
    {
        return Comentario::all();
    }

    public function store(Request $request)
    {
        return Comentario::create($request->all());
    }

    public function show($usuario, $receita)
    {
        return Comentario::where('usuario_id', $usuario)->where('receita_id', $receita)->firstOrFail();
    }

    public function update(Request $request, $usuario, $receita)
    {
        $comentario = Comentario::where('usuario_id', $usuario)->where('receita_id', $receita)->first();
        $comentario->texto = $request->texto;
        $comentario->save();
    }    

    public function destroy($usuario, $receita)
    {
        $comentario = Comentario::where('usuario_id', $usuario)->where('receita_id', $receita)->first();
        $comentario->delete();
    }
}
