FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copiar explícitamente cada carpeta importante
COPY index.js .
COPY controllers ./controllers
COPY routes ./routes
COPY models ./models
COPY middlewares ./middlewares

EXPOSE 4001

CMD ["node", "index.js"]
