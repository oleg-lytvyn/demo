# basic image
FROM node:14-alpine

# working dir
WORKDIR /app

# copied packege.json
COPY packege*.json ./

# node dependencies
RUN npm install --production

# copy the rest files
COPY . .

# open port
EXPOSE 3000

# start cmd
CMD ["npm", "start"]