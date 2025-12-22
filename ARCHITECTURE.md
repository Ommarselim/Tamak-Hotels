# Tamak Hotel Management System - Architecture Documentation

## 📋 Table of Contents

1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Design System](#design-system)
5. [Code Standards](#code-standards)
6. [Best Practices](#best-practices)
7. [Performance Guidelines](#performance-guidelines)
8. [Security Guidelines](#security-guidelines)
9. [Accessibility](#accessibility)
10. [Testing Strategy](#testing-strategy)

---

## Overview

Tamak Hotel Management System is a comprehensive hotel administration platform built with Next.js 14, featuring bilingual support (Arabic/English), a robust design system, and integration with a .NET backend.

### Key Features

- ✅ Bilingual support (Arabic/English) with RTL
- ✅ Dark mode support
- ✅ Comprehensive design system
- ✅ Type-safe API integration
- ✅ Role-based access control
- ✅ Real-time updates
- ✅ Responsive design (mobile-first)

---

## Technology Stack

### Frontend

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Custom CSS with design tokens
- **State Management**:
  - TanStack Query (server state)
  - Zustand (client state)
- **Forms**: react-hook-form + zod
- **Internationalization**: next-intl
- **Charts**: Recharts
- **UI Components**: Custom + shadcn/ui

### Backend Integration

- **API**: .NET Web API
- **Authentication**: JWT with refresh tokens
- **Protocol**: REST + WebSocket (for real-time)

### Development Tools

- **Package Manager**: npm
- **Linting**: ESLint
- **Formatting**: Prettier
- **Type Checking**: TypeScript
- **Testing**: Vitest + Testing Library + Playwright
- **CI/CD**: GitHub Actions

---

## Project Structure

```
tamak-hotels-system/
├── app/                      # Next.js App Router
│   ├── api/                 # API routes
│   ├── [locale]/            # Internationalized routes
│   │   ├── (auth)/         # Authentication pages
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/    # Protected dashboard routes
│   │   │   ├── dashboard/
│   │   │   ├── reservations/
│   │   │   ├── rooms/
│   │   │   ├── guests/
│   │   │   ├── staff/
│   │   │   └── ...
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── components/               # React components
│   ├── ui/                  # Base UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── dashboard/           # Dashboard-specific components
│   │   ├── stats-card.tsx
│   │   ├── charts/
│   │   └── ...
│   ├── forms/               # Form components
│   └── layout/              # Layout components
│       ├── sidebar.tsx
│       ├── header.tsx
│       └── ...
├── lib/                      # Utilities and configuration
│   ├── design-tokens.ts     # Design system tokens
│   ├── css-variables.css    # CSS custom properties
│   ├── theme-config.ts      # Theme configuration
│   ├── utils.ts             # Helper functions
│   ├── use-rtl.ts          # RTL utilities
│   └── validators/          # Zod schemas
├── services/                 # API services
│   ├── api-client.ts        # Base API client
│   ├── auth.service.ts      # Authentication
│   ├── reservations.service.ts
│   ├── rooms.service.ts
│   └── ...
├── types/                    # TypeScript types
│   ├── api.types.ts         # API interfaces
│   ├── entities.types.ts    # Data models
│   └── ui.types.ts          # UI-specific types
├── hooks/                    # Custom React hooks
│   ├── use-auth.ts
│   ├── use-reservations.ts
│   └── ...
├── store/                    # State management
│   ├── auth.store.ts
│   └── ...
├── i18n/                     # Internationalization
│   ├── request.ts
│   └── routing.ts
├── messages/                 # Translation files
│   ├── ar.json
│   └── en.json
├── public/                   # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
└── tests/                    # Test files
    ├── unit/
    ├── integration/
    └── e2e/
```

---

## Design System

### Design Tokens

All design tokens are defined in `lib/design-tokens.ts` and exported as CSS variables in `lib/css-variables.css`.

#### Color Palette

**Primary Colors (Brand)**

- Used for: Primary buttons, links, key UI elements
- Main color: `#5D3F36` (primary-800)
- Range: 50-950 (11 shades)

**Secondary Colors**

- Olive: Success states
- Red-Brown: Error/warning states
- Clear Brown: Alternative accents
- Mint: Info states

**Neutral Colors**

- Used for: Text, borders, backgrounds
- Range: 50-950 (11 shades)

**Semantic Colors**

- Success: `#528748`
- Error: `#875448`
- Warning: `#877348`
- Info: `#488787`

#### Usage Examples

```typescript
import { colors } from '@/lib/design-tokens';

// Using in TypeScript
const buttonStyle = {
  backgroundColor: colors.primary[500],
  color: colors.semantic.text.inverse,
};

// Using CSS Variables
.button {
  background-color: var(--color-primary-500);
  color: var(--color-text-inverse);
}
```

### Typography

- **Font Family**: Inter (sans-serif)
- **Font Sizes**: xs (12px) to 5xl (48px)
- **Font Weights**: light (300) to extrabold (800)
- **Line Heights**: Defined for optimal readability

### Spacing

- **Base Unit**: 4px (0.25rem)
- **Scale**: 1-32 (exponential scale)
- **Usage**: Consistent spacing throughout the app

### Components

All components follow these principles:

1. **Composition**: Built from smaller, reusable pieces
2. **Prop-based**: Flexible through props, not variants
3. **Accessible**: WCAG 2.1 AA compliant
4. **Type-safe**: Full TypeScript support
5. **Documented**: Clear prop descriptions

---

## Code Standards

### TypeScript Guidelines

1. **Use Strict Mode**

   ```typescript
   // tsconfig.json
   {
     "strict": true,
     "strictNullChecks": true,
     "noImplicitAny": true
   }
   ```

2. **Explicit Types**

   ```typescript
   // ✅ Good
   function calculateTotal(items: CartItem[]): number {
     return items.reduce((sum, item) => sum + item.price, 0);
   }

   // ❌ Bad
   function calculateTotal(items) {
     return items.reduce((sum, item) => sum + item.price, 0);
   }
   ```

3. **Interface over Type**

   ```typescript
   // ✅ Good - Use interface for objects
   interface User {
     id: string;
     name: string;
     email: string;
   }

   // ✅ Good - Use type for unions/intersections
   type Status = 'pending' | 'active' | 'inactive';
   ```

### React Best Practices

1. **Component Structure**

   ```typescript
   // 1. Imports
   import { useState } from 'react';
   import { Button } from '@/components/ui/button';

   // 2. Types
   interface Props {
     title: string;
     onSubmit: () => void;
   }

   // 3. Component
   export function MyComponent({ title, onSubmit }: Props) {
     // 4. Hooks
     const [state, setState] = useState();

     // 5. Handlers
     const handleClick = () => {
       // ...
     };

     // 6. Effects
     useEffect(() => {
       // ...
     }, []);

     // 7. Render
     return <div>{/* JSX */}</div>;
   }
   ```

2. **Custom Hooks**

   ```typescript
   // ✅ Good - Start with "use"
   function useReservations() {
     return useQuery({
       queryKey: ['reservations'],
       queryFn: fetchReservations,
     });
   }
   ```

3. **Avoid Prop Drilling**

   ```typescript
   // ✅ Good - Use Context or state management
   const AuthContext = createContext<AuthState>();

   // ❌ Bad - Passing props through many layers
   <Parent user={user}>
     <Child user={user}>
       <GrandChild user={user} />
     </Child>
   </Parent>;
   ```

### Naming Conventions

1. **Files**: kebab-case

   - Components: `user-profile.tsx`
   - Utilities: `format-date.ts`
   - Types: `api.types.ts`

2. **Components**: PascalCase

   ```typescript
   export function UserProfile() {}
   ```

3. **Functions/Variables**: camelCase

   ```typescript
   const userName = 'John';
   function getUserName() {}
   ```

4. **Constants**: UPPER_SNAKE_CASE

   ```typescript
   const API_BASE_URL = 'https://api.example.com';
   ```

5. **Types/Interfaces**: PascalCase
   ```typescript
   interface UserData {}
   type UserStatus = 'active' | 'inactive';
   ```

### Code Organization

1. **Imports Order**

   ```typescript
   // 1. External dependencies
   import React from 'react';
   import { useQuery } from '@tanstack/react-query';

   // 2. Internal dependencies (absolute imports)
   import { Button } from '@/components/ui/button';
   import { formatDate } from '@/lib/utils';

   // 3. Relative imports
   import { Header } from './header';
   import styles from './styles.module.css';

   // 4. Types
   import type { User } from '@/types';
   ```

2. **File Length**

   - Max 300 lines per file
   - Split large components into smaller ones
   - Extract logic into custom hooks

3. **Function Length**
   - Max 50 lines per function
   - Extract complex logic into helpers

---

## Best Practices

### State Management

1. **Server State**: Use TanStack Query

   ```typescript
   function useReservations() {
     return useQuery({
       queryKey: ['reservations'],
       queryFn: api.getReservations,
       staleTime: 5 * 60 * 1000, // 5 minutes
     });
   }
   ```

2. **Client State**: Use Zustand

   ```typescript
   const useAuthStore = create<AuthState>((set) => ({
     user: null,
     setUser: (user) => set({ user }),
     logout: () => set({ user: null }),
   }));
   ```

3. **Form State**: Use react-hook-form
   ```typescript
   const form = useForm<FormData>({
     resolver: zodResolver(schema),
     defaultValues: {},
   });
   ```

### API Integration

1. **Type-Safe API Client**

   ```typescript
   // services/api-client.ts
   import axios from 'axios';

   export const apiClient = axios.create({
     baseURL: process.env.NEXT_PUBLIC_API_URL,
     headers: {
       'Content-Type': 'application/json',
     },
   });

   // Request interceptor
   apiClient.interceptors.request.use((config) => {
     const token = getToken();
     if (token) {
       config.headers.Authorization = `Bearer ${token}`;
     }
     return config;
   });

   // Response interceptor
   apiClient.interceptors.response.use(
     (response) => response,
     async (error) => {
       // Handle refresh token
       if (error.response?.status === 401) {
         await refreshToken();
         return apiClient(error.config);
       }
       return Promise.reject(error);
     }
   );
   ```

2. **Service Layer**

   ```typescript
   // services/reservations.service.ts
   export const reservationsService = {
     async getAll(params: GetReservationsParams) {
       const { data } = await apiClient.get<Reservation[]>('/reservations', {
         params,
       });
       return data;
     },

     async getById(id: string) {
       const { data } = await apiClient.get<Reservation>(`/reservations/${id}`);
       return data;
     },

     async create(reservation: CreateReservationDto) {
       const { data } = await apiClient.post<Reservation>('/reservations', reservation);
       return data;
     },

     async update(id: string, reservation: UpdateReservationDto) {
       const { data } = await apiClient.put<Reservation>(`/reservations/${id}`, reservation);
       return data;
     },

     async delete(id: string) {
       await apiClient.delete(`/reservations/${id}`);
     },
   };
   ```

### Error Handling

1. **API Errors**

   ```typescript
   try {
     const data = await api.getData();
     return data;
   } catch (error) {
     if (error instanceof AxiosError) {
       toast.error(error.response?.data?.message || 'An error occurred');
     }
     throw error;
   }
   ```

2. **Form Errors**
   ```typescript
   const onSubmit = async (data: FormData) => {
     try {
       await api.submit(data);
       toast.success('Success!');
     } catch (error) {
       if (error instanceof ValidationError) {
         error.errors.forEach((err) => {
           form.setError(err.field, { message: err.message });
         });
       }
     }
   };
   ```

### Performance Optimization

1. **Code Splitting**

   ```typescript
   // Dynamic imports
   const HeavyComponent = dynamic(() => import('./heavy-component'), {
     loading: () => <Skeleton />,
     ssr: false,
   });
   ```

2. **Memoization**

   ```typescript
   // Memoize expensive computations
   const expensiveValue = useMemo(() => {
     return computeExpensiveValue(data);
   }, [data]);

   // Memoize callbacks
   const handleClick = useCallback(() => {
     doSomething(value);
   }, [value]);

   // Memoize components
   const MemoizedComponent = memo(ExpensiveComponent);
   ```

3. **Virtual Lists**

   ```typescript
   import { useVirtualizer } from '@tanstack/react-virtual';

   function LongList({ items }) {
     const virtualizer = useVirtualizer({
       count: items.length,
       getScrollElement: () => parentRef.current,
       estimateSize: () => 50,
     });

     return (
       <div ref={parentRef}>
         {virtualizer.getVirtualItems().map((item) => (
           <div key={item.key} style={{ height: item.size }}>
             {items[item.index]}
           </div>
         ))}
       </div>
     );
   }
   ```

---

## Performance Guidelines

### Bundle Size

1. **Analyze Bundle**

   ```bash
   npm run build
   npm run analyze
   ```

2. **Tree Shaking**

   - Use named imports
   - Avoid importing entire libraries

3. **Code Splitting**
   - Split by route
   - Lazy load heavy components
   - Defer non-critical code

### Runtime Performance

1. **React Profiler**

   - Identify slow renders
   - Optimize re-renders
   - Use React.memo strategically

2. **Web Vitals**
   - LCP < 2.5s
   - FID < 100ms
   - CLS < 0.1

### Data Fetching

1. **Prefetching**

   ```typescript
   // Prefetch on hover
   <Link href="/reservations" onMouseEnter={() => prefetchQuery(['reservations'])}>
     Reservations
   </Link>
   ```

2. **Caching Strategy**
   ```typescript
   useQuery({
     queryKey: ['reservations'],
     queryFn: fetchReservations,
     staleTime: 5 * 60 * 1000, // 5 min
     cacheTime: 10 * 60 * 1000, // 10 min
   });
   ```

---

## Security Guidelines

### Authentication

1. **Token Storage**

   - Use HttpOnly cookies (coordinate with .NET)
   - Never store in localStorage for sensitive data
   - Implement CSRF protection

2. **Token Refresh**
   ```typescript
   async function refreshToken() {
     const refreshToken = getRefreshToken();
     const { accessToken } = await api.refresh(refreshToken);
     setAccessToken(accessToken);
   }
   ```

### Input Validation

1. **Client-Side Validation**

   ```typescript
   const schema = z.object({
     email: z.string().email(),
     password: z.string().min(8),
   });
   ```

2. **Sanitization**

   ```typescript
   import DOMPurify from 'dompurify';

   const clean = DOMPurify.sanitize(dirty);
   ```

### Authorization

1. **Protected Routes**

   ```typescript
   export default function ProtectedLayout({ children }) {
     const { user } = useAuth();

     if (!user) {
       redirect('/login');
     }

     return children;
   }
   ```

2. **Role-Based Access**
   ```typescript
   function hasPermission(user: User, permission: Permission) {
     return user.permissions.includes(permission);
   }
   ```

---

## Accessibility

### WCAG 2.1 AA Compliance

1. **Semantic HTML**

   ```tsx
   <button>Click me</button>  // ✅
   <div onClick={}>Click me</div>  // ❌
   ```

2. **ARIA Labels**

   ```tsx
   <button aria-label="Close dialog">
     <X />
   </button>
   ```

3. **Keyboard Navigation**

   - All interactive elements focusable
   - Visible focus indicators
   - Tab order makes sense

4. **Color Contrast**

   - Text: 4.5:1 minimum
   - Large text: 3:1 minimum
   - Use design tokens (already optimized)

5. **Screen Readers**
   - Test with NVDA/JAWS
   - Provide alt text for images
   - Use proper heading hierarchy

---

## Testing Strategy

### Unit Tests (Vitest)

```typescript
describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2025-01-01');
    expect(formatDate(date)).toBe('01/01/2025');
  });
});
```

### Integration Tests (Testing Library)

```typescript
describe('LoginForm', () => {
  it('submits form with valid data', async () => {
    const onSubmit = vi.fn();
    render(<LoginForm onSubmit={onSubmit} />);

    await userEvent.type(screen.getByLabelText('Email'), 'test@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'password123');
    await userEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(onSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });
});
```

### E2E Tests (Playwright)

```typescript
test('user can login', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[name="email"]', 'test@example.com');
  await page.fill('[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/dashboard');
});
```

---

## Deployment

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.tamak-hotel.com
NEXT_PUBLIC_APP_URL=https://tamak-hotel.com
```

### Build Process

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build

# Start production server
npm start
```

### CI/CD Pipeline

1. **Pull Request Checks**

   - Lint
   - Type check
   - Unit tests
   - Build

2. **Deployment**
   - Staging: Auto-deploy on merge to `develop`
   - Production: Auto-deploy on merge to `main`

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)
- [TanStack Query](https://tanstack.com/query)
- [Design Tokens Specification](https://design-tokens.github.io/community-group/)

---

**Last Updated**: December 23, 2025
**Version**: 1.0.0
