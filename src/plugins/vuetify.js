/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { md2 } from 'vuetify/blueprints'


// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    light: {
      colors: {
        primary: '#4A90E2',    // Matches the primary blue color
        secondary: '#50E3C2',  // Light teal, often used for accents or buttons
        accent: '#F5A623',     // Orange accent for highlights
        background: '#F5F5F5', // Light gray for the background
        surface: '#FFFFFF',    // White surface color for cards and containers
      },
    },

  },
})
