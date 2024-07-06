import{_ as t,o as e,c,e as s}from"./app-ce7b0361.js";const a={},b=s(`<h1 id="图片格式化" tabindex="-1"><a class="header-anchor" href="#图片格式化" aria-hidden="true">#</a> 图片格式化</h1><p>对于*.hdslb.com/bfs下的图片文件都可以使用以下格式化参数</p><blockquote><p>*.hdslb.com/bfs/*/*.[jpg/png/gif]@{width}w_{high}h_{quality}q.{format}</p></blockquote><table><thead><tr><th>可选参数</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>width</td><td>图片最大限制宽度</td><td></td></tr><tr><td>high</td><td>图片最大限制高度</td><td></td></tr><tr><td>quality</td><td>图片质量百分比</td><td>仅限webp</td></tr><tr><td>format</td><td>图片格式</td><td>仅限png/jpg/webp/<a href="#avg_color%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E">avg_color</a></td></tr></tbody></table><p><strong>示例：</strong></p><p>原始图片</p><p>https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg</p><p><img src="https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg" alt=""></p><p>高度限制为100</p><p>https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@100h</p><p><img src="https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@100h" alt=""></p><p>宽度限制为100</p><p>https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@100w</p><p><img src="https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@100w" alt=""></p><p>转换格式为webp</p><p>https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@.webp</p><p><img src="https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@.webp" alt=""></p><p>转换为webp图片质量为1%</p><p>https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@1q.webp</p><p><img src="https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@1q.webp" alt=""></p><h2 id="avg-color格式说明" tabindex="-1"><a class="header-anchor" href="#avg-color格式说明" aria-hidden="true">#</a> avg_color格式说明</h2><p>当图片格式化输出格式为<code>avg_color</code>时</p><blockquote><p>*.hdslb.com/bfs/*/*.*@*.avg_color</p></blockquote><p><em>请求方式：GET</em></p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>RGB</td><td>str</td><td>平均颜色值</td><td>HEX</td></tr></tbody></table><p><strong>示例：</strong></p><p>获取 https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg 的平均颜色值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://i1.hdslb.com/bfs/archive/e5fff1472bad1c0c6bcb3004205f9be23b58ffc0.jpg@.avg_color&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;RGB&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#7d6f6c&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,31),d=[b];function p(f,o){return e(),c("div",null,d)}const h=t(a,[["render",p],["__file","picture.html.vue"]]);export{h as default};
