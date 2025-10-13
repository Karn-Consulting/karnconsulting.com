# Karn Consulting - AI & ML Solutions Website

## Overview

This is a corporate website for Karn Consulting, an AI and Machine Learning consulting firm. The application is a full-stack web platform built to showcase the company's services, case studies, and expertise in artificial intelligence and self-governing intelligent solutions. The site features a modern, gradient-heavy design inspired by Linear, Stripe, and Vercel, with a focus on technological sophistication and visual impact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured with custom aliases and optimized for production builds
- **Wouter** for lightweight client-side routing (routes: Home `/`, Project Detail `/project/:id`, 404 fallback)
- **TanStack Query (React Query)** for server state management with custom query client configuration

**UI Component System**
- **shadcn/ui** component library based on Radix UI primitives (configured in `components.json`)
- **Tailwind CSS** for utility-first styling with extensive custom configuration
- Design system features navy-to-blue gradients, custom color palette with HSL values, and precise typography using Inter and JetBrains Mono fonts
- Custom elevation system (`hover-elevate`, `active-elevate-2`) for interactive feedback
- Comprehensive component set including dialogs, cards, forms, navigation menus, and data visualization elements

**Design Philosophy**
- Dark mode as default with sophisticated gradient applications
- Reference-based design drawing from Linear (typography/precision), Stripe (gradients), and Vercel (minimalism)
- Gradient-first visual language with strategic use across hero sections, cards, buttons, and borders
- Responsive breakpoints and mobile-first approach

### Backend Architecture

**Server Framework**
- **Express.js** as the HTTP server framework
- Custom middleware for request logging with duration tracking and JSON response capture
- Vite middleware integration for development with HMR support
- Static file serving in production mode

**Application Structure**
- Server entry point configures Express, registers routes, sets up error handling
- Route registration system (`registerRoutes`) returns HTTP server instance for extensibility
- Separation of concerns: routes defined in `server/routes.ts`, storage layer in `server/storage.ts`
- Request/response logging middleware that captures API calls with timing and truncated responses

**Storage Layer**
- Abstract `IStorage` interface defining CRUD operations (getUser, getUserByUsername, createUser)
- In-memory implementation (`MemStorage`) using JavaScript Map for development/testing
- Designed for easy swapping to database-backed implementations
- User model with UUID generation using Node.js crypto module

### Data Storage Solutions

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL dialect
- **Neon Database** serverless driver (@neondatabase/serverless) for connection pooling
- Schema defined in `shared/schema.ts` with Zod validation integration via drizzle-zod
- Database migrations output to `./migrations` directory
- User table schema with UUID primary key, unique username constraint, and password field

**Session Management**
- **connect-pg-simple** for PostgreSQL-backed session storage (dependency present, implementation ready)

### External Dependencies

**Core Third-Party Services**
- **Neon Database**: Serverless PostgreSQL database for production data persistence
- **Google Fonts**: Inter (weights 400-900) and JetBrains Mono (weight 500) for typography
- **Pixabay CDN**: Video assets for hero background and multimedia showcases

**Development & Build Tools**
- **Replit-specific plugins**: Vite runtime error overlay, cartographer, and dev banner for Replit environment
- **esbuild**: Server-side bundling for production deployment
- **tsx**: TypeScript execution for development server

**UI & Media Libraries**
- **Embla Carousel**: Touch-friendly carousel components
- **React Icons**: Technology stack icons (TensorFlow, PyTorch, AWS, etc.)
- **Lucide React**: Comprehensive icon set for UI elements
- **React Hook Form** with Hookform Resolvers for form validation
- **date-fns**: Date formatting and manipulation

**State & Data Management**
- **TanStack Query v5**: Async state management with custom fetch wrapper
- **Zod**: Runtime type validation and schema definition
- **Class Variance Authority (CVA)**: Type-safe variant styling for components

**Image Assets**
- Stock images stored in `attached_assets/stock_images/` directory
- Founder image and logo stored in `attached_assets/` root
- Images used for case studies, hero sections, galleries, and project showcases