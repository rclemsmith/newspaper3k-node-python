FROM nikolaik/python-nodejs:latest

WORKDIR /app
# We copy our package.json file to our
# app directory
COPY package.json /app
# We then run npm install to install
# express for our application
RUN npm install
# We then copy the rest of our application
# to the app direcoty
COPY . /app

RUN pip install -r requirements.txt


CMD ["npm", "start"]
