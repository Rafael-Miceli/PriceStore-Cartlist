FROM smebberson/alpine-nginx-nodejs

COPY package.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN $(npm bin)/ng build --prod --build-optimizer

COPY nginx/default.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

RUN cp -R dist/* /usr/share/nginx/html

ENV ENVNAME=PROD

CMD ["npm", "start"]
#CMD ["nginx", "-g", "daemon off;"]
#CMD ["cp", "src/assets/env-config.json", "/usr/share/nginx/html/assets/"]
# cp src/assets/env-config.json /usr/share/nginx/html/assets/

#["npm", "run", "config"]
#CMD ["npm", "run", "config", "&&", "cp", "src/assets/env-config.json", "/usr/share/nginx/html/assets/", "&&", "bash"]
#ENTRYPOINT []