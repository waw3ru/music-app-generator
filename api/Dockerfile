FROM oven/bun:alpine AS base

LABEL authors="zisake"

FROM base AS install
RUN mkdir -p /temp/dev
WORKDIR /temp/dev
COPY . .
RUN cd /temp/dev && bun install
ENV PORT=4040
ENV NODE_ENV=production
ENV CLIENT_URL=http://127.0.0.1:3000

EXPOSE $PORT

ENTRYPOINT ["bun", "run", "start"]
