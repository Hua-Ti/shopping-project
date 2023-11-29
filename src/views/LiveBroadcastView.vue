<template>
    <div>直播</div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { getLiveBroadcastSort } from '../apis/liveBroadcast'

onMounted(async ()=>{
  //首页导航
  let data=await getLiveBroadcastSort();
  console.log('直播分类数据',data)
})

</script>