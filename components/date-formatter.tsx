import { parseISO, format } from 'date-fns'

export default function DateFormatter(
  { dateString }
  : { dateString: string })
  : JSX.Element | null {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}