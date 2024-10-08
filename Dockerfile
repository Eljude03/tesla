
# Step 1: Build the React app
FROM node:18 as build

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install -g npm@10.9.0

COPY . ./
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
