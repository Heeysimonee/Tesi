#######################
# Development stage
#######################

FROM node:15.12 AS dev

WORKDIR /home/node/workdir
RUN chown -R node:node /home/node/workdir

#RUN npm install -g npm@latest

USER node:node

COPY docker/build.sh build.sh
COPY docker/dev-run.sh run.sh

CMD ["./run.sh"]

#######################
# Vue serve stage
#######################

FROM dev as vue-serve

COPY docker/vue-serve.sh vue-serve.sh

EXPOSE 8080

CMD ["sh", "-c", "./docker/vue-serve.sh ${RUN_INSTALL}"]

#######################
# Vue build stage
#######################

# FROM dev AS build

# LABEL maintainer="Tommaso Bianchi <tommaso.bianchi@digitiamo.com>"

# COPY --chown=node:node ./ /home/node/workdir/src

# ARG SKIP_VUE_BUILD
# ARG BUILD_NUMBER=dev
# ARG BUILD_TIMESTAMP=0
# RUN cd /home/node/workdir/src && if [ ! -z "$SKIP_VUE_BUILD" ]; then npm install; fi
# RUN mkdir /home/node/workdir/dest && if [ ! -z "$SKIP_VUE_BUILD" ]; then \
#     VUE_APP_BUILD_NUMBER=$BUILD_NUMBER VUE_APP_BUILD_TIMESTAMP=$BUILD_TIMESTAMP /home/node/workdir/build.sh /home/node/workdir/src /home/node/workdir/dest production; \
#     fi

#######################
# Nginx serve stage
#######################

# FROM nginx:1.19.10 as serve

# LABEL maintainer="Tommaso Bianchi <tommaso.bianchi@digitiamo.com>"

# COPY docker/nginx.conf /etc/nginx/
# RUN rm /etc/nginx/conf.d/default.conf

# RUN mkdir /var/default_errors
# COPY docker/default_errors/* /var/default_errors/

# COPY docker/sites /etc/nginx/sites-available

# COPY --chown=nginx:nginx --from=build /home/node/workdir/dest /var/www

# COPY docker/inject-env.sh /inject-env.sh
# COPY docker/run-nginx.sh /run-nginx.sh

# EXPOSE 80

# CMD ["/run-nginx.sh"]
