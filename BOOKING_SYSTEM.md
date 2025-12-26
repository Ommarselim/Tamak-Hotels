# Booking System Documentation

This documentation covers the complete booking system implementation for the Tamak Hotel Management System.

## Overview

The booking system consists of three main interfaces:

1. **Front Desk Page** - Calendar-based room management interface
2. **Booking Modal Step 1** - Room information form
3. **Booking Modal Step 2** - Guest information form

## Architecture

### Directory Structure

```
app/
  [locale]/
    front-desk/
      page.tsx           # Front desk route
components/
  booking/
    booking-modal.tsx           # Main modal container
    booking-step-indicator.tsx  # Progress indicator
    room-info-form.tsx         # Step 1: Room information
    guest-info-form.tsx        # Step 2: Guest information
    guest-accordion.tsx        # Guest info accordion
    index.ts
  front-desk/
    front-desk-page.tsx        # Main front desk page
    room-calendar.tsx          # Calendar grid
    calendar-header.tsx        # Day headers
    room-row.tsx               # Individual room row
    booking-card.tsx           # Booking card display
    index.ts
lib/
  types/
    booking.ts                 # TypeScript interfaces
    index.ts
```

## Components

### Front Desk Components

#### FrontDeskPage

Main container component for the front desk interface.

- Search functionality
- Room type filters
- Date navigation
- "Add Book" button triggers booking modal

#### RoomCalendar

Displays a 30-day calendar grid with room bookings.

- 30-column grid layout
- Multiple room rows
- Visual booking cards

#### CalendarHeader

Shows day numbers and names (01-30) with "Today" indicator.

#### RoomRow

Individual room row displaying:

- Room number with dropdown
- Bookings positioned on timeline
- Empty slots with add buttons

#### BookingCard

Visual representation of a booking:

- Guest avatar placeholder
- Guest name
- Booking status (checked-in, checked-out, booked)
- Duration and timing information
- Color-coded by status:
  - Blue (#A8CCD7): Checked-in
  - Beige (#D4C4A8): Checked-out
  - Brown (#D9B8A3): Booked

### Booking Modal Components

#### BookingModal

Main modal container managing:

- Two-step form flow
- Form data state
- Step navigation
- Submit handling

#### BookingStepIndicator

Progress indicator showing:

- Step 1/2 or 2/2
- Visual progress bar
- Step labels (Room information / Guest information)

#### RoomInfoForm (Step 1)

Collects room booking details:

- Check-in date (date picker)
- Check-out date (date picker)
- Number of nights (dropdown)
- Room type (dropdown)
- Room number (dropdown)

#### GuestInfoForm (Step 2)

Collects guest information:

- Number of guests (dropdown)
- Multiple collapsible guest forms
- Cancel/Submit buttons

#### GuestAccordion

Expandable form for each guest:

- Full name (text input with Arabic support)
- Guest type (Adult/Child dropdown)
- Date of birth (date picker)
- ID number (text input)
- Gender (dropdown)
- Country (dropdown)
- Nationality (dropdown)
- Phone number (text input)
- Email (text input)

## Type Definitions

### Core Types

```typescript
type RoomType = 'Single' | 'Double' | 'Triple' | 'Suite';
type GuestType = 'Adult' | 'Child';
type Gender = 'Male' | 'Female';
type BookingStatus = 'booked' | 'checked-in' | 'checked-out' | 'cancelled';
```

### Interfaces

#### Guest

```typescript
interface Guest {
  id: string;
  fullName: string;
  guestType: GuestType;
  dateOfBirth: Date;
  nationalId: string;
  gender: Gender;
  country: string;
  nationality: string;
  phoneNumber: string;
  email: string;
  idPhotoUrl?: string;
}
```

#### Booking

```typescript
interface Booking {
  id: string;
  roomNumber: string;
  roomType: RoomType;
  checkInDate: Date;
  checkOutDate: Date;
  nightsNumber: number;
  guests: Guest[];
  status: BookingStatus;
  checkedInTime?: string;
  checkedOutTime?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

#### BookingFormData

```typescript
interface BookingFormData {
  // Step 1
  checkInDate: Date;
  checkOutDate: Date;
  nightsNumber: number;
  roomType: RoomType;
  roomNumber: string;

  // Step 2
  guestsNumber: number;
  guests: Partial<Guest>[];
}
```

## Internationalization

### English (en.json)

- `frontDesk.*` - Front desk page translations
- `booking.*` - Booking modal translations

### Arabic (ar.json)

- Full RTL support
- Arabic translations for all booking fields
- Proper Arabic text rendering (عمر محمد)

### Supported Languages

- English (en)
- Arabic (ar) with RTL layout support

## Styling

### Theme Integration

- Uses existing design token system
- Brand color: #C4956C (accent/progress bars)
- Full dark mode support
- Responsive layout

### Custom CSS

- `.grid-cols-30` - 30-column grid for calendar
- Status-based coloring for booking cards

## Usage

### Navigating to Front Desk

```typescript
// From sidebar or direct navigation
router.push('/front-desk');
```

### Opening Booking Modal

```typescript
const [isOpen, setIsOpen] = useState(false);

<BookingModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onSubmit={(data) => {
    console.log('Booking data:', data);
    // Handle booking submission
  }}
/>;
```

### Handling Booking Submission

```typescript
const handleBookingSubmit = (data: BookingFormData) => {
  // Validate data
  // Send to API
  // Update UI
  // Show confirmation
};
```

## Features

### Current Features

- ✅ Multi-step booking form (2 steps)
- ✅ Calendar view with 30-day timeline
- ✅ Room management interface
- ✅ Visual booking cards with status
- ✅ Multiple guests per booking
- ✅ Collapsible guest forms
- ✅ Full i18n support (EN/AR)
- ✅ RTL layout support
- ✅ Dark mode compatible
- ✅ Responsive design

### Future Enhancements

- [ ] Date picker integration
- [ ] Form validation with Zod
- [ ] Backend API integration
- [ ] Real-time updates
- [ ] Drag-and-drop booking cards
- [ ] Booking conflict detection
- [ ] Email/SMS notifications
- [ ] Payment integration
- [ ] Print booking confirmations

## Integration Points

### With Dashboard

- Linked from admin sidebar
- Uses DashboardLayout wrapper
- Shares theme and navigation

### With Backend

Ready for integration with:

- Booking API endpoints
- Room availability checks
- Guest management system
- Payment processing

## Testing

### Manual Testing Checklist

- [ ] Open front desk page
- [ ] Click "Add Book" button
- [ ] Fill Step 1 form
- [ ] Click "Next"
- [ ] Fill guest information
- [ ] Expand/collapse guest accordions
- [ ] Add multiple guests
- [ ] Submit form
- [ ] Test in Arabic locale
- [ ] Test dark mode
- [ ] Test responsive layout

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Accessibility

- Keyboard navigation
- ARIA labels (to be enhanced)
- Focus management
- Screen reader support (basic)

## Performance

- Lazy loading for modal
- Optimized rendering for calendar grid
- Memoization for large lists (recommended)

---

## Quick Start

1. Navigate to Front Desk:

   ```
   http://localhost:3000/en/front-desk
   ```

2. Click "Add Book" to open booking modal

3. Complete the two-step form

4. Submit to see console output

## Support

For issues or questions, refer to:

- ARCHITECTURE.md
- STYLING_GUIDE.md
- Component source code comments
