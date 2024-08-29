# Nunes Sports

**Nunes Sports** é um sistema CRUD básico projetado para gerenciar produtos de forma eficiente. Este projeto utiliza uma arquitetura separada para o front-end e back-end, com um banco de dados SQLite para armazenamento.

## Tecnologias

- **Back-end**: [.NET Core](https://dotnet.microsoft.com/download)
- **Front-end**: [Angular](https://angular.io/)
- **Banco de Dados**: [SQLite](https://www.sqlite.org/download.html)

## Funcionalidades

- **CRUD de Produtos**: Adicionar, editar, visualizar e deletar produtos.
- **Interface de Usuário**: Interface web responsiva para gerenciamento de produtos.

## Estrutura do Projeto

### Back-end

- **Localização**: `Back/`
- **Descrição**: Implementado em .NET Core, expõe uma API RESTful para operações CRUD.

### Front-end

- **Localização**: `Front/`
- **Descrição**: Desenvolvido com Angular, consome a API fornecida pelo back-end para manipulação de dados.

### Banco de Dados

- **Tipo**: SQLite
- **Descrição**: Armazena informações sobre os produtos.

## Instalação

### Requisitos

- [.NET Core SDK](https://dotnet.microsoft.com/download) (para o back-end)
- [Node.js](https://nodejs.org/) (para o front-end)

### Configuração do Back-end

1. Navegue até a pasta `backend`:
   ```bash
   cd Back/src/Nunes-Sport.API/
   dotnet run

### Configuração do Front-end
Navegue até a pasta `frontend`:
   ```bash
   cd Front/NunesSport-App/
   npm install
   npm install -g @angular/cli
   ng serve






