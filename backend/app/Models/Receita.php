<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receita extends Model
{
    use HasFactory;

    protected $table = 'receitas';

    protected $fillable = [
        'usuario_id',
        'titulo',
        'ingredientes',
        'modo_de_preparo',
        'tempo_de_preparo',
        'imagem'
    ];

    protected $hidden = ['imagem'];
}
