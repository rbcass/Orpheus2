# Use the official Python image as the base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Install Node.js
RUN apt-get update && apt-get install -y nodejs npm

# Copy the Python requirements file
COPY requirements.txt package.json ./

# Install Python and frontend dependencies
RUN pip install --no-cache-dir -r requirements.txt
RUN npm install

# Copy the Flask application code and frontend files
COPY . .


# Expose the port the app runs on
EXPOSE 8080

# Start the Flask application
CMD ["python", "orph.py"]