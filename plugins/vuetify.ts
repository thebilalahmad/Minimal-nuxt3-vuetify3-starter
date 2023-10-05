import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import {
  VDataTable,
  VDataTableServer,
  VDataTableVirtual,
} from "vuetify/labs/VDataTable";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    components: {
      VDataTable,
      VDataTableServer,
      VDataTableVirtual,
    },
        theme: {
          themes: {
            light: {
              dark: false,
              colors: {
                primary: '#4285F4',
                success:'#00C853',
                error:'#FF5252',
                warrning:'#FFC260',
                info:'#2196F3',
                background:'#F8FAFC',
              }
            },
          },
        },
     
  })
  app.vueApp.use(vuetify)
})