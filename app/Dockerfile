FROM oven/bun:alpine AS base

LABEL authors="zisake"

FROM base AS install
RUN mkdir -p /temp/dev
WORKDIR /temp/dev
COPY . .
RUN cd /temp/dev && bun install --frozen-lockfile
ENV NODE_ENV=production
ENV NUXT_API_SERVER_URL=http://localhost:4040
RUN bun run build

EXPOSE 3000

ENTRYPOINT ["bun", "run", "/temp/dev/.output/server/index.mjs"]
