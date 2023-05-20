FROM node:17-bullseye

ARG SSH_KEY

ENV DEBIAN_FRONTEND noninteractive

COPY package.json /opt/superhero-application/package.json
COPY src          /opt/superhero-application/src

WORKDIR /opt/superhero-application

RUN ln -snf /usr/share/zoneinfo/CET /etc/localtime && echo "CET" > /etc/timezone

RUN ssh-agent sh -c 'echo $SSH_KEY | base64 -d | ssh-add - ; npm install --production'

CMD [ "npm", "start" ]
