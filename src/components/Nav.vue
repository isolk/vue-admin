<script lang="ts" setup>
import {menus} from '@const'
const emit = defineEmits<{
    (e:'select',index:string):void
}>()

const select = (index:string,item:any,x:any)=>{
    emit('select',index)
    console.log(x)
}

</script>

<template>
    <el-menu background-color router @select="select">
        <el-sub-menu v-for="(submenus, index) in menus" :key="submenus.index" :index="submenus.path" style="{boder}">
            <template #title>{{ submenus.title }}</template>
            <el-menu-item v-for="(menus, i) in submenus.menus" :key="menus.index" :index="menus.path">
                <template #title>{{ menus.title }}</template>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<style>
</style>