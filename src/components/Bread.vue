<template>
    <el-breadcrumb>
        <el-breadcrumb-item v-for="i in list" :to="i.path">
            {{ i.title }}
        </el-breadcrumb-item>
    </el-breadcrumb>
    {{pros.curIndex}}
</template>



<script lang="ts" setup>
import type { Menu } from "@/assets/types";
import { menus } from "@const";
import { computed, watch } from "vue";
const pros = defineProps({
    curIndex: String
});

interface ListItem {
    title: string
    path: string
}

function deal(menu: Menu, list: ListItem[]) {
    list.push({ title: menu.title, path: menu.path })
    menu.menus.forEach(menu => {
        if (pros.curIndex?.startsWith(menu.index)) {
            console.log("b:",pros.curIndex,"--",menu.index)
            deal(menu, list)
            return
        }
    })
}

const list = computed(
    () => {
        var res: ListItem[] = []
        menus.forEach(menu => {
            console.log("a",pros.curIndex,"--",menu.index)
            if (pros.curIndex?.startsWith(menu.index)) {
                deal(menu, res)
            }
        })
        console.log("list change",res)
        return res
    }
)
</script>