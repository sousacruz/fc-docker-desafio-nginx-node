# Escolhendo uma imagem que já tem o Node
FROM node:16

# Definindo o diretório de trabalho
WORKDIR /usr/src/app

# Copiando todos os arquivos do diretório atual para o container 
COPY . .

# Instalando as dependências 
RUN npm install

# Preparando a instalação do Dockerize
# RUN apt-get update && apt-get install -y wget

# Instalando o Dockerize
# ENV DOCKERIZE_VERSION v0.6.1
# RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  #  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  #  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Informando que esta imagem vai expor uma porta
EXPOSE 3000

# Comando padrão para inicar a aplicação
CMD [ "node", "app.js" ]