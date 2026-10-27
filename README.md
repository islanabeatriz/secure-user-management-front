# FinTracky — User Management Frontend

Frontend web application for the UserHub ecosystem. It provides a sign-in and
registration flow plus a financial dashboard for tracking income and expenses.

![React](https://img.shields.io/badge/react-18.3.1-61DAFB)
![TypeScript](https://img.shields.io/badge/typescript-5.7-3178C6)
![Vite](https://img.shields.io/badge/vite-6.3.5-646CFF)

## Features

- Login and account registration screens
- Password visibility toggle and form feedback
- Financial dashboard with balance, income and expense totals
- Monthly income and expense chart
- Add income or expense transactions
- Brazilian Real (`BRL`) currency formatting
- Responsive interface with Tailwind CSS and reusable UI components
- Session persistence through `localStorage`

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS 4
- Recharts
- Lucide React
- Radix UI
- Motion
- React Hook Form

## Requirements

- Node.js 18 or newer
- npm or pnpm
- UserHub API running locally when using login and registration

## Installation

```bash
git clone https://github.com/islanabeatriz/secure-user-management-front.git
cd secure-user-management-front
npm install
```

The repository also includes a `pnpm-lock.yaml`, so pnpm can be used instead:

```bash
pnpm install
```

## Development

Start the Vite development server:

```bash
npm run dev
```

The application is available at <http://localhost:5173>.

By default, requests under `/api` are proxied to
`http://localhost:8080`. This allows the frontend to communicate with the
backend locally without hardcoding the backend URL in components.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run format` | Format the source files with Oxfmt |

## API configuration

The API base URL is read from `VITE_API_URL`:

```bash
VITE_API_URL=http://localhost:8080 npm run dev
```

When `VITE_API_URL` is not provided, the frontend uses `/api`. In development,
Vite rewrites that prefix and forwards the request to `http://localhost:8080`.

The frontend currently expects these backend routes:

| Method | Endpoint | Used for |
| --- | --- | --- |
| `POST` | `/auth/login` | Authenticate the user and receive a token |
| `POST` | `/users` | Register a new user |
| `GET` | `/users/email/{email}` | Load the authenticated user's profile |

After login, the token is sent as a `Bearer` token and stored under
`userhub-token` in `localStorage`.

> The current UserHub API checkout must expose `/auth/login` for the login flow
> in this frontend to work. Registration also performs a login immediately
> after creating the account.

## Transactions and persistence

Transactions are currently stored only in the browser under the
`fintracky-transactions` `localStorage` key. They are not sent to the backend
and are not synchronized between browsers or devices.

The dashboard includes sample chart data for the monthly overview. New
transactions affect the balance cards and recent-transactions list in the
current browser session.

## Project structure

```text
src/
├── app/
│   ├── App.tsx                 # Authentication and dashboard entry point
│   ├── api.ts                  # API requests and local persistence
│   └── components/
│       ├── Login.tsx           # Login and registration form
│       ├── Dashboard.tsx       # Main financial dashboard
│       ├── AddTransactionModal.tsx
│       ├── TransactionList.tsx
│       ├── FinancialChart.tsx
│       └── ui/                 # Reusable interface components
├── main.tsx
└── styles/
```

## Production build

```bash
npm run build
npm run preview
```

The generated files are written to `dist/`. Configure `VITE_API_URL` with the
URL of the deployed backend before building for production.

## License

No license has been defined for this repository yet.
