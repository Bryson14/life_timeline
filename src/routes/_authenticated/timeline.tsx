import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Database } from '@/lib/database.types'
import { scaleTime } from '@visx/scale'
import { Group } from '@visx/group'
import { Line } from '@visx/shape'
import { Text } from '@visx/text'

export const Route = createFileRoute('/_authenticated/timeline')({
  component: RouteComponent,
})

type Event = Database['public']['Tables']['events']['Row']

function RouteComponent() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function getEvents() {
      const { data, error } = await supabase.from('events').select('*').order('date')
      if (error) {
        setError(error.message)
      } else {
        setEvents(data)
      }
      setLoading(false)
    }
    getEvents()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const width = 800
  const height = 200
  const margin = { top: 20, right: 20, bottom: 50, left: 20 }

  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  const xScale = scaleTime<number>({
    domain: [new Date(events[0]?.date), new Date(events[events.length - 1]?.date)],
    range: [0, xMax],
  })

  return (
    <div>
      <h1 className="text-2xl font-bold">Timeline</h1>
      <svg width={width} height={height}>
        <Group top={margin.top} left={margin.left}>
          <Line from={{ x: 0, y: yMax / 2 }} to={{ x: xMax, y: yMax / 2 }} stroke="black" />
          {events.map((event) => {
            const cx = xScale(new Date(event.date))
            const cy = yMax / 2
            return (
              <g key={event.id}>
                <circle cx={cx} cy={cy} r={5} fill="black" />
                <Text x={cx} y={cy - 10} textAnchor="middle">
                  {event.name}
                </Text>
                <Text x={cx} y={cy + 20} textAnchor="middle" fontSize={10}>
                  {event.date}
                </Text>
              </g>
            )
          })}
        </Group>
      </svg>
    </div>
  )
}