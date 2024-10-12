<?php

namespace App\Http\Controllers;

use App\Models\Avaliacao;
use Illuminate\Http\Request;

class AvaliacaoController extends Controller
{
    public function index()
    {
        return Avaliacao::all();
    }

    public function store(Request $request)
    {
        return Avaliacao::create($request->all());
    }

    public function show($usuario, $receita)
    {
        return Avaliacao::where('usuario_id', $usuario)->where('receita_id', $receita)->firstOrFail();
    }

    public function update(Request $request, $usuario, $receita)
    {
        $avaliacao = Avaliacao::where('usuario_id', $usuario)->where('receita_id', $receita)->first();
        $avaliacao->estrelas = $request->estrelas;
        $avaliacao->save();
    }    

    public function destroy($usuario, $receita)
    {
        $avaliacao = Avaliacao::where('usuario_id', $usuario)->where('receita_id', $receita)->first();
        $avaliacao->delete();
    }
}
