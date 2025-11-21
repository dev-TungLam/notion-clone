# Use Node.js 20 (lightweight Alpine version)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Expose the app port
EXPOSE 4000

# Set environment variable
ENV PORT=4000

# Start in development mode (use start:prod for production)
CMD ["npm", "run", "start:dev"]
