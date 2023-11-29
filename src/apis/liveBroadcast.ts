import axios from '../untils/axios'
import { type LiveBroadcastSort } from '../typings'

//直播
export async function getLiveBroadcastSort() {
    let { data } = await axios.get<LiveBroadcastSort>('https://apic.netstart.cn/mogujie/live/tabHeader')
    return data
}