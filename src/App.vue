<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <van-tabbar active-color="rgb(255, 63, 120)" route>
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/attention" icon="tv-o">关注</van-tabbar-item>
    <van-tabbar-item to="/liveBroadcast" icon="eye-o">直播</van-tabbar-item>
    <van-tabbar-item to="/message" icon="ecard-pay">消息</van-tabbar-item>
    <van-tabbar-item to="/mine" icon="user-circle-o">我的</van-tabbar-item>
  </van-tabbar>

  <RouterView />
</template>

<style scoped></style>
