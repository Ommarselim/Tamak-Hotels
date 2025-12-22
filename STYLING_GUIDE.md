# Styling System Guide - Tamak Hotels System

## 📚 Overview

Our styling system uses a **hybrid approach** combining:
1. **CSS Variables** (Design Tokens)
2. **Tailwind CSS** (Utility-First)
3. **Utility Classes** (Custom Reusable)
4. **TypeScript Constants** (Type-Safe Config)

This is the **modern best practice** for scalable, maintainable applications.

---

## 🎨 Styling Architecture

### 1. **CSS Variables (Design Tokens)**
**Location**: `app/globals.css`

```css
:root {
  --brand-primary: #5d3f36;
  --surface-primary: 255 255 255;
  --text-primary: 0 0 0;
}

.dark {
  --brand-primary-dark: #d4a574;
  --surface-primary: 31 41 55;
  --text-primary: 255 255 255;
}
```

**✅ Pros:**
- Single source of truth
- Automatic dark mode switching
- Runtime changes possible
- Semantic naming

**📖 Use for:**
- Core color palette
- Theme-specific values
- Brand colors

---

### 2. **Tailwind CSS Utility Classes**
**What we use**: `bg-white`, `dark:bg-gray-800`, `text-gray-600`

```tsx
<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
```

**✅ Pros:**
- Fast development
- Consistent spacing/colors
- Built-in responsive design
- Dark mode with `dark:` prefix

**📖 Use for:**
- Layout and spacing
- Most component styling
- Responsive design
- Quick prototyping

---

### 3. **Custom Utility Classes**
**Location**: `app/globals.css`

```css
/* Reusable component patterns */
.card-primary {
  @apply bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg;
}

.text-heading {
  @apply text-gray-900 dark:text-white font-semibold;
}
```

```tsx
// Usage
<div className="card-primary p-6">
  <h2 className="text-heading">Title</h2>
</div>
```

