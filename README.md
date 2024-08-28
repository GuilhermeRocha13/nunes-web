Nunes Sport
Nunes Sport é um sistema CRUD básico para uma loja fictícia, projetado para gerenciar produtos de forma eficiente. Este projeto utiliza uma arquitetura separada para o front-end e back-end, com um banco de dados SQLite para armazenamento.

Tecnologias
Back-end: .NET Core
Front-end: Angular
Banco de Dados: SQLite
Funcionalidades
CRUD de Produtos: Adicionar, editar, visualizar e deletar produtos.
Interface de Usuário: Interface web responsiva para gerenciamento de produtos.
Filtragem e Pesquisa: Pesquisa de produtos por nome e descrição.
Estrutura do Projeto
Back-end:

Localizado na pasta backend
Implementado em .NET Core
Expõe uma API RESTful para operações CRUD
Front-end:

Localizado na pasta frontend
Desenvolvido com Angular
Consome a API fornecida pelo back-end para manipulação de dados
Banco de Dados:

SQLite
Armazena informações sobre os produtos
Instalação
Requisitos
.NET Core SDK (para o back-end)
Node.js (para o front-end)
SQLite (para o banco de dados)
Configuração do Back-end
Navegue até a pasta backend.
Restaure os pacotes NuGet:
bash
Copiar código
dotnet restore
Configure a conexão com o banco de dados SQLite no arquivo appsettings.json.
Execute as migrações para criar o banco de dados:
bash
Copiar código
dotnet ef database update
Inicie o servidor:
bash
Copiar código
dotnet run
Configuração do Front-end
Navegue até a pasta frontend.
Instale as dependências:
bash
Copiar código
npm install
Inicie o servidor de desenvolvimento:
bash
Copiar código
ng serve
O front-end estará disponível em http://localhost:4200.
