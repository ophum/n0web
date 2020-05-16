FROM node:12.16.1-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./
RUN yarn install --production
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
