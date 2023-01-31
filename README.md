# Roulette Server

A simple server that generates a random number and stores it in a Postgres database using NestJS and TypeOrm. The server communicates with a microservice using RabbitMQ.

## Requirements
- Node.js 16
- Postgres database
- RabbitMQ server

## Installation
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Set the required environment variables (database and RabbitMQ connection details)
4. Run `npm start` to start the server

## Testing
Run `npm run test` to run the unit tests.

## Docker
The server can be dockerized using the provided Dockerfile and docker-compose file. Run `docker-compose up` to start the server and RabbitMQ in separate containers.
