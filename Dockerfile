FROM node:11.6.0 AS node

# Create a directory where our app will be placed. This might not be necessary
RUN mkdir -p /useradminui

# Change directory so that our commands run inside this new directory
WORKDIR /useradminui

# Copy dependency definitions
COPY package.json /useradminui

# Install dependencies using npm
RUN npm install

# Get all the code needed to run the app
COPY . /useradminui

EXPOSE 4201

RUN $(npm bin)/ng build --prod

FROM nginx:1.15


COPY --from=node /useradminui/dist/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=node /nginx.conf /etc/nginx/conf.d/default.conf


