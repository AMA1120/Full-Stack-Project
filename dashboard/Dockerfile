# Stage 1: Build stage
FROM node:14 as builder

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the application code
COPY . .

# Run npm build
RUN npm run build

# Stage 2: Production stage
FROM nginx

# Copy the build directory from the builder stage into the container at /usr/share/nginx/html
COPY --from=builder /app/build /usr/share/nginx/html

# Other configurations or commands if needed
