# 🚀 Job Board App — Next.js + Prisma

🔴 **Live Demo:**  
👉 https://job-board-seven-silk.vercel.app/

A modern full-stack **Job Board application** where users can post jobs, search listings, and apply to positions. Built using **Next.js, Prisma, PostgreSQL, and TailwindCSS**, demonstrating real-world CRUD operations, authentication, and dynamic filtering.

---

## 📌 Project Overview

This application allows users to:

- Post job listings
- Search and browse jobs
- Apply to job postings
- Manage jobs and applications via dashboard
- Authenticate using GitHub login
- View dynamic job detail pages
- Use advanced job filtering

The project demonstrates practical full-stack development using Next.js with database integration and authentication.

---

## 🛠 Tech Stack

- **Next.js 15** — Fullstack React framework
- **Prisma ORM** — Database ORM & relations
- **PostgreSQL / Neon DB** — Database
- **TailwindCSS** — Styling
- **TypeScript** — Type safety
- **Auth.js (NextAuth)** — Authentication
- **Vercel** — Deployment platform

---

## ⚡ Features

### 📝 Post Jobs
Authenticated users can create job listings including:
- Title
- Company
- Location
- Job type
- Description
- Salary

---

### 🔍 Advanced Job Search
Jobs can be filtered by:
- Keyword
- Company
- Location
- Job type

Filtering is powered by Prisma queries.

---

### 📄 Job Detail Pages
Each job has a dedicated dynamic page displaying:
- Job information
- Company details
- Posting date
- Apply option

---

### 👤 User Dashboard
Users can:
- View their posted jobs
- Track applicants
- Manage applications

---

### ✅ Job Applications
Users can apply to jobs, and applications are linked to both user and job.

---

### 🔐 Authentication
Users must sign in using GitHub before:
- Posting jobs
- Applying to jobs
- Accessing dashboard

---

## 🖼 Screenshots

### Home Page
<img width="1347" alt="Home" src="https://github.com/user-attachments/assets/dcde382d-f842-4493-af5e-0b956cb89b46" />

### Dashboard
<img width="1243" alt="Dashboard" src="https://github.com/user-attachments/assets/29da6fbc-6b8c-4475-88ad-a9b700461401" />

---

## 🚀 Quick Start (Local Setup)

### Prerequisites
- Node.js installed
- PostgreSQL / Neon database
- GitHub OAuth app
- Prisma CLI

---

### Clone repository

```bash
git clone https://github.com/yourusername/job-board.git
cd job-board
```

---

### Install dependencies

```bash
npm install
```

---

### Setup environment variables

Create `.env.local`:

```
DATABASE_URL=your_database_url
AUTH_SECRET=your_secret
AUTH_GITHUB_ID=github_client_id
AUTH_GITHUB_SECRET=github_client_secret
```

---

### Generate Prisma client

```bash
npx prisma generate
```

---

### Run migrations

```bash
npx prisma migrate dev
```

---

### Start development server

```bash
npm run dev
```

App runs locally at:

```
http://localhost:3000
```

---

## ☁️ Deployment

The app is deployed on **Vercel**.

Deployment steps:

1. Push code to GitHub
2. Import repository into Vercel
3. Add environment variables
4. Deploy

Live App:

👉 https://job-board-seven-silk.vercel.app/

---

## 📚 Useful Resources

- Next.js Docs — https://nextjs.org/docs
- Prisma Docs — https://www.prisma.io/docs
- PostgreSQL Docs — https://www.postgresql.org/docs/
- Tailwind CSS Docs — https://tailwindcss.com/docs
- Vercel — https://vercel.com

---

## 👨‍💻 Author

**Tushar Lakhani**  
GitHub: https://github.com/tusharrr017-arch
