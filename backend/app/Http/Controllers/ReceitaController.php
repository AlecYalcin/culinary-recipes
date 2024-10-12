<?php

namespace App\Http\Controllers;

use App\Models\Receita;
use Illuminate\Http\Request;

class ReceitaController extends Controller
{
    public function index()
    {
        return Receita::all();
    }

    public function store(Request $request)
    {
        return Receita::create([
            'usuario_id' => $request->usuario_id,
            'titulo' => $request->titulo,
            'ingredientes' => $request->ingredientes,
            'modo_de_preparo' => $request->modo_de_preparo,
            'tempo_de_preparo' => $request->tempo_de_preparo,
            'imagem' => $request->file('imagem')->get()
        ]);   
    }

    public function show($id)
    {
        return Receita::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $receita = Receita::findOrFail($id);
        $receita->update($request->all());
    }

    public function destroy($id)
    {
        $receita = Receita::findOrFail($id);
        $receita->delete();
    }
}
