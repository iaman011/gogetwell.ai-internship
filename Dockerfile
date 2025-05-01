# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the app
RUN npm run build

# Install serve to run the production build
RUN npm install -g serve

# Run the app
CMD ["serve", "-s", "build", "-l", "3000"]
