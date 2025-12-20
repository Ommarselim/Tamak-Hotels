# Tamak Hotels System 🏨

A modern, professional hotel management system built with Next.js, featuring a beautiful dashboard interface based on Figma designs.

## ✨ Features

- **🎨 Modern Dashboard UI** - Implemented from Figma designs with pixel-perfect accuracy
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **🌍 Multi-language Support** - English and Arabic with RTL support
- **🌙 Dark Mode** - Built-in theme switching capabilities
- **📊 Real-time Statistics** - Dashboard with key hotel metrics
- **🏠 Room Management** - Track room availability and status
- **📅 Reservation System** - Manage bookings and check-ins/check-outs
- **💰 Revenue Tracking** - Financial overview and reporting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tamak-hotels-system
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Dashboard Features

### Main Dashboard (`/dashboard`)
- **Statistics Cards**: New bookings, check-ins, check-outs, total revenue
- **Room Availability Chart**: Visual representation of room statuses
- **Revenue Chart**: Monthly revenue trends
- **Recent Reservations**: Latest booking information

### Navigation
- Dashboard Overview
- Front Desk Operations
- Reservations Management
- Room Management
- Guest Management
- Staff Management
- Housekeeping
- Inventory
- Calendar
- Financials
- Reviews

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.0 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: shadcn/ui with Radix UI
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)
- **Internationalization**: next-intl
- **Theme**: next-themes
- **Design System**: Based on Figma designs

## 🎨 Design Implementation

This project implements the "Tamak Hotel" Figma design with:

- **Sidebar Navigation**: Clean, modern sidebar with icons and active states
- **Dashboard Header**: Search functionality, date picker, user profile
- **Statistics Cards**: Color-coded metrics with trend indicators
- **Room Status**: Visual room availability tracking
- **Responsive Layout**: Mobile-first design with collapsible sidebar

## 🌍 Internationalization

The system supports:
- **English** (default)
- **Arabic** with RTL layout support

Language files are located in `/messages/`:
- `en.json` - English translations
- `ar.json` - Arabic translations

## 📁 Project Structure

```
tamak-hotels-system/
├── app/
│   ├── [locale]/
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Dashboard page
│   │   ├── layout.tsx            # Locale layout
│   │   └── page.tsx              # Home page
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── admin-sidebar.tsx         # Navigation sidebar
│   ├── dashboard-header.tsx      # Dashboard header
│   ├── dashboard-layout.tsx      # Main dashboard layout
│   └── stats-card.tsx           # Statistics card component
├── messages/                     # Internationalization
│   ├── ar.json                   # Arabic translations
│   └── en.json                   # English translations
└── lib/
    └── utils.ts                  # Utility functions
```

## 🎯 Key Components

### AdminSidebar
- Responsive navigation menu
- Active state management
- Mobile-friendly with overlay
- Internationalized menu items

### DashboardHeader
- Search functionality
- Date range picker
- User profile dropdown
- Mobile hamburger menu

### StatsCard
- Reusable statistics display
- Trend indicators
- Color variants
- Responsive design

### DashboardLayout
- Main layout wrapper
- Mobile state management
- Grid-based responsive design
- Statistics and charts integration

## 🚀 Deployment

The project is ready for deployment on platforms like:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **Docker**

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support and questions, please open an issue in the repository.