import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import MorfixIcon from '@/icons/MorfixIcon.vue'
import CloseIcon from '@/icons/CloseIcon.vue'
import SearchIcon from '@/icons/SearchIcon.vue'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    values: {
      morfix: {
        component: MorfixIcon,
      },
      close: {
        component: CloseIcon,
      },
      search: {
        component: SearchIcon,
      },
    },
  },
})
