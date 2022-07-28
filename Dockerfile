FROM docker.io/node:alpine AS build
WORKDIR /app
COPY . .
RUN npm run build:prod

FROM docker.io/nginx:alpine AS run
COPY --from=build /app/dist/ecorp-frontend-demo /usr/share/nginx/html
EXPOSE 80
