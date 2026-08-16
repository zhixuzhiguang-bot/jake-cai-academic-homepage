/* Edit page copy here. Layout and styling live in index.html and styles.css. */
const content = {
  en: {
    navResearch:"Research",navPublications:"Publications",navTeaching:"Teaching & Mentoring",navBackground:"Background",
    affiliation:"Department of Mathematics\nTexas State University",role:"Assistant Professor in Statistics",location:"San Marcos, Texas",
    bio:"I am an Assistant Professor in Statistics at Texas State University. My research develops scalable statistical methods for high-dimensional and dependent data across disciplines. I am an experienced collaborator employing statistical methodological ideas into practical tools with academic and industry partners. Please feel free to contact me if you want to develop collaboration or pursue a PhD career.",
    email:"Email",cv:"Curriculum Vitae",linkedin:"LinkedIn",researchTitle:"Research",researchLead:"My work focuses on scalable inference for data under complex dependence, including latent models and spatial-temporal pattern changes. I apply statistical theory, computation, and domain knowledge to interpretable and useful methodology in real applications.",
    research:[
      ["Scalable methods and inference","Computationally feasible estimation and approximation under complex dependence structures, including Maximum Ideal Likelihood Estimation."],
      ["High-dimensional statistics","Data pattern exploration methods for high dimensional data, such as spatial, spatiotemporal, ordinal data and observation with pattern changes."],
      ["Causal effect analysis","Methods development and reasoning for multivariate observations and causal effect detection with structural changes."],
      ["Interdisciplinary data science","Collaborative applications interdiscplinary research in public health, finance, education, and AI assessment."]
    ],
    projectsTitle:"Selected projects",projects:[
      ["Latent-variable inference","Maximum Ideal Likelihood Estimation","A unified framework that parameterizes latent quantities for scalable inference."],
      ["Insurance & spatial risk","Dependence in large insurance claims","Dependence-aware pricing using spatial factor copula models."],
      ["Public health","Change points in mental-health trajectories","Causal and change-point methods for replicated multivariate time series."],
      ["Human-centered AI","Bias and practice of AI systems","Empirical studies of visual-AI bias and global generative-AI adoption."],
      ["Statistical optimization","Voronoi-Elitism Genetic Algorithm","A generic derivative-free routine with theory and implementation for difficult statistical objectives."],
      ["Ordinal tensor methods","Cluster detection on dependent tensor","New cluster detection methods for dependent ordinal tensors from a funded project."]
    ],
    publicationsTitle:"Selected publications and manuscripts",publicationNote:"Published work appears first, followed by selected manuscripts. See the CV for the complete list.",
    publications:[
      ["Mohammadi, E., Thelwall, M., Cai, Y., Collier, T., & Eftekhar, A. (2025).","Is Generative AI Reshaping Academic Practices Worldwide?","Information Processing & Management."],
      ["Mohammadi, E., Cai, Y., Novin, A., Vera, V., & Mohammadi, E. S. (2025).","Who is a Scientist? Gender and Racial Biases in Google Vision AI.","AI and Ethics."],
      ["Ma, T. F., Cai, Y., Shi, P., & Zhu, J. (2024).","Hierarchical Dependence Modeling for the Analysis of Large Insurance Claims Data.","The Annals of Applied Statistics, 18(2), 1402–1420."],
      ["Lookingbill, V., Mohammadi, E., & Cai, Y. (2023).","Assessment of Accuracy, User Engagement, and Themes of Eating Disorder Content in Social Media Short Videos.","JAMA Network Open, 6(4), e238897."],
      ["Yin, Y., & Cai, Y.","Estimating RMSEAD in Ordinal Factor Analysis.","Multivariate Behavioral Research. Major revision."],
      ["Zou, A., Cai, Y., & Ma, T. F.","Voronoi-Elitism Genetic Algorithm: A Generic Derivative-Free Routine With Theory and Implementation for Statistical Optimization.","Statistics and Computing. Under review."],
      ["Cai, Y., Mei, S., Wu, S., Pang, W., Dong, S., & Sun, J. (2024).","A Data Analysis and Evaluation Method, System, Electronic Storage Equipment.","Chinese Patent No. 202410176158.8."]
    ],
    teachingTitle:"Teaching & mentoring",teachingLead:"My teaching spans formal courses, structured academic support, admissions preparation, K–12 research mentoring, and higher-education tutoring across regions and educational stages.",courseSummary:"View formal teaching record",
    teaching:[
      ["Undergraduate and graduate academic support","Designed a standardized question-and-answer workflow that identifies the source of confusion, delivers precise responses, and uses student feedback and performance evidence to refine course arrangements. The service received a 99% positive rating in 2023."],
      ["Graduate admissions interview preparation","Built a repeatable preparation pathway covering CV revision, evidence-based scoring rubrics, structured mock interviews, and quantified feedback. The process turns each rehearsal into measurable priorities for the next round."],
      ["K–12 academic research mentoring","Mentored Anthony Zou through a mathematics research project from problem framing and computational experiments to academic writing and manuscript submission, contributing to a paper on the Voronoi-Elitism Genetic Algorithm."],
      ["Higher-education mentoring and tutoring","Mentored and tutored learners at undergraduate and graduate levels across China, Canada, the United States, Australia, Malaysia, and Hong Kong, adapting support to different academic systems, preparation levels, and goals."]
    ],
    courses:[
      ["Texas State University",["MATH 3305: Introduction to Probability and Statistics"]],
      ["University of South Carolina",["STAT 201: Elementary Statistics","STAT 704: Data Analysis I","STAT 712: Mathematical Statistics I","STAT 519: Sampling","STAT 513: Theory of Statistical Inference","STAT 512: Mathematical Statistics","STAT 511: Probability"]],
      ["Jiuxianzai Education",["Advanced Statistical Inference","Introduction to Machine Learning Methods","Algorithm and Data Science","Advanced Mathematical Statistics"]]
    ],
    backgroundTitle:"Background",educationTitle:"Education",workTitle:"Work experience",updated:"Last updated August 2026",
    education:[["2026","Ph.D. in Statistics","University of South Carolina"],["2020","M.Sc. in Financial Modelling","Western University"],["2019","Master of Financial Insurance","University of Toronto"],["2018","B.Sc. in Mathematics and Applied Mathematics","Shanghai Jiao Tong University"]],
    work:[["2026–present","Assistant Professor","Texas State University"],["2021–present","Member, Human Insight for Data and AI (Hi-DA) Lab","University of South Carolina"],["2021–2026","Statistical Education Policy Researcher","Jiuxianzai Education Consulting, LLC"],["2025–2026","Statistics Consultant","Thomas Cooper Library, University of South Carolina"],["2023–2025","Lab Instructor","University of South Carolina"],["2019","Member, Fields CQAM Lab","University of Toronto"]]
  },
  zh: {
    navResearch:"研究",navPublications:"论文",navTeaching:"教学与指导",navBackground:"经历",
    affiliation:"数学系\n德州州立大学",role:"统计学助理教授",location:"美国得克萨斯州圣马科斯",
    bio:"我现任德州州立大学统计学助理教授、博士生导师，研究领域包括高维统计和非独立情形下的可扩展方法，以及统计方法在其他相关领域中的应用。我拥有丰富的跨领域合作、咨询经验，擅长将统计方法转化为可供学界、业界合作者使用的落地工具。如果你有意合作，请不吝联系。我目前有两个全奖博士名额，欢迎联系申请。",
    email:"电子邮件",cv:"英文简历",linkedin:"领英",researchTitle:"研究方向",researchLead:"我的方法论研究聚焦于复杂相关数据的可扩展推断，例如隐变量模型以及时空数据中的特征变化。在应用上，我将统计理论、计算方法与其他领域知识进行结合，发展兼具可解释性和实际应用价值的统计工具。",
    research:[["可扩展方法与推断","基于随机隐变量参数化的可计算估计与近似方法，及其非独立情形下的延伸。"],["高维统计","开发地理、时空、有序及特征变点观测的大数据统计方法；高维度数据的数值计算优化算法。"],["因果效应分析","多元观测的结构性变化情形下的因果效应识别、量化及验证。"],["跨学科数据科学","以数据为驱动，跨领域统计方法及人工智能系统的量化评估。"]],
    projectsTitle:"代表性项目",projects:[["隐变量推断","极大理想似然估计","隐变量参数化的统一方法框架，实现可扩展推断。"],["空间风险下的保险定价","大型自然灾害保险理赔的定价策略","利用空间因子耦合模型以及组合似然模型进行设计相关性的大型保险定价。"],["公共卫生","后疫情时代的心理健康变化研究","长期多元时间序列的三重因果量化验证及变点检测方法。"],["人工智能的人文应用","人工智能系统的实践与偏差","视觉 AI 偏差与全球生成式 AI 应用的国别实证研究。"],["统计优化","Voronoi-Elitism 遗传算法","面向复杂目标函数的通用无导数统计方法、理论与应用。"],["有序张量方法","相关结构下的聚类检测","强相关性下的多重有序张量聚类识别检测研究。"]],
    publicationsTitle:"代表性论文与工作",publicationNote:"完整清单见英文简历。",
    publications:[["Mohammadi, E., Thelwall, M., Cai, Y., Collier, T., & Eftekhar, A. (2025).","生成式人工智能是否正在重塑全球学术实践？","Information Processing & Management。"],["Mohammadi, E., Cai, Y., Novin, A., Vera, V., & Mohammadi, E. S. (2025).","谁是科学家？Google Vision AI 中的性别与种族偏差","AI and Ethics。"],["Ma, T. F., Cai, Y., Shi, P., & Zhu, J. (2024).","大型保险理赔数据的分层相关性建模","The Annals of Applied Statistics, 18(2), 1402–1420。"],["Lookingbill, V., Mohammadi, E., & Cai, Y. (2023).","社交媒体短视频中饮食失调内容评估","JAMA Network Open, 6(4), e238897。"],["Yin, Y., & Cai, Y.","有序因子分析中 RMSEAD 的估计","Multivariate Behavioral Research，修改中。"],["Zou, A., Cai, Y., & Ma, T. F.","Voronoi-Elitism 遗传算法：一种无梯度统计优化算法的理论及部署","Statistics and Computing，在审。"],["Cai, Y., Mei, S., Wu, S., Pang, W., Dong, S., & Sun, J. (2024).","一种数据分析、评估方法和系统的电子存储设备","中国专利号 202410176158.8。"]],
    teachingTitle:"教学与指导",teachingLead:"除正式授课外，我也持续建设可复用、可衡量的学术支持流程，覆盖本硕学习、研究生入学、K–12 学术研究及高等教育阶段的跨地区指导。",courseSummary:"查看正式授课履历",
    teaching:[["本硕阶段答疑流程标准化","将答疑拆分为问题定位、概念溯源、分步解答、理解验证与反馈记录，逐步形成兼顾准确性与效率的标准流程；再结合学生表现和课程效果数据优化课程安排与沟通方式。该服务于 2023 年获得 99% 好评。"],["研究生入学准备流程标准化","搭建从简历诊断与修改、材料证据梳理、量化评分，到分轮模拟面试和复盘改进的完整流程。以统一评分维度记录每轮表现，将反馈转化为可追踪的下一步目标。"],["K–12 学术研究辅导","指导 Anthony Zou 开展数学研究，从选题与问题定义、算法与计算实验，到论文写作和投稿，推进 Voronoi-Elitism 遗传算法论文的形成与发表流程。"],["高等教育 Mentor 与 Tutor","具备本科、硕士及博士培养阶段的指导经验，覆盖中国、加拿大、美国、澳大利亚、马来西亚与中国香港等不同教育体系；能够依据学生背景、目标与所处阶段调整方法。"]],
    courses:[["德州州立大学",["MATH 3305：概率论及统计学导论"]],["南卡罗莱纳大学",["STAT 201：初等统计学","STAT 704：数据分析 I","STAT 712：数理统计 I","STAT 519：抽样调查","STAT 513：统计推断理论","STAT 512：数理统计","STAT 511：概率论"]],["就现在教育咨询",["高级统计推断","机器学习方法导论","算法与数据科学","高等数理统计"]]],
    backgroundTitle:"教育与专业经历",educationTitle:"教育经历",workTitle:"工作经历",updated:"最后更新：2026年8月",
    education:[["2026","统计学博士","南卡罗莱纳大学"],["2020","金融建模硕士","西安大略大学"],["2019","金融保险硕士","多伦多大学"],["2018","数学与应用数学学士","上海交通大学"]],
    work:[["2026–至今","助理教授","德州州立大学"],["2021–至今","Hi-DA 实验室成员","南卡罗莱纳大学"],["2021–2026","统计教育政策研究员","就现在教育咨询"],["2025–2026","统计咨询顾问","南卡罗莱纳大学"],["2023–2025","实验讲师","南卡罗莱纳大学"],["2019","Fields CQAM 实验室成员","多伦多大学"]]
  }
};

