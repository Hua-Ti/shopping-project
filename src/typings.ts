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
    tabs: String
}
export interface LiveSortTabs {
    selectedTxtColor: String
    unselectedTxtColor: String
    items: Array<LiveSorTitems>
}

export interface LiveSorTitems {
    id: Number
    name: String
    active: Boolean
    platform: Number
}
