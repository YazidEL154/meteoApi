#Partie 1 

FROM node:latest as node 

WORKDIR /meteoApi 

COPY . . 

RUN npm install  

RUN npm run build --optimization=false

 
 

#Partie 2 

FROM nginx:latest  

COPY --from=node /meteoApi/dist/meteoapi /usr/share/nginx/html