# Stage 1: Build the React app
FROM node:18 as build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code and build
COPY . ./
RUN npm run build

# Stage 2: Serve the app using a simple HTTP server
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
