# Project Plan: Family History Timeline App

## Project Goal

A secure, authenticated Single Page Application (SPA) to view, filter, and interactively explore family history events using a zoomable timeline visualization.

## Technology Stack

-   **Frontend**: React / TanStack Router
-   **Forms**: React Hook Form
-   **Validation**: Zod
-   **Database**: Supabase (PostgreSQL)
    -   **Development**: Local Docker instance
    -   **Production**: Hosted Supabase project
-   **Visualization**: Visx (React + D3)

---

## 💾 Phase 1: Foundation and Data Setup (Backend)

| Task ID | Description              | Status | Notes                                                                                                |
| :------ | :----------------------- | :----- | :--------------------------------------------------------------------------------------------------- |
| 1.0     | Supabase Project Setup   | TO DO  | Use local Supabase Docker for development. Production project ID: `slwvuveaqfxfuwnhmumt`.            |
| 1.1     | Database Schema          | TO DO  | Create `events`, `tags`, and `event_tags` tables.                                                    |
| 1.2     | Auth Setup & Security    | TO DO  | Disable public sign-ups. Implement RLS on events to allow `SELECT` only for authenticated users.     |
| 1.3     | Initial Data Seeding     | TO DO  | Manually insert test users, 3-5 tags, and 5-10 test events to facilitate frontend development.       |

### Data Structure

-   **events**: `id` (UUID), `date` (DATE), `name` (TEXT), `description` (TEXT), `user_id` (AUTH.UID)
-   **tags**: `id` (UUID), `name` (TEXT), `color` (TEXT)
-   **event_tags**: `event_id` (UUID, FK), `tag_id` (UUID, FK)

---

## 💻 Phase 2: Frontend Development and Visualization

| Task ID | Description                | Status | Dependency |
| :------ | :------------------------- | :----- | :--------- |
| 2.0     | React & Dependencies Init  | TO DO  |            |
| 2.1     | Authentication Flow        | TO DO  |            |
| 2.2     | Event Entry Form           | TO DO  |            |
| 2.3     | Event List View            | TO DO  |            |
| 2.4     | Visx Timeline Component    | TO DO  |            |
| 2.5     | Filter Integration         | TO DO  |            |

### Task Details

-   **2.0 React & Dependencies Init**: Initialize Vite/React project. Install `@tanstack/router`, `@supabase/supabase-js`, `@visx/visx`, `react-hook-form`, and `zod`.
-   **2.1 Authentication Flow**: Build `LoginPage` and implement session handling to redirect authenticated users.
-   **2.2 Event Entry Form**: Create a form using **React Hook Form** and **Zod** for validation to `INSERT` new events and link tags.
-   **2.3 Event List View**: Fetch and display all events. Implement basic search and tag-based filtering.
-   **2.4 Visx Timeline Component**: Build the core timeline visualization using `@visx/scale` for date mapping and `@visx/zoom` for interactivity.
-   **2.5 Filter Integration**: Connect tag/date filters to dynamically update the data rendered by the Visx timeline.
