# Receitas Culinárias

Projeto desenvolvido com Laravel, React, MySQL e Integração com API do SUAP. Um website simples que implementa funcionalidades de um caderno de recetias de maneira virtual e acessível para usuários do SUAP (Alunos, Professores, Técnicos, Etc...).

# Front-end

Utilizando React, as páginas da aplicação foram produzidas utilizando Boostrap como framework de CSS.

# Back-end

Utilizando Laravel, a aplicação foi produzida no formato duplo de aplicação de dados, tendo um banco de dados local MySQL e uma integração com API Online. Ou seja, esse site deve ser utilizado com alguma conexão a internet.

## Laravel

### Inicializar Servidor

> `php artisan serve`

### Criar Migrações

O comando abaixo cria migrações e pede um nome. Essas migrações são a conexão com o banco de dados, ou seja, serão as tabelas que serão carregadas de acordo com as informações na migration.

> `php artisan make:migrations`

### Migrar Dados

Após colocar os dados das tabelas desejadas nas migrações, o comando abaixo solidica essas alterações criando o banco de dados em si com essas informações. Uma variação dele abaixo faz com que ele derrube todas as tabelas e crie novas de acrodo com as migrações, ao invés de seguir o padrão stack de criação de migrações.

> `php artisan migrate` > `php artisan migrate:fresh`

## Banco de Dados

O banco de dados é feito em MySQL utilizando as Migrations do Laravel. Esse é composto por uma lógica simples de página de receitas, mas eficiente e muito bem pensada.

### Usuários

Tabela que represente as pessoas que usarão o sistema. Ele possui integridade simples para que pessoas comuns possam se cadastrar mas usuários do SUAP possam integrar suas contas.

> Contêm: Id, Nome, Matrícula, Email, Senha

### Receitas

A fonte de informação do site. Cada usuário pode publicar diversas receitas e o objetivo é ter um mural completo. Ela conta com informações essenciais para o preparo de pratos e alimentos diversos.

> Contêm: Id, Usuario_id, Título, Ingredientes, Modo de Preparo, Tempo de Preparo e Imagem

### Comentários

Um elogio, uma crítica, observação ou dicas são sempre bem vindas por outros usuários em suas receitas. O sistema de comentários serve para que usuários possam interagir entre sí através das receitas publicadas.

> Contêm: Usuario_id, Receita_id, Texto

### Avaliações

Uma avaliação diz o quanto aquela receita foi útil, saborosa, informativa, pouco detalhada... um usuário faz uma avaliação com o objetivo de informar outros sobre a qualidade da receita.

> Contêm: Usuario_id, Receita_id, Estrelas
