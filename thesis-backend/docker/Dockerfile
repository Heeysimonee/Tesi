FROM node:lts-gallium AS base

LABEL maintainer="Simone Cattaneo"

WORKDIR /home/node/workdir

USER node:node

COPY docker/run.sh /usr/local/bin/run.sh
COPY docker/wait-for-it.sh /usr/local/bin/wait-for-it.sh

FROM base as local_dev

CMD ["run.sh", "development"]

FROM base as release

COPY --chown=node:node ./ /home/node/workdir
RUN rm -rf /home/node/workdir/docker

RUN npm install

CMD ["run.sh", "production"]
