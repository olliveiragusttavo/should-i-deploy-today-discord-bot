FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# nvm environment variables
ENV PROJECT_NAME should-i-deploy-today-discord-bot
ENV NVM_DIR /usr/local/nvm
ENV WORK_DIR /home

# Atualizando o servidor
RUN apt-get update && apt-get -y upgrade --fix-missing && apt-get -y -f install && apt-get -y auto-remove && apt-get -y autoclean && apt-get -y clean

# Instalando os pacotes
RUN apt-get install -y apache2 curl git npm

# Configurando o git
RUN git config --global user.name Gustavo && git config --global user.email dev.gustavo.oliveira@gmail.com

RUN if [ ! -f "$NVM_DIR" ]; then mkdir -p $NVM_DIR; fi

# Configurando o nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
RUN source $NVM_DIR/nvm.sh && nvm install 16.14.2

# Configurando as bibliotecas
RUN npm install -g yarn

RUN if [ ! -d "$WORK_DIR"]; then mkdir $WORK_DIR; fi
WORKDIR $WORK_DIR

EXPOSE 80
CMD /usr/sbin/apache2ctl -D FOREGROUND
