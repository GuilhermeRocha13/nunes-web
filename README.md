# Nunes Sports

**Nunes Sports** é um sistema CRUD básico projetado para gerenciar produtos de forma eficiente. Este projeto utiliza uma arquitetura separada para o front-end e back-end, com um banco de dados SQLite para armazenamento.

## Tecnologias

- **Back-end**: [.NET Core](https://dotnet.microsoft.com/download)
- **Front-end**: [Angular](https://angular.io/)
- **Banco de Dados**: [SQLite](https://www.sqlite.org/download.html)

## Funcionalidades

- **CRUD de Produtos**: Adicionar, editar, visualizar e deletar produtos.
- **Interface de Usuário**: Interface web responsiva para gerenciamento de produtos.
- **Filtragem e Pesquisa**: Pesquisa de produtos por nome e descrição.

## Estrutura do Projeto

### Back-end

- **Localização**: `backend/`
- **Descrição**: Implementado em .NET Core, expõe uma API RESTful para operações CRUD.

### Front-end

- **Localização**: `frontend/`
- **Descrição**: Desenvolvido com Angular, consome a API fornecida pelo back-end para manipulação de dados.

### Banco de Dados

- **Tipo**: SQLite
- **Descrição**: Armazena informações sobre os produtos.

## Instalação

### Requisitos

- [.NET Core SDK](https://dotnet.microsoft.com/download) (para o back-end)
- [Node.js](https://nodejs.org/) (para o front-end)
- [SQLite](https://www.sqlite.org/download.html) (para o banco de dados)

### Configuração do Back-end

1. Navegue até a pasta `backend`:
   ```bash
   cd backend
   dotnet restore
   dotnet ef database update
   dotnet run

### Configuração do Front-end
Navegue até a pasta `frontend`:
   ```bash
   cd frontend
   npm install
   ng serve






