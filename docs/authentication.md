# Authentication

All authentication in this app is handled exclusively by **Clerk** (`@clerk/nextjs`). No other auth libraries, custom auth logic, or third-party auth providers should ever be introduced.

---

## Rules

- **Clerk only.** Never implement custom sessions, JWTs, NextAuth, or any other auth mechanism.
- The `/dashboard` route is a **protected route**. Users must be signed in to access it. Enforce this via Clerk
- If a **signed-in** user navigates to the homepage (`/`), they must be **redirected to `/dashboard`**.
- Sign In and Sign Up must always launch as a **Clerk modal** — never as a dedicated full-page route. Use `<SignInButton mode="modal">` and `<SignUpButton mode="modal">`.

---

### Modal Sign In / Sign Up Buttons

```tsx
import { SignInButton, SignUpButton } from '@clerk/nextjs';

<SignInButton mode="modal">
  <button>Sign In</button>
</SignInButton>

<SignUpButton mode="modal">
  <button>Sign Up</button>
</SignUpButton>
```

### Root Layout

Wrap the entire app in `<ClerkProvider>` inside `app/layout.tsx`:

```tsx
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
```

---

## Neon project reference

This app uses the shared Neon project `LinkShortnerProject` (`little-surf-51053229`) in `aws-ap-southeast-1`.

- Default branch: `production` (`br-holy-sound-aonncu7s`)
- PostgreSQL version: `17`

Keep this project reference for future DB access, branch descriptions, and authentication-related backend setup.

---

## Account credentials

- **Clerk account**: `anquita98@gmail.com`
- **Drizzle account**: `anquita98@gmail.com`
