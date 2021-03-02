/*
/!**
 * @作者: Seale
 * @时间: 2021/2/12
 * @版本: V1.0
 * @说明: Maxer 自定义 Markdown it 工具集
 * @网站: https://www.imsle.com
 *!/
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import 'highlight.js/scss/atom-one-dark.scss';   // 代码主题
import utils from "markdown-it/lib/common/utils";

export default class {
    static _md = new MarkdownIt({
        breaks: true,     // 转换段落里的 '\n' 到 <br>。
        linkify: true,    // 转换类似为链接的文本为a标签
        highlight: (str, lang, attrs) => {
            if (lang && hljs.getLanguage(lang)) {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(lang, str, true).value +
                    '</code></pre>';
            }
            return '<pre class="hljs"><code>' + utils.escapeHtml(str) + '</code></pre>';
        }                  // 代码块渲染
    });

    static handle(){
        // 自定义渲染


        // 检测需要驼峰命名法，这里由于插件内部直接忽略。
        // eslint-disable-next-line @typescript-eslint/camelcase
        /!*this._md.renderer.rules.link_open = ()=>{
            //
        }*!/
    }

    static getInstance() {
        this.handle();
        return this._md
        //
    }
}*/

