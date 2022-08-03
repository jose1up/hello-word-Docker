# con FROM especificamos que módulo de docker necesitamos para el proyecto
FROM node:16

#con WORKDIR el directorio de trabajo donde lo vamos a ejecutar 
WORKDIR /app

# con este comando copy pasamos los archivo que nesecitamos en la directorio de trabajo 
# * copia todos los archivo que enpiesen con el mismon nombre 
COPY package*.json ./ 

RUN npm install

COPY . .

CMD [ "npm","start" ]




