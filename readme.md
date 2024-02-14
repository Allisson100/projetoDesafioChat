# Desafio chat online

O projeto foi criado através de eventos do WebSocket para ter a comunicação em tempo real entre banckend e o frontend.

Nesse projeto foi utilizado:

ReactJs:

- Styled components
- React Router Dom
- Fromik
- Yup
- Socket IO Client
- Redux
- React Icons

NodeJs:

- Express
- JsonWebToken
- MongoDb
- SocketIo

Banco da Dados:

- MongoDB

## Como utilizar a Aplicação

Primeiro não esqueça de ter instalado em sua máquina o Node e o npm.

Faça o clone do repositório do github através do comando:

    git clone url_do_projeto

Acesse a pasta backend pelo terminal e digite:

    npm install
    npm start

Abra outra janela do terminal, acesse a pasta frontend e digite:

    npm install
    npm dev

O terminal mostrará a url para você utilizar o projeto localmente.

Após ter instalado o projeto, abra a url em dois navegadores diferentes (ex: Chrome e IE). Depois faça o cadastro na parte de signup, adicione as contas criadas na lista de usuarios. Depois disso é só conversarem entre si.

### Features futuras

O projeto ainda está em desenvolvimento, então algumas parte ainda não estão 100%.

- Falta arrumar a resposividade geral da aplicação.
- Criar feature de adicionar o contato caso alguém te mande uma mensagem e você não tenha ele na lista de contatos.
- Terminar a feature de criar grupo, pois ainda está na metade do desenvolvimento.
- Melhorar a feature de mensagem/contato, pois você pode se auto adicionar ainda.
- Refatorar código para melhor compreensão dos desenvolvedores, pricipalmente no arquivo que escuta os eventos do banckend.
- Refatorar alguns componentes para uma melhor reutilização.