let language = "en";
const escapeHtml = value => String(value).replace(/[&<>"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[char]));
const card = ([title,body]) => `<article class="card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`;
const record = ([date,title,place]) => `<div class="record"><time>${escapeHtml(date)}</time><div><b>${escapeHtml(title)}</b><br>${escapeHtml(place)}</div></div>`;

function render(){
  const t=content[language]; document.documentElement.lang=language;
  document.querySelectorAll("[data-i18n]").forEach(node=>node.textContent=t[node.dataset.i18n]);
  document.getElementById("language-toggle").textContent=language==="en"?"中文":"EN";
  document.getElementById("research-cards").innerHTML=t.research.map(card).join("");
  document.getElementById("project-cards").innerHTML=t.projects.map(([k,title,body])=>`<article class="card"><span class="kicker">${escapeHtml(k)}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("");
  document.getElementById("publication-list").innerHTML=t.publications.map(([authors,title,venue])=>`<li><p>${escapeHtml(authors)}</p><strong>${escapeHtml(title)}</strong><p>${escapeHtml(venue)}</p></li>`).join("");
  document.getElementById("teaching-cards").innerHTML=t.teaching.map(([title,body],i)=>`<article class="teaching-card"><span class="number">0${i+1}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("");
  document.getElementById("course-groups").innerHTML=t.courses.map(([name,items])=>`<article><h3>${escapeHtml(name)}</h3><ul>${items.map(item=>`<li>${escapeHtml(item)}</li>`).join("")}</ul></article>`).join("");
  document.getElementById("education-list").innerHTML=t.education.map(record).join("");
  document.getElementById("work-list").innerHTML=t.work.map(record).join("");
}
document.getElementById("language-toggle").addEventListener("click",()=>{language=language==="en"?"zh":"en";render()});
render();
