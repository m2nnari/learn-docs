import { defineAsyncComponent } from 'vue'

export const pagesComponent = {
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"C:/Users/Meelis/Documents/learn-docs/docs/.vuepress/.temp/pages/README.vue")),
  "/prototyypimine/": defineAsyncComponent(() => import(/* webpackChunkName: "v-1ed782c4" */"C:/Users/Meelis/Documents/learn-docs/docs/.vuepress/.temp/pages/prototyypimine/README.vue")),
  "/git/": defineAsyncComponent(() => import(/* webpackChunkName: "v-74473916" */"C:/Users/Meelis/Documents/learn-docs/docs/.vuepress/.temp/pages/git/README.vue")),
  "/markdown/": defineAsyncComponent(() => import(/* webpackChunkName: "v-72881372" */"C:/Users/Meelis/Documents/learn-docs/docs/.vuepress/.temp/pages/markdown/README.vue")),
  "/tunnusgraafika/": defineAsyncComponent(() => import(/* webpackChunkName: "v-02fbb21a" */"C:/Users/Meelis/Documents/learn-docs/docs/.vuepress/.temp/pages/tunnusgraafika/README.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"C:/Users/Meelis/Documents/learn-docs/docs/.vuepress/.temp/pages/404.html.vue")),
}
