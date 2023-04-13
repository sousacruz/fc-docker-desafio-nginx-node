# Desafio Nginx com NodeJS

Aqui o desafio proposto no curso é criar três serviços nginx >> nodejs >> mysql em um **Docker Compose** que quando executarmos: 

    docker-compose up -d

Deverá estar funcionando/disponível em http://localhost:8080 uma página feita em NodeJS

    Full Cycle Rocks!!
    - Lista de nomes cadastrada no banco de dados. 


## Populando a base de dados

Antes de fazer a chamada em http://localhost:8080 precisaremos popular o banco MySQL, para isso deveremos executar os comandos do sequelize migraton no container node. Para isto faça:

    docker-compose up -d

Logo em seguida verifique se todos os containers estão rodando:

    docker ps 

Depois execute o comando a seguir para acessar o container `app`:

    docker exec -it app bash

Você provavelmente já irá cair no diretório de trabalho `/usr/scr/app`, então basta executar o comando do migration

    root@3f7cbef0daa9:/usr/src/app# npx sequelize-cli db:migrate

Execute ainda o comando para popular a tabela com a lista de nomes a ser consultada pelo node e apresentada na página

    root@3f7cbef0daa9:/usr/src/app# npx sequelize-cli db:seed:all

Finalmente, depois de sair do container, de volta ao host, acesse http://localhost:8080 no seu navegador.
