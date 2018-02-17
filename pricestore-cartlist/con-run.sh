ts-node ./src/set-env.ts && \
cp src/assets/env-config.json /usr/share/nginx/html/assets/ && \
nginx -g "daemon off;"