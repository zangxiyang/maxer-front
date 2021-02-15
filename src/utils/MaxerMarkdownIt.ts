/**
 * @作者: Seale
 * @时间: 2021/2/12
 * @版本: V1.0
 * @说明: Maxer 自定义 Markdown it 工具集
 * @网站: https://www.imsle.com
 */

import hljs from "highlight.js";
import 'highlight.js/scss/atom-one-dark.scss' // 代码高亮主题
import utils from "markdown-it/lib/common/utils";
import MarkdownIt from "markdown-it";
import Token from "markdown-it/lib/token";
import Ruler from "markdown-it/lib/ruler";
import ParserInline, {RuleInline} from "markdown-it/lib/parser_inline";
import StateInline from "markdown-it/lib/rules_inline/state_inline";

export class MaxerMarkdownIt {
    private static md = new MarkdownIt({
        breaks: true,     // 转换段落里的 '\n' 到 <br>。
        linkify: true,    // 转换类似为链接的文本为a标签
        highlight: (str: string, lang: string, attrs: string): string => {
            if (lang && hljs.getLanguage(lang)) {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(lang, str, true).value +
                    '</code></pre>';
            }
            return '<pre class="hljs"><code>' + utils.escapeHtml(str) + '</code></pre>';
        }                  // 代码块渲染
    });


    /**
     * 重写基本渲染规则
     */
    static overrideBaseRules(): void {

        // 重写 link 渲染规则
        // eslint-disable-next-line @typescript-eslint/camelcase
        this.md.renderer.rules.link_open = (tokens, idx, options, env, self): string => {
            // 获取属性target的索引号，如果小于0说明没有该属性
            const aIndex = tokens[idx].attrIndex('target');
            if (aIndex < 0) {
                tokens[idx].attrPush(['target', '_blank']);
            } else {
                //attrs:获取该标签的属性名及值，["target", "_blank"]
                (tokens as any)[idx].attrs[aIndex][1] = '_blank';    // replace value of existing attr
            }
            console.log(tokens);
            return self.renderToken(tokens, idx, options);
        }

        // eslint-disable-next-line @typescript-eslint/camelcase
        this.md.renderer.rules.heading_open = (tokens, idx, options, env, self): string => {
            console.log(tokens[idx])

            return `<${tokens[idx].tag} class="maxer-anchor-title" id="${tokens[idx + 1].content}">`;
        }

    }

    /**
     * 新增拓展渲染规则
     * @private
     */
    private static addNewRules(): void {
        this.md.inline.ruler.push("MaxerTip", (state, silent): boolean => {
            let text: string;
            if (state.src.charCodeAt(state.pos) !== 0x5B/* [ */) return false;
            const rex = /\[maxertip\](.+?)\[\/maxertip\]/i;

            if (rex.test(state.src)) {
                text = state.src.match(rex)?.[1] as string;
            }else {
                return false;
            }
            // 提取标签内内容
            state.src = text;
            console.log(state)
            if (!silent){
                state.push('MaxerTipOpen','div',1);
                state.md.inline.tokenize(state);
                state.push('MaxerTipClose','div',-1);
            }
            return true;
        })

        this.md.renderer.rules.MaxerTipOpen = (tokens, idx, options, env, self): string => {
            return `<div>测试渲染`;
        }
        this.md.renderer.rules.MaxerTipClose = (tokens, idx, options, env, self): string => {
            return `</div>`;
        }

    }


    public static getInstance(): MarkdownIt {
        this.overrideBaseRules();
        this.addNewRules();
        return this.md;
    }


}