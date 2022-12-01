import icon from './icon.vue'
import type { App, Component, Plugin } from "vue"

export type SFCWithInstall<T> = T & Plugin

const withInstall = <T extends Component>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App)=>{
        //注册组件
        app.component((comp as any).name, comp)
    }
    return comp as SFCWithInstall<T>
}

const Icon = withInstall(icon)
export default Icon 