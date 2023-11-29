import axios from '../untils/axios'
import { type HomeTopNav } from '../typings'

//首页导航
export async function getHomeModuleRow() {
    let { data } = await axios.get<HomeTopNav>('https://apic.netstart.cn/mogujie/homeNav.json')
    return data
}