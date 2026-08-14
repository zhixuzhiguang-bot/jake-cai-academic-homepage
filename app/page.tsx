"use client";

import { useState } from "react";

type Lang = "en" | "zh";
const content = {
  en: {
    nav: ["About", "Research", "Projects", "Publications", "Background"],
    title: "Assistant Professor in Statistics",
    institution: "Department of Mathematics, Texas State University",
    location: "San Marcos, Texas",
    about: "I am an Assistant Professor in Statistics at Texas State University. My research develops scalable statistical methods for high-dimensional data, with applications in public health, finance, education, and data science. I welcome collaborations across disciplines and with industry partners. I am also recruiting two Ph.D. students.",
    links: ["Email", "Curriculum Vitae", "Google Scholar", "LinkedIn"],
    researchTitle: "Research",
    researchLead: "My methodological work focuses on reliable inference for data with complex dependence; pattern changes in spatial and temporal data are also central research interests.",
    themes: [
      ["Scalable methods and inference", "Computationally feasible estimation and approximation under complex dependence structures, including Maximum Ideal Likelihood Estimation."],
      ["High-dimensional statistics", "Statistical methods for spatial, spatiotemporal, ordinal, and pattern-changing data, with an emphasis on interpretable dependence structures."],
      ["Causal effect analysis", "Methods for multivariate observations and causal-effect detection in settings with multiple structural changes."],
      ["Interdisciplinary data science", "Collaborative applications in public health, finance, education, and AI assessment."]
    ],
    projectsTitle: "Selected projects",
    projectsLead: "Representative work connecting statistical methodology with real-world questions.",
    projects: [
      ["Latent-variable inference", "Maximum Ideal Likelihood Estimation", "A unified framework that parameterizes latent quantities, making complex latent-variable models easier to estimate, diagnose, and scale."],
      ["Insurance pricing & spatial risk", "Dependence in large insurance claims", "Spatial factor copula models and scalable composite-likelihood tools for dependence-aware pricing of hail losses."],
      ["Public health & biostatistics", "Change points in mental-health trajectories", "Causal and change-point methods for replicated multivariate time series, motivated by changes in mental-disorder symptoms."],
      ["Human-centered AI", "Bias and practice of AI systems", "Empirical studies of visual-AI bias and country-level patterns in the adoption, benefits, and concerns surrounding generative AI."]
    ],
    pubTitle: "Selected publications and manuscripts",
    pubNote: "A complete list of publications, presentations, and works in progress is available in my CV.",
    publications: [
      ["Mohammadi, E., Thelwall, M., Cai, Y., Collier, T., & Eftekhar, A. (2025).", "Is Generative AI Reshaping Academic Practices Worldwide? A Survey of Adoption, Benefits, and Concerns.", "Information Processing & Management."],
      ["Mohammadi, E., Cai, Y., Novin, A., Vera, V., & Mohammadi, E. S. (2025).", "Who is a Scientist? Gender and Racial Biases in Google Vision AI.", "AI and Ethics."],
      ["Ma, T. F., Cai, Y., Shi, P., & Zhu, J. (2024).", "Hierarchical Dependence Modeling for the Analysis of Large Insurance Claims Data.", "The Annals of Applied Statistics, 18(2), 1402–1420."],
      ["Lookingbill, V., Mohammadi, E., & Cai, Y. (2023).", "Assessment of Accuracy, User Engagement, and Themes of Eating Disorder Content in Social Media Short Videos.", "JAMA Network Open, 6(4), e238897."],
      ["Yin, Y., & Cai, Y.", "Estimating RMSEAD in Ordinal Factor Analysis.", "Multivariate Behavioral Research. Major revision."],
      ["Liu, J., Ma, T. F., Gao, R., & Cai, Y. (2025).", "Investigating Teacher Rating Effect Using the Pediatric Symptoms Checklist-17 for Elementary School Children.", "Paper presented at the Annual Conference of the American Educational Research Association, Denver, Colorado."],
      ["Cai, Y., Mei, S., Wu, S., Pang, W., Dong, S., & Sun, J. (2024).", "A Data Analysis and Evaluation Method, System, Electronic Storage Equipment.", "Chinese Patent No. 202410176158.8."]
    ],
    teachingTitle: "Teaching",
    teaching: ["STAT 201: Elementary Statistics", "STAT 704: Data Analysis I", "STAT 712: Mathematical Statistics I", "STAT 519: Sampling", "STAT 513: Theory of Statistical Inference", "Probability, mathematical statistics, and machine-learning courses at Jiuxianzai Education"],
    backgroundTitle: "Background",
    education: "Education",
    appointments: "Professional Experience",
    educationItems: [["2026", "Ph.D. in Statistics", "University of South Carolina"], ["2020", "M.Sc. in Financial Modelling", "Western University"], ["2019", "Master of Financial Insurance", "University of Toronto"], ["2018", "B.Sc. in Mathematics and Applied Mathematics", "Shanghai Jiao Tong University"]],
    appointmentItems: [["2026–present", "Assistant Professor", "Texas State University"], ["2025–2026", "Statistics Consultant", "Thomas Cooper Library, University of South Carolina"], ["2023–2025", "Lab Instructor", "University of South Carolina"], ["2021–present", "Statistical Education Policy Researcher & Lecturer", "Jiuxianzai Education Consulting, LLC"]],
    updated: "Last updated August 2026"
  },
  zh: {
    nav: ["简介", "研究", "项目", "论文", "经历"],
    title: "统计学助理教授", institution: "德州州立大学数学系", location: "美国得克萨斯州圣马科斯",
    about: "我现任德州州立大学统计学助理教授。我的研究致力于为高维数据发展可扩展的统计方法，并关注公共卫生、金融、教育和数据科学中的应用。欢迎跨学科合作以及与业界合作伙伴共同开展研究。我目前正在招收 2 名博士生。",
    links: ["电子邮件", "英文简历", "Google Scholar", "领英"],
    researchTitle: "研究方向", researchLead: "我的方法研究聚焦具有复杂依赖结构的数据推断；空间与时间数据中的模式变化也是我的核心兴趣。",
    themes: [["可扩展方法与推断", "在复杂依赖结构下进行可计算的估计与近似，包括极大理想似然估计。"], ["高维统计", "为空间、时空、有序及模式变化数据开发统计方法，强调依赖结构的可解释性。"], ["因果效应分析", "在多个结构变化情形下，研究多元观测和因果效应识别。"], ["跨学科数据科学", "在公共卫生、金融、教育和人工智能评估中开展合作。"]],
    projectsTitle: "代表性项目", projectsLead: "将统计方法与真实世界问题连接起来的部分研究工作。",
    projects: [["隐变量推断", "极大理想似然估计", "将隐变量视为参数的统一框架，使复杂隐变量模型更易估计、诊断并扩展至大规模数据。"], ["保险与空间风险", "大型保险理赔中的相关性", "利用空间因子 Copula 模型与可扩展复合似然方法，为冰雹损失进行考虑相关性的定价。"], ["公共卫生", "心理健康轨迹中的变点", "由精神障碍症状变化所驱动的重复多元时间序列因果与变点分析。"], ["以人为本的人工智能", "人工智能系统的偏差与实践", "研究视觉人工智能的偏差，以及全球科研人员采用生成式人工智能时的收益、担忧和实践。"]],
    pubTitle: "代表性论文与研究手稿", pubNote: "完整的论文、报告和在研项目列表请参见英文简历。",
    publications: [["Mohammadi, E., Thelwall, M., Cai, Y., Collier, T., & Eftekhar, A. (2025).", "生成式人工智能是否正在重塑全球学术实践？", "Information Processing & Management."], ["Mohammadi, E., Cai, Y., Novin, A., Vera, V., & Mohammadi, E. S. (2025).", "谁是科学家？Google Vision AI 中的性别与种族偏差。", "AI and Ethics."], ["Ma, T. F., Cai, Y., Shi, P., & Zhu, J. (2024).", "大型保险理赔数据的层级相关性建模。", "The Annals of Applied Statistics, 18(2), 1402–1420."], ["Lookingbill, V., Mohammadi, E., & Cai, Y. (2023).", "社交媒体短视频中饮食失调内容的准确性、用户参与度与主题评估。", "JAMA Network Open, 6(4), e238897."], ["Yin, Y., & Cai, Y.", "有序因子分析中 RMSEAD 的估计。", "Multivariate Behavioral Research，大修中。"], ["Liu, J., Ma, T. F., Gao, R., & Cai, Y. (2025).", "基于儿童症状量表-17 的小学生教师评分效应研究。", "美国教育研究学会年会论文，丹佛，美国。"], ["Cai, Y., Mei, S., Wu, S., Pang, W., Dong, S., & Sun, J. (2024).", "数据分析及评估方法、系统、电子存储设备。", "中国专利号 202410176158.8。"]],
    teachingTitle: "教学", teaching: ["STAT 201：初等统计学", "STAT 704：数据分析 I", "STAT 712：数理统计 I", "STAT 519：抽样调查", "STAT 513：统计推断理论", "Jiuxianzai Education 的概率论、数理统计与机器学习课程"],
    backgroundTitle: "教育与工作经历", education: "教育经历", appointments: "专业经历",
    educationItems: [["2026", "统计学博士", "南卡罗莱纳大学"], ["2020", "金融建模理学硕士", "西安大略大学"], ["2019", "金融精算硕士", "多伦多大学"], ["2018", "数学与应用数学理学学士", "上海交通大学"]],
    appointmentItems: [["2026–至今", "助理教授", "德州州立大学"], ["2025–2026", "统计咨询顾问", "南卡罗莱纳大学 Thomas Cooper 图书馆"], ["2023–2025", "导修课讲师", "南卡罗莱纳大学"], ["2021–至今", "统计教育政策研究员兼讲师", "Jiuxianzai Education Consulting, LLC"]],
    updated: "最后更新：2026年8月"
  }
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];
  const ids = ["about", "research", "projects", "publications", "background"];
  return <main>
    <header className="site-header">
      <div className="header-inner"><a className="site-name" href="#about">Yizhou (Jake) Cai</a><nav>{t.nav.map((n,i)=><a key={n} href={`#${ids[i]}`}>{n}</a>)}</nav><div className="lang"><button className={lang==="en"?"active":""} onClick={()=>setLang("en")}>EN</button><span>·</span><button className={lang==="zh"?"active":""} onClick={()=>setLang("zh")}>中文</button></div></div>
    </header>
    <div className="page">
      <section className="intro" id="about">
        <div className="identity"><img className="institution-logo" src="/txst.png" alt="Texas State University logo" /><p className="overline">{t.institution}</p><h1>Yizhou <span>(Jake)</span> Cai</h1><p className="position">{t.title}</p><p className="location">{t.location}</p></div>
        <div className="bio"><p>{t.about}</p><div className="profile-links"><a href="mailto:yizhouc@txstate.edu">{t.links[0]}</a><a href="/Yizhou-Jake-Cai-CV.pdf" download>{t.links[1]}</a><a href="https://scholar.google.com/scholar?q=author%3A%22Yizhou+Cai%22" target="_blank" rel="noreferrer">{t.links[2]}</a><a href="https://www.linkedin.com/in/yizhou-cai-328b96228" target="_blank" rel="noreferrer">{t.links[3]}</a></div></div>
      </section>
      <section className="content-section" id="research"><h2>{t.researchTitle}</h2><div className="section-body"><p className="lead">{t.researchLead}</p><div className="research-list">{t.themes.map(([name,desc])=><article key={name}><h3>{name}</h3><p>{desc}</p></article>)}</div></div></section>
      <section className="content-section projects" id="projects"><h2>{t.projectsTitle}</h2><div className="section-body"><p className="lead">{t.projectsLead}</p><div className="project-grid">{t.projects.map(([tag,name,desc],i)=><article key={name}><div className="project-top"><span>{String(i+1).padStart(2,"0")}</span><small>{tag}</small></div><h3>{name}</h3><p>{desc}</p></article>)}</div></div></section>
      <section className="content-section" id="publications"><h2>{t.pubTitle}</h2><div className="section-body"><ol className="pub-list">{t.publications.map(([authors,title,venue])=><li key={title}><p>{authors}</p><p className="paper-title">{title}</p><p className="venue">{venue}</p></li>)}</ol><p className="note">{t.pubNote} <a href="/Yizhou-Jake-Cai-CV.pdf">PDF</a></p></div></section>
      <section className="content-section" id="teaching"><h2>{t.teachingTitle}</h2><div className="section-body"><ul className="teaching-list">{t.teaching.map((course)=><li key={course}>{course}</li>)}</ul></div></section>
      <section className="content-section" id="background"><h2>{t.backgroundTitle}</h2><div className="section-body columns"><div><h3>{t.education}</h3>{t.educationItems.map(([year,degree,school])=><div className="record" key={degree}><span>{year}</span><p><strong>{degree}</strong><br/>{school}</p></div>)}</div><div><h3>{t.appointments}</h3>{t.appointmentItems.map(([year,role,place])=><div className="record" key={role+year}><span>{year}</span><p><strong>{role}</strong><br/>{place}</p></div>)}</div></div></section>
      <footer><span>© 2026 Yizhou (Jake) Cai</span><span>{t.updated}</span></footer>
    </div>
  </main>;
}
