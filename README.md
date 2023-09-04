## Projeto Node.js com Docker e MySQL

Este é um projeto simples em Node.js que demonstra a criação, listagem, edição e exclusão de itens em um aplicativo de lista de tarefas. O projeto utiliza um contêiner Docker para facilitar a configuração do ambiente, o MySQL 2 como banco de dados, e algumas extensões populares, como dotenv e express.

## Configuração

### Pré-requisitos

Certifique-se de ter o Docker instalado em sua máquina antes de continuar. Você pode baixar e instalar o Docker em [docker.com](https://www.docker.com/get-started).

### Variáveis de ambiente

O projeto utiliza variáveis de ambiente para configurar o banco de dados e outras configurações. Você pode configurar essas variáveis no arquivo `.env` na raiz do projeto. Aqui está um exemplo de arquivo `.env`:

DB_HOST=localhost
DB_USER=user
DB_PASSWORD=senha_do_banco
DB_NAME=nome_do_banco
PORT=3333

Certifique-se de personalizar as variáveis de ambiente de acordo com a sua configuração.

### Executando o Projeto
Para executar o projeto, siga estas etapas:

1- Clone este repositório para a sua máquina local.
2- Configure as variáveis de ambiente no arquivo .env conforme necessário.
3- Abra o terminal na pasta do projeto.
4- Execute o seguinte comando para construir a imagem Docker:

docker build -t meu-projeto-node .


Após a construção bem-sucedida da imagem, execute o seguinte comando para iniciar o contêiner:

docker run -d -p 3333:3333 --env-file .env meu-projeto-node


O projeto estará em execução na porta especificada (por padrão, a porta 3333).
Agora, você pode acessar o aplicativo em http://localhost:3333 no seu navegador.

## Uso
Acesse o aplicativo em http://localhost:3333.
Você pode criar, listar, editar e excluir itens da lista de tarefas.
Sinta-se à vontade para explorar e personalizar o projeto de acordo com suas necessidades.

