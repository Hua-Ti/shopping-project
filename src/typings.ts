// 首页导航 （数组（字符串））
export interface HomeTopNav {
    data: Array<homeModuleNav>
}
// export interface homeModuleNav {
//     image: String
//     sort: Number
//     _system_record_entry_id: Number
//     link: String
//     _material_end_time: Number
//     title: String
//     titleColor: String
//     description?:String
//     acm: String
//     h5Link: String
//     material_start_time: Number
// }
export interface homeModuleNav {
    image: String
    _system_record_entry_id: Number
    title: String
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
