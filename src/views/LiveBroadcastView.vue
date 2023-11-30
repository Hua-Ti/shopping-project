<template>
  <div class="live">
    <!-- nav标签页 -->
    <van-tabs v-model:active="active" :animated="true" title-active-color="#ff5777" line-width="80" @click-tab="onNavHadle(liveList[active].id)">
      <van-tab v-for="(item, index) in liveList" :key="index" :title="item.name"> 
      <LiveLists :liveData="liveData"/>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getLiveBroadcastSort , getLiveList} from '../apis/liveBroadcast'
import  LiveLists from '@/components/LiveList.vue'
import { type LiveSortTabs , type LiveList} from '../typings'
const active = ref(0);
const liveList = ref<Array<LiveSortTabs>>([])
const page = ref(1)
const liveData = ref<Array<LiveList>>([])
const liveId = ref(1);

onMounted(async () => {
  //首页导航
  let { data } = await getLiveBroadcastSort();
  // console.log('直播分类数据', data)
  liveList.value = data.tabs.items;
  getLivesList();
});

const getLivesList = (async () => {
  let { data } = await getLiveList(liveId.value,page.value);
  liveData.value = data.lives;
})

const onNavHadle = function(i:any){
   //点击事件切换nav改变直播类型ID并传值
   liveId.value = i;
   liveData.value = [];
   getLivesList();
} 
  
</script>

<style lang="scss">
.live {
  margin-bottom: 52px;
  .van-tab {
    font-size: 15px;
    border-bottom: 1px solid #ececec;
  }

  .van-tab--active {
    font-size: 17px;
    font-weight: 700;
  }

  .van-tabs__line {
    background-color: #ff5777;
  }
}

</style>