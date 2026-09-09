import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ProjectCard from './components/ProjectCard'
import Dashboard from './components/Dashboard'

const projects = [
  {
    title: '千牛平台 · 金融阵地',
    role: '核心开发 & Owner',
    desc: '千牛平台金融模块（千牛 → 金融 → 总览），面向淘宝/天猫商家提供金融服务入口与数据总览，是千牛生态核心商业化模块之一。',
    sections: [
      {
        title: '核心工作',
        items: [
          '负责 <strong>6 个微服务包</strong>（淘宝包、天猫包、共用产品组件包、模块组件包、营销组件包、Node 服务包）的架构设计与日常迭代',
          '推进 Monorepo 工程转型，统一包管理、构建流程与发布规范',
          '完成 React17 → React18 升级，解决 StrictMode 双渲染、生命周期变更等兼容性问题',
        ],
      },
      {
        title: '技术亮点',
        items: [
          '<strong>Monorepo 架构治理</strong>：pnpm workspace 管理多包依赖，统一 tsconfig 路径别名与 ESLint 规则',
          '<strong>埋点体系优化</strong>：系统性治理埋点缺失/重复/命名不规范问题，接入三方监控平台',
          '<strong>AI 埋点工具</strong>：开发 Chrome 插件自动采集页面埋点，提升埋点治理效率',
        ],
      },
    ],
    valueTags: ['6 个微服务包', 'React18 升级', 'Monorepo 转型', '埋点治理'],
  },
  {
    title: 'Harness Engineering · AI Agent 工程化治理框架',
    role: '架构设计 & 核心开发',
    desc: '面向 AI Agent 辅助研发场景的工程化治理框架，通过三层机制（结构化知识预计算、机械化约束、自动化反馈）保障 AI 生成代码的质量与一致性。',
    sections: [
      {
        title: '核心机制',
        items: [
          '<strong>结构化知识预计算</strong>：通过 AST 扫描自动生成 action-registry.json 和 component-registry.json 注册表，构建 AGENTS.md 作为 AI 入口导航',
          '<strong>机械化约束</strong>：lint 脚本强制执行代码规范，防止 AI 生成不符合项目约定的代码',
          '<strong>自动化反馈</strong>：文档新鲜度检查，确保 AI 依赖的知识与代码实际状态同步',
        ],
      },
      {
        title: '技术亮点',
        items: [
          '<strong>AST 代码扫描</strong>：基于 ts-morph 的 scan-actions / scan-components，自动提取页面接口与组件依赖',
          '<strong>DFS Import 树遍历</strong>：递归收集页面的接口/组件依赖，构建完整依赖图谱',
          '<strong>增量合并策略</strong>：fnNames/srcs 聚合，幂等覆盖，支持 Monorepo 跨包扫描',
          '<strong>Human-in-the-Loop</strong>：AI 生成 → 人工审核 → 自动化校验的交付管控流程',
        ],
      },
    ],
    valueTags: ['三层机制', 'AST 扫描', 'AI 工程化', 'Human-in-the-Loop'],
  },
  {
    title: '招财猫 · 互动祈福 H5 应用',
    role: '核心开发 & Owner',
    desc: '基于 Ice.js v3 + React 18 的半游戏化营销 H5 应用，用户可领养虚拟猫咪、许愿祈福、出行探险、收集签文日记。全程在 Harness Engineering 辅助下完成开发。',
    sections: [
      {
        title: '核心技术',
        items: [
          '<strong>Three.js 3D 签筒动画</strong>：基于 @react-three/fiber 构建 3D 场景，实现多阶段动画状态机（入场→摇晃→飞出→完成），含发光特效与缓动曲线',
          '<strong>雪碧图帧动画系统</strong>：支持 8 帧/2 帧/双层 8 帧三种模式切换，CSS @keyframes 驱动横向无限滚动（六图昼夜无缝拼接）',
          '<strong>Motion 页面转场</strong>：clipPath 圆形展开/收缩实现页面切换，AnimatePresence 管理组件进出场动画',
          '<strong>Howler.js BGM 单例</strong>：静音 autoplay 绕过浏览器策略 + 淡入淡出 + unlock 事件兜底，跨页面共享实例不中断',
        ],
      },
      {
        title: '交互与工程化',
        items: [
          '<strong>悬浮猫咪交互系统</strong>：react-rnd 拖拽 + 手势追踪状态切换（平视/仰视/俯视）+ 无操作休眠唤醒 + 边缘吸附 + 多状态机协调',
          '<strong>复杂状态管理</strong>：领养→祈愿→出行→轮询→收获→反馈完整生命周期，localStorage 降级兜底 + 3s 超时保护',
          '<strong>跨端适配</strong>：手淘环境判断 + PC 端 iframe 包裹方案，Pegasus 插件集成 DEF 发布体系',
          '<strong>工程化</strong>：CSS Modules 样式隔离、memo + displayName 性能优化、Vitest 单测、Husky + lint-staged 提交门禁',
        ],
      },
    ],
    valueTags: ['Three.js 3D', '雪碧图帧动画', 'Motion 转场', '悬浮交互系统'],
  },
  {
    title: '催收平台 · AI 对话小助手',
    role: '核心开发',
    desc: '为内部催收平台集成 AI 对话能力，辅助催收人员快速获取信息、生成分析报告。',
    sections: [
      {
        title: '核心工作',
        items: [
          '实现<strong>流式对话（Streaming）</strong>渲染，保障长文本场景下的实时响应体验',
          '设计<strong>多类型内容渲染引擎</strong>，支持文本、Markdown、代码块、EChart 图表等混合格式动态解析与渲染',
        ],
      },
    ],
  },
  {
    title: 'Pre-Release Check · AI 代码发布质量门禁',
    role: '独立设计 & 开发',
    desc: '自主设计的 AI Agent Skill，定位为代码发布前的自动化质量门禁（Quality Gate）。通过意图识别自动触发，对 Git diff 执行多维度静态分析，在 MR 阶段拦截风险，落地质量左移理念。',
    sections: [
      {
        title: '5 维检测矩阵',
        items: [
          '<strong>环境隔离检测</strong> — 识别预发域名/测试 IP/硬编码 URL 等环境泄漏',
          '<strong>调试产物清理</strong> — 自动识别 console.log 等调试代码遗留',
          '<strong>埋点覆盖度审计</strong> — 曝光/点击/业务节点/异常上报全覆盖',
          '<strong>静态代码分析</strong> — ESLint 增量扫描，Error 级别问题拦截',
          '<strong>业务逻辑风险</strong> — 金额转换/空值陷阱/truthy 误判/白屏风险',
        ],
      },
      {
        title: '技术亮点',
        items: [
          '<strong>增量分析引擎</strong>：基于 git diff 行级定位，仅分析变更范围',
          '<strong>模式匹配 + 语义上下文</strong>：降低误报率',
          '<strong>结构化报告</strong>：区分"阻塞发布"与"建议优化"两级优先级',
        ],
      },
    ],
    valueTags: ['30min → 2min', '质量左移', '拦截资损风险', '团队标准流程'],
    githubUrl: 'https://github.com/Credv/pre-release-check',
  },
]

