# Contributing to Tamak Hotel Management System

Thank you for your interest in contributing! This document provides guidelines and standards for contributing to the project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Code Standards](#code-standards)
5. [Commit Guidelines](#commit-guidelines)
6. [Pull Request Process](#pull-request-process)
7. [Component Development](#component-development)
8. [Testing Guidelines](#testing-guidelines)

---

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring environment for all contributors.

### Our Standards

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what's best for the project
- Show empathy towards other contributors

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- VS Code (recommended) with extensions:
  - ESLint
  - Prettier
  - TypeScript
  - Tailwind CSS IntelliSense

### Setup

```bash
# Clone the repository
git clone https://github.com/your-org/tamak-hotels-system.git
cd tamak-hotels-system

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

---

## Development Workflow

### Branch Strategy

```
main          → Production-ready code
develop       → Integration branch
feature/*     → New features
bugfix/*      → Bug fixes
hotfix/*      → Urgent production fixes
```

### Creating a Feature Branch

```bash
# Always branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/reservation-calendar

# Make your changes
# ...

# Push to remote
git push origin feature/reservation-calendar
```

### Keeping Your Branch Updated

```bash
# Regularly sync with develop
git checkout develop
git pull origin develop
git checkout feature/your-feature
git rebase develop
```

---

## Code Standards

### TypeScript

1. **Always use explicit types**

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

2. **Prefer interfaces for objects**

   ```typescript
   // ✅ Good
   interface User {
     id: string;
     name: string;
     email: string;
   }

   // ❌ Bad (use type only for unions/intersections)
   type User = {
     id: string;
     name: string;
   };
   ```

3. **Use strict null checks**

   ```typescript
   // ✅ Good
   function getUserName(user: User | null): string {
     return user?.name ?? 'Guest';
   }

   // ❌ Bad
   function getUserName(user: User): string {
     return user.name; // May crash if user is null
   }
   ```

### React Components

1. **Functional components only**

   ```typescript
   // ✅ Good
   export function UserCard({ user }: { user: User }) {
     return <div>{user.name}</div>;
   }

   // ❌ Bad
   export class UserCard extends React.Component {
     // ...
   }
   ```

2. **Props interface naming**

   ```typescript
   // ✅ Good
   interface UserCardProps {
     user: User;
     onEdit: (id: string) => void;
   }

   export function UserCard({ user, onEdit }: UserCardProps) {
     // ...
   }
   ```

3. **Use composition**

   ```typescript
   // ✅ Good
   <Card>
     <CardHeader>
       <CardTitle>User Profile</CardTitle>
     </CardHeader>
     <CardContent>
       <UserDetails user={user} />
     </CardContent>
   </Card>

   // ❌ Bad - monolithic component
   <UserProfileCard user={user} showHeader showDetails />
   ```

### CSS/Styling

1. **Use design tokens**

   ```typescript
   import { colors, spacing } from '@/lib/design-tokens';

   const buttonStyle = {
     backgroundColor: colors.primary[500],
     padding: spacing[4],
   };
   ```

2. **CSS custom properties**

   ```css
   .button {
     background-color: var(--color-primary-500);
     padding: var(--spacing-4);
     border-radius: var(--radius-lg);
   }
   ```

3. **Responsive design**

   ```css
   /* Mobile first */
   .container {
     padding: var(--spacing-4);
   }

   /* Tablet */
   @media (min-width: 768px) {
     .container {
       padding: var(--spacing-6);
     }
   }

   /* Desktop */
   @media (min-width: 1024px) {
     .container {
       padding: var(--spacing-8);
     }
   }
   ```

### File Organization

```
component-name/
├── index.ts              # Export barrel
├── component-name.tsx    # Main component
├── component-name.test.tsx
├── component-name.stories.tsx
├── types.ts              # Component-specific types
└── styles.module.css     # Component styles
```

---

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Build/tooling changes

### Examples

```bash
# Feature
git commit -m "feat(reservations): add calendar view"

# Bug fix
git commit -m "fix(auth): resolve token refresh issue"

# Documentation
git commit -m "docs(api): update API integration guide"

# Refactoring
git commit -m "refactor(dashboard): extract stats card logic"

# With body
git commit -m "feat(rooms): implement room filtering

- Add filter by room type
- Add filter by availability
- Add filter by floor
- Update tests"
```

### Commit Best Practices

1. **Make atomic commits**: One logical change per commit
2. **Write clear messages**: Explain what and why, not how
3. **Reference issues**: Use `Closes #123` or `Fixes #456`
4. **Test before committing**: Ensure all tests pass

---

## Pull Request Process

### Creating a Pull Request

1. **Update from develop**

   ```bash
   git checkout develop
   git pull origin develop
   git checkout feature/your-feature
   git rebase develop
   ```

2. **Run checks**

   ```bash
   npm run lint
   npm run type-check
   npm test
   npm run build
   ```

3. **Create PR**
   - Use the PR template
   - Write a clear description
   - Link related issues
   - Add screenshots for UI changes
   - Request reviewers

### PR Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made

- Change 1
- Change 2
- Change 3

## Testing

- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

## Screenshots

(If applicable)

## Related Issues

Closes #123

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tests pass
- [ ] Build succeeds
```

### Review Process

1. **Automated Checks**

   - Linting
   - Type checking
   - Tests
   - Build

2. **Code Review**

   - At least one approval required
   - Address all comments
   - No unresolved discussions

3. **Merge**
   - Squash and merge (for features)
   - Rebase and merge (for bug fixes)
   - Delete branch after merge

---

## Component Development

### Creating a New Component

1. **Use the template**

   ```bash
   npm run generate:component UserProfile
   ```

2. **Component structure**

   ```typescript
   // user-profile.tsx
   import { colors } from '@/lib/design-tokens';
   import styles from './user-profile.module.css';

   interface UserProfileProps {
     user: User;
     onEdit?: () => void;
   }

   /**
    * Displays user profile information
    */
   export function UserProfile({ user, onEdit }: UserProfileProps) {
     return (
       <div className={styles.container}>
         <h2>{user.name}</h2>
         <p>{user.email}</p>
         {onEdit && <button onClick={onEdit}>Edit</button>}
       </div>
     );
   }
   ```

3. **Add tests**

   ```typescript
   // user-profile.test.tsx
   import { render, screen } from '@testing-library/react';
   import { UserProfile } from './user-profile';

   describe('UserProfile', () => {
     const mockUser = {
       id: '1',
       name: 'John Doe',
       email: 'john@example.com',
     };

     it('renders user information', () => {
       render(<UserProfile user={mockUser} />);
       expect(screen.getByText('John Doe')).toBeInTheDocument();
       expect(screen.getByText('john@example.com')).toBeInTheDocument();
     });

     it('calls onEdit when edit button is clicked', () => {
       const onEdit = vi.fn();
       render(<UserProfile user={mockUser} onEdit={onEdit} />);
       fireEvent.click(screen.getByText('Edit'));
       expect(onEdit).toHaveBeenCalled();
     });
   });
   ```

4. **Add Storybook story**

   ```typescript
   // user-profile.stories.tsx
   import type { Meta, StoryObj } from '@storybook/react';
   import { UserProfile } from './user-profile';

   const meta: Meta<typeof UserProfile> = {
     title: 'Components/UserProfile',
     component: UserProfile,
   };

   export default meta;
   type Story = StoryObj<typeof UserProfile>;

   export const Default: Story = {
     args: {
       user: {
         id: '1',
         name: 'John Doe',
         email: 'john@example.com',
       },
     },
   };

   export const WithEdit: Story = {
     args: {
       ...Default.args,
       onEdit: () => alert('Edit clicked'),
     },
   };
   ```

### Component Checklist

- [ ] TypeScript interfaces defined
- [ ] Props documented with JSDoc
- [ ] Accessible (WCAG AA)
- [ ] Responsive design
- [ ] RTL support (if applicable)
- [ ] Dark mode support
- [ ] Unit tests (>80% coverage)
- [ ] Storybook story
- [ ] Documented in README

---

## Testing Guidelines

### Unit Tests

```typescript
// Test component behavior
describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(onClick).toHaveBeenCalled();
  });

  it('is disabled when loading', () => {
    render(<Button loading>Click</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### Integration Tests

```typescript
// Test user flows
describe('Login flow', () => {
  it('logs in user with valid credentials', async () => {
    render(<LoginForm />);

    await userEvent.type(screen.getByLabelText('Email'), 'test@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'password123');
    await userEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() => {
      expect(screen.getByText('Welcome back!')).toBeInTheDocument();
    });
  });

  it('shows error with invalid credentials', async () => {
    render(<LoginForm />);

    await userEvent.type(screen.getByLabelText('Email'), 'invalid@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'wrong');
    await userEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() => {
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
    });
  });
});
```

### E2E Tests

```typescript
// Test critical user journeys
test('user can create a reservation', async ({ page }) => {
  // Login
  await page.goto('/login');
  await page.fill('[name="email"]', 'admin@tamak.com');
  await page.fill('[name="password"]', 'password123');
  await page.click('button[type="submit"]');

  // Navigate to reservations
  await page.click('text=Reservations');
  await page.click('text=New Reservation');

  // Fill form
  await page.fill('[name="guestName"]', 'John Doe');
  await page.fill('[name="email"]', 'john@example.com');
  await page.fill('[name="checkIn"]', '2025-01-01');
  await page.fill('[name="checkOut"]', '2025-01-05');
  await page.selectOption('[name="roomType"]', 'deluxe');

  // Submit
  await page.click('button[type="submit"]');

  // Verify
  await expect(page.locator('text=Reservation created')).toBeVisible();
});
```

---

## Additional Resources

- [Architecture Documentation](./ARCHITECTURE.md)
- [Design System Guide](./lib/design-tokens.ts)
- [API Integration Guide](./services/README.md)
- [Styling Guide](./STYLING_GUIDE.md)

---

## Questions?

If you have questions, please:

1. Check existing documentation
2. Search closed issues
3. Ask in team chat
4. Create a discussion on GitHub

---

**Happy Contributing! 🎉**
