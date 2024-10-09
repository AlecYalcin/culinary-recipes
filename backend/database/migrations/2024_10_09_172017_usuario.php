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
        Schema::create(table: 'usuarios', callback: function (Blueprint $table): void {
            $table->id();
            $table->string(column: 'nome');
            $table->string(column: 'matricula')->unique();
            $table->string(column: 'email')->unique();
            $table->string(column: 'senha');
            $table->rememberToken();
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
        Schema::dropIfExists(table: 'usuarios');
    }
};
