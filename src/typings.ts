// 首页导航 （数组（字符串））
export interface HomeTopNav {
    image: String
    sort: Number
    _system_record_entry_id: Number
    link: String
    // _material_end_time: Number
    title: String
    titleColor: String
    // description?:String
    // acm: String
    h5Link: String
    // material_start_time: Number
}

// 直播分类
export interface LiveBroadcastSort {
    api: String
    v: Number
    ret: String
    data: LiveSortData
}
export interface LiveSortData {
    banners?: String
    // tabs: Array<LiveSortTabs>
    tabs: {
        items: Array<LiveSortTabs>
    }
}
export interface LiveSortTabs {
    id: Number
    name: String
    active: Boolean
    platform: Number
}
<<<<<<< HEAD
//直播分类项具体数据
export interface LiveData {
    data: {
        lives: Array<LiveList>
    }
}
//直播列表具体数据
export interface LiveList {
    bgImg: string
    actUserId: string
    roomId: number
    visitorCount: number
    shopCarts: {
        goods: Array<GoodsList>
        avatar: string
        comments: Array<CommentsList>
    }
    avatar: string
}
//直播商品数据
export interface GoodsList {
    title: string
    itemId: string
    cover: string
    price: string

}
//直播评论
export interface CommentsList {
    content: string
    uid: string
    avatar: string
}
=======

// 首页限时快抢
export interface gettimeRob {
    timestamp: number
    _system_record_entry_id: string
    tagTitle: string
    link: string
    title: string
    _material_start_time: number
    countdown: number
    w: number
    backgroundImage: string
    _material_end_time: number
    acm: string
    categoryId?: number

}
>>>>>>> 0b353613527dc5c491c5f5b8010ee7c501ae3f56
