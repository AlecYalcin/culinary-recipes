<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Model
{
    use HasFactory, HasApiTokens;

    protected $table = 'usuarios';

    protected $fillable = [
        'nome',
        'matricula',
        'email',
        'senha'
    ];
    protected $hidden = [
        'senha',
    ];
}
