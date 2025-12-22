/**
 * Example: How to Style a New Component
 *
 * This file demonstrates the styling approach with real examples
 */

import { cn } from "@/lib/utils";
import { theme } from "@/lib/theme-config";

// ============================================
// EXAMPLE 1: Using Utility Classes
// ============================================

export function ExampleCard() {
  return (
    <div className="card-primary p-6">
      <h2 className="text-heading text-xl mb-2">Room 101</h2>
      <p className="text-body mb-4">Deluxe Suite with Ocean View</p>
      <span className="badge-success px-3 py-1 rounded-full text-sm">
        Available
      </span>
    </div>
  );
}

// ============================================
// EXAMPLE 2: Using Tailwind Directly
// ============================================

export function ExampleTable() {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-400">
              Guest
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-400">
              Room
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
              John Doe
            </td>
            <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
              Suite 101
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// ============================================
// EXAMPLE 3: Using TypeScript Config
// ============================================

export function ExampleButton({
  variant = "primary",
}: {
  variant?: "primary" | "secondary";
}) {
  const buttonClasses = cn(
    theme.commonClasses.button,
    "px-4 py-2 rounded-lg font-medium transition-colors",
    variant === "primary" &&
      "bg-[var(--brand-primary)] text-white hover:opacity-90",
    variant === "secondary" &&
      "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
  );

  return <button className={buttonClasses}>Click Me</button>;
}

// ============================================
// EXAMPLE 4: Conditional Styling with cn()
// ============================================

export function ExampleStatusBadge({
  status,
}: {
  status: "confirmed" | "pending" | "cancelled";
}) {
  return (
    <span
      className={cn(
        "inline-flex px-3 py-1 rounded-full text-xs font-medium",
        status === "confirmed" && "badge-success",
        status === "pending" && "badge-warning",
        status === "cancelled" && "badge-error"
      )}
    >
      {status}
    </span>
  );
}

// ============================================
// EXAMPLE 5: Responsive + Dark Mode
// ============================================

export function ExampleResponsiveCard() {
  return (
    <div className="card-primary p-4 lg:p-6">
      {/* Mobile: column, Desktop: row */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* Image */}
        <div className="w-full lg:w-48 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg" />

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-heading text-lg lg:text-xl mb-2">
            Ocean View Suite
          </h3>
          <p className="text-body text-sm lg:text-base mb-4">
            Spacious room with private balcony overlooking the ocean.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs">
              2 Guests
            </span>
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs">
              King Bed
            </span>
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs">
              Ocean View
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="text-right lg:text-left lg:w-32">
          <p className="text-muted text-xs mb-1">From</p>
          <p className="text-heading text-2xl">$299</p>
          <p className="text-muted text-xs">per night</p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// EXAMPLE 6: Form Input
// ============================================

export function ExampleInput() {
  return (
    <div className="space-y-2">
      <label className="text-body text-sm font-medium block">
        Email Address
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        className="input-field w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-[var(--brand-accent)] outline-none transition-all"
      />
      <p className="text-muted text-xs">
        We&apos;ll never share your email with anyone else.
      </p>
    </div>
  );
}

// ============================================
// BEST PRACTICE TIPS
// ============================================

/**
 * 1. Always include dark mode variants: dark:bg-gray-800
 *
 * 2. Use semantic utility classes: .card-primary, .text-heading
 *
 * 3. Follow the color scale:
 *    - Headings: text-gray-900 dark:text-white
 *    - Body: text-gray-600 dark:text-gray-300
 *    - Muted: text-gray-400 dark:text-gray-500
 *
 * 4. Use cn() for conditional classes
 *
 * 5. Check theme-config.ts for constants
 *
 * 6. Create utility class if pattern repeats 3+ times
 *
 * 7. Be consistent with spacing: p-4, gap-4, mb-4
 *
 * 8. Use responsive prefixes: sm:, md:, lg:, xl:
 */
