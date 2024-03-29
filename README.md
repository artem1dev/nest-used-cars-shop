# Used cars shop

This is an application that allows users to register and create advertisements for selling cars. It is built using `NestJS`, utilizing MySQL as the database and `TypeORM` as the ORM for database interaction.

# Installing

## Prerequisites

Before you begin, ensure you have Node.js version 18.16.0 or later installed on your machine.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone <repository_url>
   ```

2. Install all dependencies:

   ```bash
   npm install
   ```

## Running with Docker (Optional)

If you prefer to use Docker, the repository contains a `docker-compose.yml` file. It includes configurations for the database and Adminer.

```bash
docker-compose up
```

If you choose to host the database locally, it's up to you. This app utilizes MySQL.

## Environment Configuration

The repository includes an `example.env` file. You should create the following environment files:

- `.env`: Default environment for new scripts
- `.env.dev`: Used during development (`npm run start:dev`)
- `.env.test`: Used during end-to-end testing (`npm run test:e2e`)
- `.env.prod`: Used during production (`npm run start:prod`)

You can use the `example.env` file as a template.

DB_NAME - String: Name of database to use
COOKIE_KEY - String: 
SYNCHRONIZE - Boolean: Is DB enable synchronize
DB_TYPE - String: Type of db use
MIGRATIONS_RUN - Boolean: Is DB runs migrations before start
SSL - Boolean: Is DB enable ssl

## Running the Application

To run the application, use the following commands:

- **Development**:

  ```bash
  npm run start:dev
  ```

- **Production**:

  ```bash
  npm run build
  npm run start:prod
  ```

Once the application is running, you can access it via `http://localhost:3000/`.