const workExperience = [
  { company: '浩鲸云科技', period: '2020.12 — 2021.12', city: '福州', current: false },
  { company: '法本科技（蚂蚁集团项目）', period: '2022.01 — 2023.06', city: '杭州', current: false },
  { company: '博彦科技（阿里巴巴项目）', period: '2023.07 — 至今', city: '杭州', current: true },
]

const evaluations = [
  { icon: '🎯', text: '5 年大厂项目经验，具备大型复杂项目的独立开发与 Owner 能力' },
  { icon: '🏗️', text: 'Monorepo 架构转型实战经验，善于治理多包工程、推动技术升级' },
  { icon: '🤖', text: 'AI 工程化深入实践，将 AI 能力落地到真实研发工作流，提升团队效率' },
  { icon: '👨‍💻', text: '技术 Owner 意识，能够主导项目架构设计、任务拆分与进度管理' },
]

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="layout">
      <Sidebar />

      <main className="main">
        {/* 工作经历 */}
        <div className="section-title">
          <div className="icon">💼</div>
          工作经历
        </div>
        <div className="work-timeline">
          {workExperience.map((exp, i) => (
            <div className={`work-item${exp.current ? ' current' : ''}`} key={i}>
              <div className="company">{exp.company}</div>
              <div className="period">{exp.period}</div>
              <div className="city">{exp.city}</div>
            </div>
          ))}
        </div>

        {/* 项目经历 */}
        <div className="section-title">
          <div className="icon">🚀</div>
          项目经历
        </div>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}

        {/* 数据可视化 */}
        <div className="section-title">
          <div className="icon">📊</div>
          数据可视化能力展示
        </div>
        <Dashboard />

        {/* 自我评价 */}
        <div className="section-title">
          <div className="icon">⭐</div>
          自我评价
        </div>
        <div className="eval-grid">
          {evaluations.map((eval_, i) => (
            <div className="eval-item" key={i}>
              <div className="eval-icon">{eval_.icon}</div>
              <span>{eval_.text}</span>
            </div>
          ))}
        </div>

        <div className="footer">
          Last updated: September 2026 · Built with React + Vite + TypeScript
        </div>
      </main>

      {/* 回到顶部 */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'var(--gradient)',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(79,110,247,0.4)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="回到顶部"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </div>
  )
}
