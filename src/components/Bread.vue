<template>
    <el-breadcrumb>
        <el-breadcrumb-item to="/">
            首页
        </el-breadcrumb-item>
        <el-breadcrumb-item v-for="i in list">
            {{i}}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>



<script lang="ts" setup>
import { menus } from "@const";
import type { Edit } from "@element-plus/icons-vue";
import { ITEM_RENDER_EVT } from "element-plus/es/components/virtual-list/src/defaults";
import { computed, watch } from "vue";
const props = defineProps<{
    item:{
        index:string,
        indexPath:string[],
    }
}>();

const list = computed(()=>{
    let li:string[] = []
    menus.forEach(el => {
        if(props.item.index?.startsWith(el.path))
        {
            li.push(el.title)
            el.menus.forEach(subel=>{
                if(props.item.index.startsWith(subel.path)){
                    li.push(subel.title)
                }
            })
        }
    });
    return li
})
</script>