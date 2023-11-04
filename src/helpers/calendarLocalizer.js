import enES from 'date-fns/locale/es'
import { addHours, format, parse, startOfWeek, getDay} from 'date-fns'
import { dateFnsLocalizer } from 'react-big-calendar'

const locales = {
    'es': enES,
  }

export const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })
