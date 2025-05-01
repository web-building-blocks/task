# Task Dashboard

A simple task management dashboard built with Next.js, TypeScript, MongoDB, and ShadCN UI.

## Features

- Task list with sorting and filtering

- ShadCN UI for clean design and consistent components

- MongoDB integration using local database

- Seed script with faker-generated sample data

  The `data/seed.ts` script uses [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) to generate 100 fake tasks. This makes it easy to populate your local database for testing and UI development.

  Each task includes:

  - A unique ID
  - A random 3-word title
  - A random label, status, and priority from predefined arrays

## Prerequisites

- Node.js (v18 or later recommended)
- A local MongoDB server running at `mongodb://127.0.0.1:27017`

## Getting Started

### 1. Clone the repository

```bash
https://github.com/web-building-blocks/task.git
cd task
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory with the following content:

```
MONGODB_URI=mongodb://127.0.0.1:27017/task
```

Make sure your local MongoDB server is running.

### 4. Seed the database (optional)

This will populate the `task` database with 100 sample tasks:

```bash
npm install -D tsx
npm run seed
```

The seed script is located at `data/seed.ts` and uses Faker.js to generate mock tasks.

### 5. Start the development server

```bash
npm run dev
```

Then open your browser and go to `http://localhost:3000`

## Scripts

- `npm run dev`: Start the Next.js development server
- `npm run seed`: Run the seed script to insert tasks into MongoDB
- `npm run build`: Build the production app
- `npm run start`: Start the production server
- `npm run lint`: Lint the codebase

## Tech Stack

- Next.js
- TypeScript
- MongoDB
- Faker.js
- ShadCN UI
- Radix UI

