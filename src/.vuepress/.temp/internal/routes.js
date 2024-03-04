export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/index.html.js"), meta: {"y":"h","t":"博客主页","i":"home"} }],
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/intro.html.js"), meta: {"v":"/assets/images/cover3.jpg","e":"\n<p>将你的个人介绍和档案放置在此处。</p>\n","y":"a","t":"介绍页","i":"circle-info"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"c":["使用指南"],"y":"a","t":"主要功能与配置演示","i":"laptop-code"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "disable.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"c":["使用指南"],"g":["禁用"],"e":"<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>\n","y":"a","t":"布局与功能禁用","i":"gears","O":4} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "layout.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"c":["指南"],"g":["布局"],"e":"<p>布局包括:</p>\n<ul>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/navbar.html\" target=\"_blank\" rel=\"noopener noreferrer\">导航栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html\" target=\"_blank\" rel=\"noopener noreferrer\">侧边栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/footer.html\" target=\"_blank\" rel=\"noopener noreferrer\">页脚</a></li>\n</ul>","y":"a","t":"布局","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "markdown.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"c":["使用指南"],"g":["Markdown"],"e":"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\n<p>你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\n","y":"a","t":"Markdown 展示","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "page.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"a":"Krigo","d":1577836800000,"l":"2020年1月1日","c":["使用指南"],"g":["页面配置","使用指南"],"u":true,"v":"/assets/images/cover1.jpg","e":"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n","y":"a","t":"页面配置","i":"file","O":3} }],
  ["/posts/%E5%8D%9A%E5%AE%A2%E5%88%B6%E4%BD%9C/Blog_conf.html", { loader: () => import(/* webpackChunkName: "Blog_conf.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/posts/博客制作/Blog_conf.html.js"), meta: {"e":"\n<h2>Vuepress-theme-hope</h2>\n<p>参考资料：<a href=\"https://theme-hope.vuejs.press/get-started/\" target=\"_blank\" rel=\"noopener noreferrer\">快速上手 Vuepress-theme-hope</a></p>\n<p>配置的环境 &amp; 对应的版本：</p>\n<ol>\n<li>Vscode</li>\n<li>Git (git version 2.43.2)</li>\n<li>Node.js (Node.js v21.6.2)</li>\n<li>pnpm （7.9.5）</li>\n</ol>","y":"a","t":"个人博客制作"} }],
  ["/posts/MATH/GAMES101/First_Crouse.html", { loader: () => import(/* webpackChunkName: "First_Crouse.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/posts/MATH/GAMES101/First_Crouse.html.js"), meta: {"a":"Krigo","c":["MATH"],"g":["MATH","Computer Graphics"],"e":"\n<h2>Vector (向量)</h2>\n<div class=\"hint-container tip\">\n<p class=\"hint-container-title\">图形学的基本研究对象</p>\n</div>\n<h2>Vector Space</h2>\n<ul>\n<li>定义在数域  的向量空间：带有向量加法和标量乘法的非空集合</li>\n<li>在图形学应用中,数域  一般取为实数域，其余为负数域  等</li>\n</ul>\n<h2>Linear Combination</h2>\n<ul>\n<li>\n<p>线性相关/无关 (Linear dependent / independent)</p>\n</li>\n<li>\n<p>向量空间的维度</p>\n<ul>\n<li>空间内能找出的线性无关的向量的个数的最大值, 记为 </li>\n<li>个线性无关的向量构成向量空间</li>\n</ul>\n</li>\n<li>\n<p>低维向量和向量空间</p>\n<ul>\n<li>物理空间: Mesh、曲线、点云的坐标及导数\n<ul>\n<li>欧几里得</li>\n<li>科夫斯基</li>\n</ul>\n</li>\n<li>颜色空间: RGB\n<ul>\n<li>作业：为什么颜色空间可以构成向量空间？（Hint: Vector Space 的定义）</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>\n<p>高位空间和向量空间</p>\n<ul>\n<li>灰度数字图像上所有像素值组成的向量</li>\n<li>二维或三维图形的所有自由度组成的向量</li>\n</ul>\n</li>\n</ul>","y":"a","t":"The First Crouse for GAMES101","i":"file","O":3} }],
  ["/posts/MATH/Graph%20Theory/Chapter_1.html", { loader: () => import(/* webpackChunkName: "Chapter_1.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/posts/MATH/Graph Theory/Chapter_1.html.js"), meta: {"e":"\n<div class=\"hint-container tip\">\n<p class=\"hint-container-title\">Definition 1.1</p>\n<p>Let  be a graph whose vertex-set  The <strong>adjacency matrix</strong> of  is an  Matrix  whose entries  are given by:</p>\n</div>\n","y":"a","t":"Adjacency Matrix - (邻接矩阵?)"} }],
  ["/posts/MATH/SLDG/1d_SLDG.html", { loader: () => import(/* webpackChunkName: "1d_SLDG.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/posts/MATH/SLDG/1d_SLDG.html.js"), meta: {"a":"Krigo","c":["MATH"],"g":["MATH","Numerical Method","Computational Mathematics"],"n":true,"y":"a","t":"Semi-Lagrangian Discountinuous Galerkin (SLDG) method — 1D","i":"lock","O":3} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/404.html.js"), meta: {"y":"p","t":""} }],
  ["/posts/%E5%8D%9A%E5%AE%A2%E5%88%B6%E4%BD%9C/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/posts/博客制作/index.html.js"), meta: {"y":"p","t":"博客制作"} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/posts/index.html.js"), meta: {"y":"p","t":"Posts"} }],
  ["/posts/MATH/GAMES101/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/posts/MATH/GAMES101/index.html.js"), meta: {"y":"p","t":"GAMES101"} }],
  ["/posts/MATH/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/posts/MATH/index.html.js"), meta: {"y":"p","t":"MATH"} }],
  ["/posts/MATH/Graph%20Theory/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/posts/MATH/Graph Theory/index.html.js"), meta: {"y":"p","t":"Graph Theory"} }],
  ["/posts/MATH/SLDG/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/posts/MATH/SLDG/index.html.js"), meta: {"y":"p","t":"SLDG"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"y":"p","t":"分类","I":false} }],
  ["/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/category/使用指南/index.html.js"), meta: {"y":"p","t":"使用指南 分类","I":false} }],
  ["/category/%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/category/指南/index.html.js"), meta: {"y":"p","t":"指南 分类","I":false} }],
  ["/category/math/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/category/math/index.html.js"), meta: {"y":"p","t":"MATH 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"y":"p","t":"标签","I":false} }],
  ["/tag/%E7%A6%81%E7%94%A8/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/tag/禁用/index.html.js"), meta: {"y":"p","t":"标签: 禁用","I":false} }],
  ["/tag/%E5%B8%83%E5%B1%80/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/tag/布局/index.html.js"), meta: {"y":"p","t":"标签: 布局","I":false} }],
  ["/tag/markdown/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/tag/markdown/index.html.js"), meta: {"y":"p","t":"标签: Markdown","I":false} }],
  ["/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/tag/页面配置/index.html.js"), meta: {"y":"p","t":"标签: 页面配置","I":false} }],
  ["/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/tag/使用指南/index.html.js"), meta: {"y":"p","t":"标签: 使用指南","I":false} }],
  ["/tag/math/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/tag/math/index.html.js"), meta: {"y":"p","t":"标签: MATH","I":false} }],
  ["/tag/computer-graphics/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/tag/computer-graphics/index.html.js"), meta: {"y":"p","t":"标签: Computer Graphics","I":false} }],
  ["/tag/numerical-method/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/tag/numerical-method/index.html.js"), meta: {"y":"p","t":"标签: Numerical Method","I":false} }],
  ["/tag/computational-mathematics/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/tag/computational-mathematics/index.html.js"), meta: {"y":"p","t":"标签: Computational Mathematics","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"y":"p","t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"y":"p","t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/yadu/Library/Mobile Documents/com~apple~CloudDocs/Study/Krigo_Blog/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"y":"p","t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
