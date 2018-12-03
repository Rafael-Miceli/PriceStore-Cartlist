# FROM node as build

# COPY package.json ./

# RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

# ## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
# RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

# WORKDIR /ng-app

# COPY . .

# RUN $(npm bin)/ng build --prod --build-optimizer

## COPY nginx/default.conf /etc/nginx/conf.d/

## RUN rm -rf /usr/share/nginx/html/*

## RUN cp -R dist/* /usr/share/nginx/html

## ENTRYPOINT ["npm", "run", "start-con"]

FROM nginx as runtime

RUN apt-get update && apt-get dist-upgrade -y && apt-get install -y jq

RUN while IFS='=' read -r -d '' n v; do &\
    printf "'%s'='%s'\n" "$n" "$v" &\
done < <(env -0)

ENTRYPOINT ['sh']