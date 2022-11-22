<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
import Logo from './components/Logo.vue'
import Bread from './components/Bread.vue'
</script>
<template>
  <el-container>
    <el-aside width="200px" direction="vertical">
      <Nav />
    </el-aside>

    <el-container>
      <el-header height="4rem">
        <Bread/>
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
