# API RESTful de Posts e Comentários

## Introdução

Este projeto consiste na implementação de uma API RESTful utilizando Node.js que permite a criação e listagem de posts e comentários. Cada comentário pertence a um post. A API oferece endpoints para um CRUD completo de posts (Criar, Listar, Atualizar e Apagar) e para adicionar e apagar comentários em posts específicos.

## Table of Contents

- [Introdução](#introdução)
- [Instruções de Instalação](#instruções-de-instalação)
- [Uso](#uso)
- [Recursos](#recursos)
- [Dependências](#dependências)
- [Configuração](#configuração)
- [Documentação](#documentação)
- [Exemplos](#exemplos)

## Instruções de Instalação

1. **Clone o repositório:**
    ```sh
    git clone https://github.com/lucascafeee/smart-project.git
    ```
2. **Navegue até o diretório do projeto:**
    ```sh
    cd smart-project
    ```
3. **Instale as dependências:**
    ```sh
    npm install
    ```
## Configuração do Ambiente

Certifique-se de ter Docker e Docker Compose instalados. Caso queira usar o docker

## Uso

1. **Inicie o servidor:**
    ```sh
    npm start
    ```
2. **Acesse a API em:**
    ```
    http://localhost:3000
    ```

## Recursos

- **Posts:**
  - Criar um post
  - Listar posts
  - Atualizar um post
  - Apagar um post
- **Comentários:**
  - Adicionar um comentário a um post
  - Apagar um comentário de um post

## Dependências

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)

## Configuração

1. **Configuração do banco de dados:**
    Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
    ```env
    DB_NAME=
    DB_USER=
    DB_PASS=
    DB_HOST=
    DB_DIALECT=
    PORT=
    ```

2. **Docker (Opcional):**
    - **Dockerizar o ambiente:** Utilize o arquivo `Dockerfile` e `docker-compose.yml` fornecidos para configurar o ambiente Docker.
    - **Substituir MySQL por MongoDB:** Caso deseje utilizar o MongoDB, ajuste as configurações conforme necessário.
    - **docker-compose up --build**: Construir e iniciar os containers;
    - **docker-compose down**: Parar os containers;
## Documentação

- **Endpoints:**

  **Posts:**
  - **Criar um post:**
    ```
    POST /posts
    ```

  - **Listar posts:**
    ```
    GET /posts
    ```

  - **Atualizar um post:**
    ```
    PUT /posts/:id
    ```

  - **Apagar um post:**
    ```
    DELETE /posts/:id
    ```

  **Comentários:**
  - **Adicionar um comentário a um post:**
    ```
    POST /posts/:postId/comments
    ```

  - **Apagar um comentário de um post:**
    ```
    DELETE /posts/:postId/comments/:commentId
    ```

## Exemplos

- **Criar um post:**
    ```sh
    curl -X POST http://localhost:3000/posts -d '{
    "title": "Novo Post", 
    "content": "Conteúdo do post"}' -H 
    "Content-Type: application/json"
    ```

- **Listar posts:**
    ```sh
    curl -X GET http://localhost:3000/posts
    ```

- **Adicionar um comentário a um post:**
    ```sh
    curl -X POST http://localhost:3000/posts/1/comments -d '{"content": "Comentário"}' -H "Content-Type: application/json"
    ```

- **Atualizar um post:**
    ```sh
    curl -X PUT http://localhost:3000/posts/1 -d '{
    "title": "Título Atualizado", 
    "content": "Conteúdo atualizado"}' -H 
    "Content-Type: application/json"
    ```

- **Apagar um post:**
    ```sh
    curl -X DELETE http://localhost:3000/posts/1
    ```

- **Apagar um comentário de um post:**
    ```sh
    curl -X DELETE http://localhost:3000/posts/1/comments/1
    ```


