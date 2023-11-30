<template>
    <div class="mona-live-item" v-for="(ld, index) in liveData" :key="index">
        <div class="actor-info">
            <!-- 主播头像 -->
            <van-image round width="45px" height="45px" :src="ld.avatar" />
            <span class="user-name">{{ ld.userName }}</span>
        </div>
        <!-- 商品推荐与评论 -->
        <div class="main" :style="{ background: 'url(' + ld.bgImg + ')' }">

        </div>

    </div>
</template>

<script setup lang="ts">
// import { } from 'vue'
import { type LiveList } from '../typings'
const props = defineProps(["liveData"])
//  props = defineProps({
//     liveData:{
//         type:<Array<LiveList>>([])
//     }
// })
</script>

<style lang="scss">
.mona-live-item {
    padding: 0 20px;
    // margin-bottom: 10px;

    .actor-info {
        display: flex;
        // align-items: center;
        height: 40px;

        .van-image {
            border: 0.04rem solid hsla(0, 0%, 100%, .9);
            transform: translate(20%,20%);
        }

        .user-name {
            font-size: 14px;
            margin-left: 15px;
            transform: translateY(45%);
        }
    }

    .main {
        background-size: 100% auto !important;
        background-position: 50% !important;
        background-repeat: no-repeat !important;
        display: flex;
        flex-direction: column;
        height: 195px;
        border-radius: 10px;
        background-color: #efefef;
    }
}
</style>