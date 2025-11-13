import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Hello "/_authenticated"!</h1>
      <Outlet />
    </div>
  );
}
