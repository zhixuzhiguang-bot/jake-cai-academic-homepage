"use client";

import { useState } from "react";

type Lang = "en" | "zh";
const content = {
  en: {
    nav: ["About", "Research", "Projects", "Publications", "Background"],
    title: "Assistant Professor in Statistics",
    institution: "Department of Mathematics, Texas State University",
    location: "San Marcos, Texas",
    about: "I am an Assistant Professor in Statistics at Texas State University. My research develops scalable statistical methods for high dimensional data. I am also experienced in interdisciplinary applications such as public health, finance, education, and data science.(add another paragraph saying that I am welcoming collaobrations in other area and industry. Add a sentense I am also recruting 2 phd students.)",
    links: ["Email", "Curriculum Vitae", "Google Scholar", "GitHub"],
    researchTitle: "Research",
    researchLead: "My methodological work focuses on reliable inference for data under complex dependent. Pattern change in spatial and temporal data is also my research interest.",
    themes: [
      ["Scalable methods and inference", "Computationally feasible estimation and approximation under complex dependence structures, including Maximum Ideal Likelihood Estimation."],
      ["High dimensional statistics", "Statistical methods for spatial, spatio-temporal, ordinal, and pattern-changed data, with an emphasis on interpretable dependence structures."],
      ["Causal effect analysis", "Methods for multivariate observations and causal effect detection in settings with multiple structural changes."],
      ["Interdisciplinary data science", "Collaborative applications in public health, finance, education, and AI assessment."]
    ],
    projectsTitle: "Selected projects",
    projectsLead: "Representative work connecting statistical methodology with real-world questions.",
    projects: [
      ["Latent-variable inference", "Maximum Ideal Likelihood Estimation", "A unified framework that parameterizes latent quantities, making complex latent-variable models easier to estimate, diagnose, and scale."],
      ["Insurance pricing & spatial risk", "Dependence in large insurance claims", "Spatial factor copula models and scalable composite-likelihood tools for dependence-aware pricing of hail losses."],
      ["Public health & bio-statistics", "Change points in mental health trajectories", "Causal and change-point methods for replicated multivariate time series, motivated by changes in mental disorder symptoms."],
      ["Human-centered AI", "Bias and practice of AI systems", "Empirical studies of visual-AI bias, and the country-wise study on adoption, benefits, and concerns surrounding generative AI."]
    ],
    pubTitle: "Selected publications and manuscripts",
    pubNote: "A complete list of publications, presentations, and works in progress is available in my CV.",
    publications: [
      ["Mohammadi, E., Thelwall, M., Cai, Y., Collier, T., & Eftekhar, A. (2025).", "Is Generative AI Reshaping Academic Practices Worldwide? A Survey of Adoption, Benefits, and Concerns.", "Information Processing & Management."],
      ["Mohammadi, E., Cai, Y., Novin, A., Vera, V., & Mohammadi, E. S. (2025).", "Who is a Scientist? Gender and Racial Biases in Google Vision AI.", "AI and Ethics."],
      ["Ma, T. F., Cai, Y., Shi, P., & Zhu, J. (2024).", "Hierarchical Dependence Modeling for the Analysis of Large Insurance Claims Data.", "The Annals of Applied Statistics, 18(2), 1402–1420."],
      ["Lookingbill, V., Mohammadi, E., & Cai, Y. (2023).", "Assessment of Accuracy, User Engagement, and Themes of Eating Disorder Content in Social Media Short Videos.", "JAMA Network Open, 6(4), e238897."],
      [(replace this one with the MBR paper)"Cai, Y., & Ma, T. F.", "Maximum Ideal Likelihood Estimation: A Unified Inference Framework for Latent Variable Models.", "Under review at JRSS Series B."],
      ["Zou, A. H., Cai, Y. J., & Ma, T. F.", "Voronoi-Elitism Genetic Algorithm: A Generic Derivative-Free Routine with Theory and Implementation for Statistical Optimization.", "Under review at Statistics and Computing."]
      [(add the education conference paper and the patent)]
    ],
    teachingTitle: "Teaching",
    teaching: "My teaching emphasizes conceptual understanding, mathematical foundations, and (脉络化). I have taught or supported courses in probability, mathematical statistics, statistical inference, data analysis, sampling, and machine learning.(list some important course, instead of a summary)",
    backgroundTitle: "Background",
    education: "Education",
    appointments: "Appointments",
    educationItems: [["2026", "Ph.D. in Statistics", "University of South Carolina"], ["2020", "M.Sc. in Financial Modelling", "Western University"], ["2019", "Master of Financial Insurance", "University of Toronto"], ["2018", "B.Sc. in Mathematics and Applied Mathematics", "Shanghai Jiao Tong University"]],
    (I dont like the name of appointment. use Work or other terms) appointmentItems: [["2026–present", "Assistant Professor", "Texas State University"], ["2025–2026", "Statistics Consultant", "Thomas Cooper Library, University of South Carolina"], ["2023–2025", "Lab Instructor", "University of South Carolina"], ["2021–2023", "Research and Teaching Assistant", "University of South Carolina"](replace the TA by the position in Jiuxianzai Education as policy research and lecturer)],
    updated: "Last updated August 2026"
  },
  zh: {
    nav: ["简介", "研究", "项目", "论文", "经历"],
    title: "数学系助理教授", institution: "德州州立大学", location: "美国得克萨斯州圣马科斯",
    about: "我现任德州州立大学数学系助理教授。我的研究致力于为具有隐结构、相关性和时间变化的复杂数据发展可扩展的统计方法，同时关注公共卫生、保险、教育与数据科学中的应用问题。",
    links: ["电子邮件", "英文简历", "Google Scholar", "GitHub"],
    researchTitle: "研究方向", researchLead: "我的方法研究聚焦高维、相关、部分不可观测或随时间变化的数据，并关注可靠而高效的统计推断。",
    themes: [["可扩展推断与隐变量模型", "研究复杂隐结构的可计算估计与不确定性量化方法，包括极大理想似然估计。"], ["相关性建模", "为空间、时空、顺序与相关数据发展统计方法，强调相关结构的可解释性。"], ["变点与因果分析", "研究重复多元时间序列，以及存在多个结构变化时的因果问题。"], ["跨学科数据科学", "在公共卫生、保险定价、教育与人工智能研究中开展方法驱动型合作。"]],
    projectsTitle: "代表性项目", projectsLead: "将统计方法与真实世界问题连接起来的部分研究工作。",
    projects: [["隐变量推断", "极大理想似然估计", "将隐变量视为参数的统一框架，使复杂隐变量模型更易估计、诊断并扩展至大规模数据。"], ["保险与空间风险", "大型保险理赔中的相关性", "利用空间因子 Copula 模型与可扩展复合似然方法，为冰雹损失进行考虑相关性的定价。"], ["公共卫生", "心理健康轨迹中的变点", "由精神障碍症状变化所驱动的重复多元时间序列因果与变点分析。"], ["以人为本的人工智能", "人工智能系统的偏差与实践", "研究视觉人工智能的偏差，以及全球科研人员采用生成式人工智能时的收益、担忧和实践。"]],
    pubTitle: "代表性论文与研究手稿", pubNote: "完整的论文、报告和在研项目列表请参见英文简历。",
    publications: [["Mohammadi, E., Thelwall, M., Cai, Y., Collier, T., & Eftekhar, A. (2025).", "生成式人工智能是否正在重塑全球学术实践？", "Information Processing & Management."], ["Mohammadi, E., Cai, Y., Novin, A., Vera, V., & Mohammadi, E. S. (2025).", "谁是科学家？Google Vision AI 中的性别与种族偏差。", "AI and Ethics."], ["Ma, T. F., Cai, Y., Shi, P., & Zhu, J. (2024).", "大型保险理赔数据的层级相关性建模。", "The Annals of Applied Statistics, 18(2), 1402–1420."], ["Lookingbill, V., Mohammadi, E., & Cai, Y. (2023).", "社交媒体短视频中饮食失调内容的准确性、用户参与度与主题评估。", "JAMA Network Open, 6(4), e238897."], ["Cai, Y., & Ma, T. F.", "极大理想似然估计：隐变量模型的统一推断框架。", "JRSS Series B 评审中。"], ["Zou, A. H., Cai, Y. J., & Ma, T. F.", "Voronoi-Elitism 遗传算法：用于统计优化的通用无导数程序。", "Statistics and Computing 评审中。"]],
    teachingTitle: "教学", teaching: "我的教学强调统计推理、数学基础、计算实践与清晰表达。我曾讲授或参与概率论、数理统计、统计推断、数据分析、抽样调查与机器学习等课程。",
    backgroundTitle: "教育与工作经历", education: "教育经历", appointments: "工作经历",
    educationItems: [["2026", "统计学博士", "南卡罗莱纳大学"], ["2020", "金融建模理学硕士", "西安大略大学"], ["2019", "金融精算硕士", "多伦多大学"], ["2018", "数学与应用数学理学学士", "上海交通大学"]],
    appointmentItems: [["2026–至今", "助理教授", "德州州立大学"], ["2025–2026", "统计咨询顾问", "南卡罗莱纳大学 Thomas Cooper 图书馆"], ["2023–2025", "导修课讲师", "南卡罗莱纳大学"], ["2021–2023", "科研与教学助理", "南卡罗莱纳大学"]],
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
        <div className="identity"><p className="overline">{t.institution}</p><h1>Yizhou <span>(Jake)</span> Cai</h1><p className="position">{t.title}</p><p className="location">{t.location}</p></div>
        <div className="bio"><p>{t.about}</p><div className="profile-links"><a href="mailto:yizhouc@txstate.edu">{t.links[0]}</a><a href="/Yizhou-Jake-Cai-CV.pdf" download>{t.links[1]}</a><span title="Link to be added">{t.links[2]}</span><span title="Link to be added">{t.links[3]}</span></div></div>
      </section>
      <section className="content-section" id="research"><h2>{t.researchTitle}</h2><div className="section-body"><p className="lead">{t.researchLead}</p><div className="research-list">{t.themes.map(([name,desc])=><article key={name}><h3>{name}</h3><p>{desc}</p></article>)}</div></div></section>
      <section className="content-section projects" id="projects"><h2>{t.projectsTitle}</h2><div className="section-body"><p className="lead">{t.projectsLead}</p><div className="project-grid">{t.projects.map(([tag,name,desc],i)=><article key={name}><div className="project-top"><span>{String(i+1).padStart(2,"0")}</span><small>{tag}</small></div><h3>{name}</h3><p>{desc}</p></article>)}</div></div></section>
      <section className="content-section" id="publications"><h2>{t.pubTitle}</h2><div className="section-body"><ol className="pub-list">{t.publications.map(([authors,title,venue])=><li key={title}><p>{authors}</p><p className="paper-title">{title}</p><p className="venue">{venue}</p></li>)}</ol><p className="note">{t.pubNote} <a href="/Yizhou-Jake-Cai-CV.pdf">PDF</a></p></div></section>
      <section className="content-section" id="teaching"><h2>{t.teachingTitle}</h2><div className="section-body"><p className="lead">{t.teaching}</p></div></section>
      <section className="content-section" id="background"><h2>{t.backgroundTitle}</h2><div className="section-body columns"><div><h3>{t.education}</h3>{t.educationItems.map(([year,degree,school])=><div className="record" key={degree}><span>{year}</span><p><strong>{degree}</strong><br/>{school}</p></div>)}</div><div><h3>{t.appointments}</h3>{t.appointmentItems.map(([year,role,place])=><div className="record" key={role+year}><span>{year}</span><p><strong>{role}</strong><br/>{place}</p></div>)}</div></div></section>
      <footer><span>© 2026 Yizhou (Jake) Cai</span><span>{t.updated}</span></footer>
    </div>
  </main>;
}
