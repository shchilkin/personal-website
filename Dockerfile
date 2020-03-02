FROM node:12-alpine
WORKDIR /personal-website
COPY . .
RUN npm install --production
CMD ["node", "/personal-website/server.js"]