**✅ Pros:**
- DRY (Don't Repeat Yourself)
- Easier refactoring
- Consistent patterns
- Shorter class strings

**📖 Use for:**
- Frequently repeated combinations
- Component-specific patterns
- Complex multi-class patterns

---

### 4. **TypeScript Configuration**
**Location**: `lib/theme-config.ts`

```typescript
import { theme } from '@/lib/theme-config';

// Type-safe constants
const cardClass = theme.commonClasses.card;
const spacing = theme.spacing.lg;
```

**✅ Pros:**
- Type safety
- Autocomplete
- Easy to find usages
- Can be computed/dynamic

**📖 Use for:**
- Shared constants
- Component sizes
- Animation durations
- Breakpoints

---

## 🏗️ Best Practices Implementation

### **Principle 1: Cascade of Abstraction**

```
CSS Variables (lowest level)
    ↓
Tailwind Utilities
    ↓
Custom Utility Classes
    ↓
Component Classes
    ↓
Component Props (highest level)
```

### **Principle 2: Start Specific, Abstract When Repeated**

**❌ Bad (Too abstract too soon):**
```tsx
// Abstracting on first use
<div className="hotel-card">
```

**✅ Good (Abstract after repetition):**
```tsx
// First use - use Tailwind
<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">

// After 3+ uses - create utility class
<div className="card-primary p-4">
```

---

## 📋 Consistency Guidelines

### **Color Usage**

```tsx
// ✅ GOOD - Consistent, semantic
<div className="bg-white dark:bg-gray-800">
  <h1 className="text-gray-900 dark:text-white">Title</h1>
  <p className="text-gray-600 dark:text-gray-300">Body</p>
  <span className="text-gray-400 dark:text-gray-500">Muted</span>
</div>

// ❌ BAD - Inconsistent colors
<div className="bg-white dark:bg-gray-900"> {/* Different from standard */}
  <h1 className="text-black dark:text-gray-100"> {/* Not using semantic */}
  <p className="text-gray-700 dark:text-gray-400"> {/* Different shade */}
</div>
```

### **Standard Color Scale**

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| **Backgrounds** |
| Primary Surface | `bg-white` | `dark:bg-gray-800` |
| Secondary Surface | `bg-gray-50` | `dark:bg-gray-900` |
| **Text** |
| Heading | `text-gray-900` | `dark:text-white` |
| Body | `text-gray-600` | `dark:text-gray-300` |
| Muted | `text-gray-400` | `dark:text-gray-500` |
| **Borders** |
| Standard | `border-gray-200` | `dark:border-gray-700` |
| Subtle | `border-gray-100` | `dark:border-gray-800` |

---

## 🔧 How to Apply to New Components

### **Step 1: Use Existing Patterns**

```tsx
// Check globals.css for existing utilities
import { theme } from '@/lib/theme-config';

export function NewCard() {
  return (
    <div className="card-primary p-4">
      <h3 className="text-heading mb-2">Title</h3>
      <p className="text-body">Content</p>
    </div>
  );
}
```

### **Step 2: For Custom Styling**

```tsx
// If pattern doesn't exist, use Tailwind directly
export function CustomComponent() {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
      {/* Component content */}
    </div>
  );
}
```

### **Step 3: If Repeated 3+ Times, Create Utility**

```css
/* Add to globals.css */
.component-specific-style {
  @apply bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6;
}
```

---

## 🎯 Quick Reference

### **Import Pattern**
```tsx
// For TypeScript constants
import { theme } from '@/lib/theme-config';

// For utility function
import { cn } from '@/lib/utils';

// Usage
<div className={cn("card-primary", isActive && "ring-2 ring-brand-accent")}>
```

### **Common Patterns**

```tsx
// Card
<div className="card-primary p-4 lg:p-6">

// Input
<input className="input-field px-4 py-2" />

// Button
<button className="btn-action px-4 py-2">

// Status Badge
<span className="badge-success px-2 py-1 rounded-full text-xs">Success</span>

// Heading
<h1 className="text-heading text-2xl">

// Body Text
<p className="text-body">
```

---

## 🚀 Maintainability Benefits

### **1. Easy Theme Updates**
Change CSS variable in one place → affects entire app
```css
:root {
  --brand-primary: #NEW_COLOR; /* Update once */
}
```

### **2. Consistent Dark Mode**
All components automatically support dark mode
```tsx
className="bg-white dark:bg-gray-800" // Always works
```

### **3. Easy Refactoring**
Search for utility class → update in one place
```bash
# Find all uses
grep -r "card-primary" ./components

# Update the utility class definition
# All uses automatically updated!
```

### **4. Developer Experience**
- Autocomplete for theme values
- Type safety with TypeScript config
- Quick copy-paste patterns
- Visual consistency

---

## 📦 File Organization

```
app/
  globals.css          # CSS variables, utility classes
components/
  ui/                  # Reusable UI components
  [feature].tsx        # Feature components using utilities
lib/
  theme-config.ts      # TypeScript design tokens
  utils.ts             # Utility functions (cn)
```

---

## ✅ Checklist for New Components

- [ ] Use existing utility classes from `globals.css`
- [ ] Follow standard color scale (gray-900/white for text)
- [ ] Include dark mode variants (`dark:`)
- [ ] Use semantic spacing (p-4, gap-4, etc.)
- [ ] Check `theme-config.ts` for constants
- [ ] Use `cn()` for conditional classes
- [ ] Keep consistent with existing patterns
- [ ] Create utility class if pattern repeats 3+ times

---

## 🎨 Design System Hierarchy

```
1. CSS Variables (--brand-primary)
   ↓ Foundation layer
   
2. Tailwind Utilities (bg-white, text-gray-600)
   ↓ Building blocks
   
3. Custom Utilities (.card-primary, .text-heading)
   ↓ Reusable patterns
   
4. Component Styles (inline className combinations)
   ↓ Component-specific
   
5. Component Props (variant="primary")
   ↓ API layer
```

---

## 🎯 Summary: Our Approach = Best Practice

We're using the **industry-standard modern approach**:

✅ **CSS Variables** → Theme consistency  
✅ **Tailwind CSS** → Fast development  
✅ **Utility Classes** → Reusable patterns  
✅ **TypeScript Config** → Type safety  

This is the same approach used by:
- GitHub
- Vercel
- Stripe Dashboard
- Linear
- Modern SaaS apps

**Result**: Maintainable, scalable, consistent styling across all pages! 🎉
