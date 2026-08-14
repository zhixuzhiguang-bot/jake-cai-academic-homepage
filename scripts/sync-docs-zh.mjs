import fs from "node:fs";

const path = new URL("../docs/index.html", import.meta.url);
let html = fs.readFileSync(path, "utf8");

html = html.replace(
  '<section class="intro"><div><img class="logo" src="txst.png" alt="Texas State University logo">',
  '<section class="intro"><div><div class="portrait-wrap"><img class="portrait" src="profile.jpg" alt="Yizhou (Jake) Cai 肖像"><img class="logo" src="txst.png" alt="德州州立大学标志"></div>'
);
html = html.replace(
  '我致力于为高维数据发展可扩展的统计方法，并关注公共卫生、金融、教育和数据科学中的应用。欢迎跨学科及业界合作；目前正在招收两名博士生。',
  '我现任德州州立大学统计学助理教授，致力于为高维及相关数据发展可扩展的统计方法，并关注公共卫生、金融、教育和数据科学中的应用。我是一名经验丰富的跨领域合作者，乐于将统计方法转化为可与学术界及业界伙伴共同使用的实际工具。我目前正在招收 2 名博士生。'
);
html = html.replace(
  '研究聚焦复杂依赖结构下的可靠推断，以及空间与时间数据中的模式变化。',
  '我的方法研究聚焦复杂依赖数据的可靠、可扩展推断，包括隐变量模型以及空间和时间数据中的模式变化。我结合统计理论、计算方法与领域知识，发展兼具可解释性和实际应用价值的方法。'
);

const zhProjects = '<section class="section projects"><h2>代表性项目</h2><div class="cards"><article class="project"><small>隐变量推断</small><h3>极大理想似然估计</h3><p>将隐变量参数化的统一框架，实现可扩展推断。</p></article><article class="project"><small>保险与空间风险</small><h3>大型保险理赔中的相关性</h3><p>利用空间因子 Copula 模型进行考虑相关性的定价。</p></article><article class="project"><small>公共卫生</small><h3>心理健康轨迹中的变点</h3><p>重复多元时间序列的因果与变点方法。</p></article><article class="project"><small>以人为本的人工智能</small><h3>人工智能系统的偏差与实践</h3><p>视觉 AI 偏差与全球生成式 AI 应用的实证研究。</p></article><article class="project"><small>统计优化</small><h3>Voronoi-Elitism 遗传算法</h3><p>面向复杂统计目标函数的通用无导数方法，包含理论与实现。</p></article><article class="project"><small>有序张量方法</small><h3>相关结构下的聚类检测</h3><p>本人主持并获资助的相关有序张量聚类检测研究。</p></article></div></section>';
const zhPubs = '<section class="section"><h2>代表性论文与研究手稿</h2><div><ol class="pub"><li><p>Mohammadi 等（2025）</p><p class="title">生成式人工智能是否正在重塑全球学术实践？</p><p>Information Processing & Management。</p></li><li><p>Mohammadi 等（2025）</p><p class="title">谁是科学家？Google Vision AI 中的性别与种族偏差</p><p>AI and Ethics。</p></li><li><p>Ma、Cai、Shi 与 Zhu（2024）</p><p class="title">大型保险理赔数据的层级相关性建模</p><p>The Annals of Applied Statistics。</p></li><li><p>Lookingbill、Mohammadi 与 Cai（2023）</p><p class="title">社交媒体短视频中饮食失调内容评估</p><p>JAMA Network Open。</p></li><li><p>Yin 与 Cai</p><p class="title">有序因子分析中 RMSEAD 的估计</p><p>Multivariate Behavioral Research，大修中。</p></li><li><p>Zou、Cai 与 Ma</p><p class="title">Voronoi-Elitism 遗传算法</p><p>Statistics and Computing，在审。</p></li><li><p>Cai 与 Ma</p><p class="title">极大理想似然估计：隐变量模型的统一推断框架</p><p>JRSS Series B，在审。</p></li></ol></div></section>';
const oldTeachingStart = '<section class="section"><h2>教学</h2>';
html = html.replace(oldTeachingStart, zhProjects + zhPubs + oldTeachingStart);
html = html.replace(
  '<section class="section"><h2>教学</h2><div><ul class="courses"><li>STAT 201：初等统计学</li><li>STAT 704：数据分析 I</li><li>STAT 712：数理统计 I</li><li>STAT 519：抽样调查</li><li>STAT 513：统计推断理论</li></ul></div></section>',
  '<section class="section"><h2>教学</h2><div class="teaching-groups"><article><h3>德州州立大学</h3><ul><li>统计学课程教学与研究生指导，2026 年至今</li></ul></article><article><h3>南卡罗莱纳大学</h3><ul><li>STAT 201：初等统计学——实验课讲师</li><li>STAT 704：数据分析 I</li><li>STAT 712：数理统计 I</li><li>STAT 519：抽样调查</li><li>STAT 513：统计推断理论</li><li>STAT 512：数理统计</li><li>STAT 511：概率论</li></ul></article><article><h3>Jiuxianzai Education</h3><ul><li>高级统计推断</li><li>机器学习方法导论</li><li>算法与数据科学</li><li>数理统计与时间序列</li></ul></article></div></section>'
);
html = html.replace(
  '<div class="record"><span>2020</span><div><b>金融建模理学硕士</b><br>西安大略大学</div></div></div>',
  '<div class="record"><span>2020</span><div><b>金融建模理学硕士</b><br>西安大略大学</div></div><div class="record"><span>2019</span><div><b>金融保险硕士</b><br>多伦多大学</div></div><div class="record"><span>2018</span><div><b>数学与应用数学理学学士</b><br>上海交通大学</div></div></div>'
);
html = html.replace(
  '<div class="record"><span>2021-至今</span><div><b>统计教育政策研究员兼讲师</b><br>Jiuxianzai Education Consulting, LLC</div></div></div>',
  '<div class="record"><span>2021-至今</span><div><b>Hi-DA 实验室成员</b><br>南卡罗莱纳大学</div></div><div class="record"><span>2021-至今</span><div><b>统计教育政策研究员</b><br>Jiuxianzai Education Consulting</div></div><div class="record"><span>2025-2026</span><div><b>统计咨询顾问</b><br>南卡罗莱纳大学</div></div><div class="record"><span>2023-2025</span><div><b>实验课讲师</b><br>南卡罗莱纳大学</div></div><div class="record"><span>2021-2023</span><div><b>科研与教学助理</b><br>南卡罗莱纳大学</div></div><div class="record"><span>2019</span><div><b>研究助理</b><br>多伦多大学与 Oanda</div></div><div class="record"><span>2019</span><div><b>Fields CQAM 实验室成员</b><br>多伦多大学</div></div></div>'
);

fs.writeFileSync(path, html, "utf8");
