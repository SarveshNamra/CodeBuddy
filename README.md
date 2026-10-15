# CodeBuddy

CodeBuddy is a full-stack coding practice platform inspired by LeetCode. It lets users browse coding problems, solve them in an in-browser editor, execute code against test cases, track submissions, and organize problems into playlists.

## Tech Stack

### Frontend
- React 19 + Vite
- Zustand for state management
- React Router
- Monaco Editor
- Tailwind CSS + DaisyUI

### Backend
- Node.js + Express
- Prisma ORM
- PostgreSQL
- JWT + cookie-based authentication
- Judge0 API integration for code execution

## Core Features

- User signup/login/logout with protected routes
- Admin-only problem creation and management
- Problem list with solved-state tracking
- Problem detail page with code editor and language selection
- Multi-testcase code execution and result comparison
- Submission history and per-problem submission counts
- Custom playlists for organizing problems

## Repository Structure

- `/frontend` — React client app
- `/backend` — Express API + Prisma schema

## API Overview

Main backend route groups under `/api/v1`:
- `/auth` — register, login, logout, auth check
- `/problems` — CRUD and solved-problem queries
- `/execute-code` — run code against test cases via Judge0
- `/submission` — submission history endpoints
- `/playlist` — playlist and playlist-problem mapping

## Local Setup

### 1) Backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with at least:

```env
DATABASE_URL=...
JWT_SECRET=...
JUDGE0_API_URL=...
JUDGE0_RAPIDAPI_KEY=...
JUDGE0_RAPIDAPI_HOST=judge0-ce.p.rapidapi.com
```

Run Prisma client generation (also runs automatically on install via `postinstall`):

```bash
npx prisma generate
```

Start backend dev server:

```bash
npm run dev
```

### 2) Frontend

```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/`:

```env
VITE_API_URL=http://localhost:8080/api/v1
```

Start frontend dev server:

```bash
npm run dev
```

## Available Scripts

### Frontend (`/frontend/package.json`)
- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run lint` — run ESLint
- `npm run preview` — preview production build

### Backend (`/backend/package.json`)
- `npm run dev` — start API with nodemon

## Notes

- Authenticated requests use cookies (`withCredentials: true` on frontend Axios instance).
- CORS is configured for local frontend and deployed frontend domains.
- Problem reference solutions are validated against test cases before creation/update.
