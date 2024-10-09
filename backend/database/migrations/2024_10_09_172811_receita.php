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
        Schema::create(table: 'receitas', callback: function (Blueprint $table): void {
            $table->id();
            $table->foreignId(column:'usuario_id')->constrained()->onDelete(action: 'cascade');
            $table->string(column: 'titulo');
            $table->string(column: 'ingredientes');
            $table->string(column: 'modo_de_preparo');
            $table->string(column: 'tempo_de_preparo');
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
        Schema::dropIfExists(table: 'reeitas');
    }
};
