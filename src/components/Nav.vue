<script lang="ts" setup>
export interface Menu {
    title: string
    path:string
    menus: Menu[]
}


const menus: Menu[] = [
    {
        title: "GM管理",
        path:"/gm/",
        menus: [
            {
                title: "GM指令",
                path:'/gm/cmd',
                menus: []
            },
            {
                title: "GM流水日志",
                path:"/gm/log",
                menus: []
            }
        ]
    },
    {
        title: "运营",
        path:"/yunying/",
        menus: [
            {
                title: "多语言配置",
                path:"/yunying/lan",
                menus: []
            },
            {
                title: "活动管理",
                path:"/yunying/activity",
                menus: []
            }
        ]
    },
]
</script>

<template>
    <el-menu background-color router>
        <el-sub-menu v-for="(submenus, index) in menus" :index="'id'+index" style="{boder}">
            <template #title>{{ submenus.title }}</template>
            <el-menu-item v-for="(menus, i) in submenus.menus" :key="'id'+i+(index+1)*10" :index="menus.path">
                <template #title>{{ menus.title }}</template>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<style>
</style>