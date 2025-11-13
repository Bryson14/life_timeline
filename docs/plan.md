Project Plan: Family History Timeline App

Project Goal: A secure, authenticated Single Page Application (SPA) to view, filter, and interactively explore family history events using a zoomable timeline visualization.

Frontend: React / TanStack Router
Database: Supabase (PostgreSQL)
Visualization: Visx (React + D3)

💾 Phase 1: Foundation and Data Setup (Backend)

Task ID

Description

Status

Notes

1.0

Supabase Project Setup

TO DO

Deployed project ID: slwvuveaqfxfuwnhmumt. Local development is primary.

1.1

Database Schema (Data Model)

TO DO

Create three tables: events, tags, and event_tags (many-to-many join table).

1.2

Auth Setup & Security

TO DO

Disable public sign-ups. Implement Row Level Security (RLS) on events to allow SELECT only for authenticated users.

1.3

Initial Data Seeding

TO DO

Manually insert test users, 3-5 tags (Maternal, Paternal, etc.), and 5-10 test events to facilitate frontend development.

Data Structure Details

events table: id (UUID), date (DATE), name (TEXT), description (TEXT), user_id (AUTH.UID)

tags table: id (UUID), name (TEXT), color (TEXT)

event_tags table: event_id (UUID, FK), tag_id (UUID, FK)

💻 Phase 2: Frontend Development and Visualization

Task ID

Description

Status

Dependency

2.0

React & Dependencies Init

TO DO

Initialize Vite/React project, install @tanstack/router, @supabase/supabase-js, and @visx/visx packages.

2.1

Authentication Flow

TO DO

Build LoginPage (login only) and implement session handling (redirecting authenticated users).

2.2

Event Entry Form

TO DO

Create form component to INSERT new events and link selected tags via the event_tags table.

2.3

Event List View

TO DO

Fetch and display all events. Implement basic search (on name/description) and filtering based on tags.

2.4

Visx Timeline Component

TO DO

Build the core timeline visualization. Use @visx/scale for date mapping and @visx/zoom for interactivity. Focus on clean, responsive design.

2.5

Filter Integration

TO DO

Connect the tag/date filters to dynamically update the data rendered by the Visx timeline.