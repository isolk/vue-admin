<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
import Logo from './components/Logo.vue'
import Bread from './components/Bread.vue'
import { computed,reactive,ref } from 'vue';

var it = ref<any>({index:"/"})
const handNavSelect = (item:any) =>{
  it.value = item
}

</script>
<template>
  <el-container>
    <el-aside width="200px" direction="vertical">
      <Nav @navSelect="handNavSelect" />
    </el-aside>

    <el-container>
      <el-header height="4rem">
        <Bread :item="it" />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>

  </el-container>
</template>

<style scoped>
.el-aside  {
    height: calc(100vh);
}
</style>
