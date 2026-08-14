import fs from "node:fs";
const path = new URL("../docs/index.html", import.meta.url);
let html = fs.readFileSync(path, "utf8");

if (!html.includes("institution-watermark")) html = html.replace("</head>", `<style>
.overline{line-height:1.55}.bio{position:relative;isolation:isolate;overflow:hidden}.institution-watermark{position:absolute;z-index:-1;width:min(430px,82%);height:auto;right:-6%;top:50%;transform:translateY(-50%);opacity:.075;object-fit:contain;pointer-events:none}.original-title{display:block;font:11px/1.5 Arial,sans-serif;color:#7a7d80;margin:2px 0 5px}@media(max-width:720px){.institution-watermark{width:95%;right:-18%;opacity:.06}}
</style></head>`);

html = html
  .replace('<div class="portrait-wrap"><img class="portrait" src="profile.jpg" alt="Portrait of Yizhou (Jake) Cai"><img class="logo" src="txst.png" alt="Texas State University logo"></div>', '<div class="portrait-wrap"><img class="portrait" src="profile.jpg" alt="Portrait of Yizhou (Jake) Cai"></div>')
  .replace('<div class="portrait-wrap"><img class="portrait" src="profile.jpg" alt="Yizhou (Jake) Cai 肖像"><img class="logo" src="txst.png" alt="德州州立大学标志"></div>', '<div class="portrait-wrap"><img class="portrait" src="profile.jpg" alt="Yizhou (Jake) Cai 肖像"></div>')
  .replace('Department of Mathematics, Texas State University', 'Department of Mathematics<br>Texas State University')
  .replace('德州州立大学数学系', '数学系<br>德州州立大学')
  .replace('<div class="bio">I am an Assistant Professor', '<div class="bio"><img class="institution-watermark" src="txst.png" alt="" aria-hidden="true">I am an Assistant Professor')
  .replace('<div class="bio">我现任德州州立大学', '<div class="bio"><img class="institution-watermark" src="txst.png" alt="" aria-hidden="true">我现任德州州立大学')
  .replace('Statistics instruction and graduate mentoring, 2026-present', 'MATH 3305')
  .replace('统计学课程教学与研究生指导，2026 年至今', 'MATH 3305')
  .replace('Professional and Research Experience', 'Work Experience')
  .replace('<h3>专业经历</h3>', '<h3>工作经历</h3>')
  .replace('<span>2021-present</span><div><b>Statistical Education Policy Researcher</b><br>Jiuxianzai Education Consulting, LLC</div>', '<span>2021-July 2026</span><div><b>Statistical Education Policy Researcher</b><br>Jiuxianzai Education Consulting, LLC</div>')
  .replace('<span>2021-至今</span><div><b>统计教育政策研究员</b><br>Jiuxianzai Education Consulting</div>', '<span>2021-2026年7月</span><div><b>统计教育政策研究员</b><br>Jiuxianzai Education Consulting</div>')
  .replace('<div class="record"><span>2021-2023</span><div><b>Research & Teaching Assistant</b><br>University of South Carolina</div></div>', '')
  .replace('<div class="record"><span>2019</span><div><b>Research Assistant</b><br>University of Toronto and Oanda</div></div>', '')
  .replace('<div class="record"><span>2021-2023</span><div><b>科研与教学助理</b><br>南卡罗莱纳大学</div></div>', '')
  .replace('<div class="record"><span>2019</span><div><b>研究助理</b><br>多伦多大学与 Oanda</div></div>', '')
  .replace('<li><p>Cai, Y., & Ma, T. F.</p><p class="title">Maximum Ideal Likelihood Estimation: A Unified Inference Framework for Latent Variable Models.</p><p>Journal of the Royal Statistical Society: Series B. Under review.</p></li>', '<li><p>Cai, Y., Mei, S., Wu, S., Pang, W., Dong, S., & Sun, J. (2024).</p><p class="title">A Data Analysis and Evaluation Method, System, Electronic Storage Equipment.</p><p>Chinese Patent No. 202410176158.8.</p></li>');

const zhPubs = `<section class="section"><h2>代表性论文与研究手稿</h2><div><ol class="pub"><li><p>Mohammadi, E., Thelwall, M., Cai, Y., Collier, T., & Eftekhar, A. (2025).</p><p class="title">生成式人工智能是否正在重塑全球学术实践？</p><small class="original-title">Is Generative AI Reshaping Academic Practices Worldwide? A Survey of Adoption, Benefits, and Concerns.</small><p>Information Processing & Management。</p></li><li><p>Mohammadi, E., Cai, Y., Novin, A., Vera, V., & Mohammadi, E. S. (2025).</p><p class="title">谁是科学家？Google Vision AI 中的性别与种族偏差</p><small class="original-title">Who is a Scientist? Gender and Racial Biases in Google Vision AI.</small><p>AI and Ethics。</p></li><li><p>Ma, T. F., Cai, Y., Shi, P., & Zhu, J. (2024).</p><p class="title">大型保险理赔数据的层级相关性建模</p><small class="original-title">Hierarchical Dependence Modeling for the Analysis of Large Insurance Claims Data.</small><p>The Annals of Applied Statistics, 18(2), 1402-1420。</p></li><li><p>Lookingbill, V., Mohammadi, E., & Cai, Y. (2023).</p><p class="title">社交媒体短视频中饮食失调内容评估</p><small class="original-title">Assessment of Accuracy, User Engagement, and Themes of Eating Disorder Content in Social Media Short Videos.</small><p>JAMA Network Open, 6(4), e238897。</p></li><li><p>Yin, Y., & Cai, Y.</p><p class="title">有序因子分析中 RMSEAD 的估计</p><small class="original-title">Estimating RMSEAD in Ordinal Factor Analysis.</small><p>Multivariate Behavioral Research，大修中。</p></li><li><p>Zou, A., Cai, Y., & Ma, T. F.</p><p class="title">Voronoi-Elitism 遗传算法</p><small class="original-title">Voronoi-Elitism Genetic Algorithm: A Generic Derivative-Free Routine With Theory and Implementation for Statistical Optimization.</small><p>Statistics and Computing，在审。</p></li><li><p>Cai, Y., Mei, S., Wu, S., Pang, W., Dong, S., & Sun, J. (2024).</p><p class="title">数据分析及评估方法、系统、电子存储设备</p><small class="original-title">A Data Analysis and Evaluation Method, System, Electronic Storage Equipment.</small><p>中国专利号 202410176158.8。</p></li></ol></div></section>`;
html = html.replace(/<section class="section"><h2>代表性论文与研究手稿<\/h2>[\s\S]*?<\/section>(?=<section class="section"><h2>教学)/, zhPubs);
fs.writeFileSync(path, html, "utf8");
