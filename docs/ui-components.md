# UI Components — shadcn/ui Standards

## Core Rule

**Always use shadcn/ui components. Never create custom UI primitives.**

## Usage

- All UI elements (buttons, inputs, dialogs, cards, badges, tables, etc.) must come from `shadcn/ui`.
- Import from `@/components/ui/<component>`.
- Add new shadcn/ui components via the CLI: `npx shadcn@latest add <component>`.
- Do **not** hand-edit files inside `components/ui/` — they are auto-generated.

## Composition

- Compose complex UI by combining shadcn/ui primitives.
- Place composed/feature-specific components in `components/[feature]/` or `components/shared/`.
- Keep business logic out of UI components; use Server Actions or hooks instead.

## Styling

- Use Tailwind CSS utility classes for layout and spacing adjustments.
- Use the `cn()` helper from `lib/utils.ts` to merge class names conditionally.
- Do **not** write custom CSS classes or override shadcn/ui component internals.

## Examples

```tsx
// ✅ Correct
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ❌ Wrong — never create custom primitives
const MyButton = ({ children }) => <button className="...">{children}</button>;
```
