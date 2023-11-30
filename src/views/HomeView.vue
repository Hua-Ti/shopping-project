<template>
  <div class="home">
    <!-- 搜索 -->
    <div class="search">
      <van-icon class="Sort" name="bars" />
      <RouterLink to="/search">
        <div class="search-nav">
          <van-search v-model="values" shape="round" background="transparent" readonly placeholder="请输入搜索关键词" />
        </div>
      </RouterLink>
      <div>登录</div>
    </div>
    <!-- 首页导航 -->
    <div class="home-nav">
      <div class="home-nav-tab">
        <van-grid square :column-num="7" icon-size="50px">
          <van-grid-item class="nav-tab-item" v-for="h in homeNav" :key="h._system_record_entry_id" :icon="h.image"
            :text="h.title" :sort="h.sort" :link="h.link" :titlecolor="h.titleColor" :h5link="h.h5Link" />
        </van-grid>
      </div>
    </div>
    <div>
      
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getHomeModuleRow,gettimeLimitedQuickGrab } from '../apis/homes'
import { type HomeTopNav, type gettimeRob } from '../typings'

const homeNav = ref<Array<HomeTopNav>>([])
const values = ref('')

const TimeRob = ref<Array<gettimeRob>>([])

onMounted(async () => {
  //首页导航
  let data = await getHomeModuleRow();

  let dataTime = await gettimeLimitedQuickGrab();
  console.log('首页导航数据', data)
  console.log('首页限时抢数据', dataTime)

  homeNav.value = data
  TimeRob.value = dataTime
})

</script>
<style lang="scss">
.home {
  // 头部搜索
  font-size: 16px;

  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 45px;
    padding: 7.5px 8px;
    box-sizing: border-box;
    // background-color: rgb(255, 63, 120);
    // background-color: #d9919a;
    background: rgb(220, 157, 167);
    background: linear-gradient(180deg, rgba(220, 157, 167, 1) 0%, rgba(210, 119, 132, 0.9781162464985994) 100%);
    color: #fff;

    .van-search__field {
      align-items: center;
    }

    .van-search {
      padding: 2px 4px;
    }

    .van-search__field {
      padding: 2px 5px;
    }

    .van-search__content--round {
      height: 30px;
    }

    .search-nav {
      width: 80vw;
    }

    .Sort {
      font-size: 20px;
    }

  }

  .home-nav {
    // margin-top: 10px;
    overflow: auto;
    width: 100vw;
    // padding: 0 10px;
    height: 182px;
    box-sizing: border-box;

    //隐藏滚动条高度
    &::-webkit-scrollbar {
      height: 0px;
    }

    .home-nav-tab {
      width: 140vw;
    }

    .nav-tab-item {
      margin-top: 10px;
    }
  }

  //去掉导航条边框
  [class*=van-hairline]:after {
    border: none;
  }
}
</style>
