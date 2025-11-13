import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/new-event')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/new-event"!</div>
}
