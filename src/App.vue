<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
import Logo from './components/Logo.vue'
import Bread from './components/Bread.vue'
import { computed,reactive,ref } from 'vue';

// const obj = reactive({
//   curIndex:"1-1",
// })

var curIndex = ref("1-1")

</script>

<template>
  <el-container>
    <el-aside width="200px" direction="vertical">
      <Nav @select="(index)=> curIndex=index" />
    </el-aside>

    <el-container>
      <el-header height="4rem">
        <Bread :curIndex="curIndex" />
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
