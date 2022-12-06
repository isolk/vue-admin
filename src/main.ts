import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import VueDiff from 'vue-diff';
import 'vue-diff/dist/index.css';
import CodeDiff from 'v-code-diff'
import JsonViewer from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";

const app = createApp(App)

app.use(router)
app.use(VueDiff)
app.use(CodeDiff)
app.use(JsonViewer)
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
