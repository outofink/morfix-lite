import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import MorfixIcon from '@/icons/MorfixIcon.vue'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
      values: {
        morfix: { // name of our custom icon
          component: MorfixIcon, // our custom component
        },
      },
    },
  })