# EMI Product App (Snapmint-style clone)

## What
A simple full-stack product page showing EMI plans fetched from a backend API and backed by MongoDB. Each product has its own URL.

## Tech
- Frontend: React (Vite), Tailwind CSS
- Backend: Node.js, Express
- DB: MongoDB (Mongoose)
- Deployment: Vercel / MongoDB Atlas

## Setup (local)

### 1) Backend
1. `cd backend`
2. Create `.env` from `.env.example` and set `MONGODB_URI` (MongoDB Atlas recommended).
3. `npm install`
4. Seed DB: `npm run seed` (this will populate 3 products)
5. Start server: `npm run dev` (server on `http://localhost:4000`)

API endpoints:
- `GET /api/products` — list all products (variants include monthlyPayment)
- `GET /api/products/:slug` — single product by slug, e.g. `/api/products/iphone-17-pro`

Example response: see API output in the assignment.

### 2) Frontend
1. `cd frontend`
2. `npm install`
3. If backend is at different host, create `.env` with `VITE_API_BASE=http://localhost:4000`
4. Start dev server: `npm run dev`

## Deployment
- **Backend**: Deploy to Render / Heroku / Railway. Set `MONGODB_URI` environment variable there.
- **Frontend**: Deploy to Vercel. Set environment variable `VITE_API_BASE` to the backend URL.

## Seed data & schema
- See `backend/seed/seed.js` for seed data.
- Schema is implemented in `backend/models/Product.js`.

## How EMI is computed
Monthly EMI is calculated using the standard amortization formula. For 0% interest, monthly = price / months.


