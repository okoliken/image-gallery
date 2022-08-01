import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import './index.css'
import VueEasyLightbox from 'vue-easy-lightbox'

import axios from 'axios'
import VueAxios from 'vue-axios'






// Import css if you want to use image fade transition

import MasonryWall from '@yeger/vue-masonry-wall'

const app = createApp(App)

app.use(VueAxios, axios)

app.use(VueEasyLightbox)


app.use(MasonryWall)

app.mount('#gallery')
