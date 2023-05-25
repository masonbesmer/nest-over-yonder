# Use the official Node.js image as the base
FROM node

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Build the project
# RUN npm run build

# Expose the desired port
EXPOSE 5173

# Set the startup command for the container
CMD ["npm", "run", "dev"]