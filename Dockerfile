#stage 1
FROM node
WORKDIR /app
# COPY dist\my-app\browser .
# RUN npm install
# RUN npm run build --prod
#stage 2
FROM nginx:1.25.3-alpine
COPY  dist/my-app/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80