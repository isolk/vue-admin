<script lang="ts" setup>
import {menus} from '@const'
const emit = defineEmits<{
    (e:'navSelect',item:any):void
}>()

const onSelect = (index:string,pathAry:string[],item:any)=>{
    emit('navSelect',item)
}


</script>

<template>
    <el-menu background-color router @select="onSelect">
        <el-sub-menu v-for="(submenus, index) in menus"  :index="submenus.path" style="{boder}">
            <template #title>{{ submenus.title }}</template>
            <el-menu-item v-for="(menus, i) in submenus.menus" :index="menus.path">
                <component is="Edit" style="width:18;height:18"></component>
                <!-- <Icon icon="Edit" size="18"></Icon> -->
                <template #title>{{ menus.title }}</template>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<style>
</style>