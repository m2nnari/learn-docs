import { defineAsyncComponent } from 'vue'

export const pagesComponent = {
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"C:/Users/Meelis/Documents/learn-docs/docs/.vuepress/.temp/pages/README.vue")),
  "/md/": defineAsyncComponent(() => import(/* webpackChunkName: "v-2d0aa3df" */"C:/Users/Meelis/Documents/learn-docs/docs/.vuepress/.temp/pages/md/README.vue")),
  "/cvi/": defineAsyncComponent(() => import(/* webpackChunkName: "v-74459712" */"C:/Users/Meelis/Documents/learn-docs/docs/.vuepress/.temp/pages/cvi/README.vue")),
  "/prototyypimine/": defineAsyncComponent(() => import(/* webpackChunkName: "v-1ed782c4" */"C:/Users/Meelis/Documents/learn-docs/docs/.vuepress/.temp/pages/prototyypimine/README.vue")),
  "/git/": defineAsyncComponent(() => import(/* webpackChunkName: "v-74473916" */"C:/Users/Meelis/Documents/learn-docs/docs/.vuepress/.temp/pages/git/README.vue")),
  "/vpdocs/": defineAsyncComponent(() => import(/* webpackChunkName: "v-de0ea47e" */"C:/Users/Meelis/Documents/learn-docs/docs/.vuepress/.temp/pages/vpdocs/README.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"C:/Users/Meelis/Documents/learn-docs/docs/.vuepress/.temp/pages/404.html.vue")),
}
