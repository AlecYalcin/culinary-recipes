<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create(table: "avaliacoes", callback: function (Blueprint $table): void {
            $table->foreignId(column: 'usuario_id')->constrained()->onDelete(action: 'cascade'); // Chave estrangeira para usuarios
            $table->foreignId(column: 'receita_id')->constrained()->onDelete(action: 'cascade'); // Chave estrangeira para receitas            
            // Definindo as chaves primárias compostas
            $table->primary(columns: ['usuario_id', 'receita_id']);
            $table->enum(column: 'estrelas', allowed: ['1', '2','3','4','5']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists(table: "avaliacoes");
    }
};
