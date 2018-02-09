/* eslint-disable no-magic-numbers */
import { darken, lighten } from 'polished'


const primary = '#0152cc'
const danger = '#df350b'
const warning = '#ffab00'

export const defaultTheme = {
  palette: {
    gray: {
      300: 'rgba(0, 0, 0, 0.26)',
      400: 'rgba(0, 0, 0, 0.1)',
      500: 'rgba(0, 0, 0, 0.05)',
      600: 'rgba(0, 0, 0, 0.07)',

      text: '#000',
    },

    primary: {
      400: darken(0.1, primary),
      500: primary,
      600: lighten(0.1, primary),

      text: '#fff',
    },

    danger: {
      400: darken(0.1, danger),
      500: danger,
      600: lighten(0.1, danger),

      text: '#fff',
    },

    warning: {
      400: darken(0.1, warning),
      500: warning,
      600: lighten(0.1, warning),

      text: '#000',
    },
  },
}
