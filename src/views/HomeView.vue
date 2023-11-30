<template>
  <div>
    首页
    <van-grid square>
      <van-grid-item v-for="h in homeNav" :key="h._system_record_entry_id" :icon="h.image" :text="h.title" />
    </van-grid>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getHomeModuleRow } from '../apis/homes'
import { type homeModuleNav } from '../typings'

const homeNav = ref<Array<homeModuleNav>>([])
console.log(homeNav)

onMounted(async () => {
  //首页导航
  let data  = await getHomeModuleRow();
  console.log('首页导航数据', data)
  homeNav.value = data
})

</script>
