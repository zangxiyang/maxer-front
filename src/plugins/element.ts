import ElementPlus from 'element-plus'
import '../element-variables.scss'
import locale from 'element-plus/lib/locale/lang/zh-cn'
// 引入Element自适应断点css
import 'element-plus/lib/theme-chalk/display.css';
export default (app: any) => {
  app.use(ElementPlus, { locale })
}
