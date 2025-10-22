# Use Node.js 18 (lightweight Alpine version)
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Set environment variable for app port
ENV PORT=3000

# Expose port to host
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start:dev"]
