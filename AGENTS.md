# Agent Instructions — Link Shortener Project

> **Read this entire file before touching any code.** It defines the architecture, conventions, and hard rules for this project. All LLM agents must comply with every section below.

> 🚨 **CRITICAL — NON-NEGOTIABLE RULE:** You **MUST** read the relevant individual `.md` file(s) inside the [`/docs`](./docs) directory **BEFORE generating ANY code, making ANY edits, or producing ANY output**. This is not optional. Skipping this step is a hard violation of these instructions. No exceptions. No shortcuts. Read the docs first — every single time.

---

## 1. Project Overview

This is a **Link Shortener** web application. Authenticated users can create shortened URLs, view their link history, and share public redirect links. It is built on the **Next.js App Router** and deployed to Vercel.

### Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | v4 |
| UI Components | shadcn/ui (Radix UI + CVA) | latest |
| Authentication | Clerk (`@clerk/nextjs`) | 7.x |
| ORM | Drizzle ORM | 0.45.x |
| Database | Neon Serverless PostgreSQL | — |
| Utilities | `clsx`, `tailwind-merge` | latest |

---

## 2. Docs Reference

> 🚨 **STOP. Before you write a single line of code — read the relevant file(s) below. This is mandatory and must happen every time, without exception. Failure to do so is a direct violation of these agent instructions.**

| File | Description |
|---|---|
| [`docs/authentication.md`](./docs/authentication.md) | Clerk authentication rules and implementation reference |
| [`docs/ui-components.md`](./docs/ui-components.md) | shadcn/ui component standards |
