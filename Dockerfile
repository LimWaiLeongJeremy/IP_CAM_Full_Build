FROM node:20.10.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm i
RUN npx ngcc --properties es2023 browser module main --first -only --create-ivy-entry-points 
COPY . . 
RUN npm run build 
FROM nginx:stable 
# COPY default.conf /etc/nginx/conf.d
COPY --from=build /app/dist/frontend/ /usr/share/nginx/html
EXPOSE 80 