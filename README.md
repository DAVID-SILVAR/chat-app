# Chat App

Um aplicativo de chat simples usando Node.js, Express e WebSocket. Permite a comunicação em tempo real entre clientes conectados.

## Funcionalidades

- **Conexão WebSocket**: Conecte-se ao servidor e troque mensagens em tempo real.
- **Mensagens de Broadcast**: Envie mensagens para todos os clientes conectados.
- **Mensagens de Conexão e Desconexão**: Exibe mensagens no console quando um cliente se conecta ou desconecta.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para simplificar o gerenciamento de rotas HTTP.
- **WebSocket**: Protocolo para comunicação em tempo real entre clientes e servidores.

## Pré-requisitos

- [Node.js](https://nodejs.org) (v14 ou superior recomendado)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/SEU_USUARIO/chat-app.git
    cd chat-app
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

## Execução

1. Inicie o servidor:

    ```bash
    node server.js
    ```

2. Abra seu navegador e acesse:

    ```
    http://localhost:3000
    ```

3. Para testar a comunicação em tempo real, abra várias abas do navegador e use a ferramenta de desenvolvedor para enviar mensagens no console do cliente.

## Testes

Atualmente, este projeto não inclui testes automatizados. Recomenda-se testar manualmente usando várias instâncias do navegador.

## Contribuição

Se você deseja contribuir com este projeto, por favor, faça um fork do repositório e envie um pull request com suas alterações. Certifique-se de seguir as diretrizes de contribuição e incluir uma descrição clara das alterações feitas.

