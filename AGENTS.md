# AGENTS.md — Resume React 项目 AI 入口导航

> 本文件为 AI Agent 提供项目结构化知识，帮助快速理解项目架构与开发规范。

## ⚠️ 仓库状态（2026-10-29 起）：本仓库不再是简历的主仓库

- **源码已并入 [Credv/ai-fxb](https://github.com/Credv/ai-fxb) 的 `apps/resume/`**，作为 npm workspaces monorepo 里的一个应用与「AI 窗口」控制台（`apps/console/`）共享构建。
- **线上地址**：<https://3ecat.me/> 是简历（根路由），<https://3ecat.me/ai-fxb/> 是 AI 窗口控制台，两条路由由 Cloudflare Workers 静态资产一次构建发出（`npm run build` → `npx wrangler deploy`，资产目录由仓库根的 `wrangler.jsonc` 指定）。
- **本仓库保留作历史与独立运行参考，简历文案不再在这里改。**但它是**面试知识点的存放地**：机制细节、踩过的坑这类「简历上故意不写、面试官问了才讲」的内容，写在 [面试知识点.md](面试知识点.md) 里。
- 这里的 `src/App.tsx` 是迁移前的旧文案，其中「博彦科技 2024.05—至今」等口径已过期（实际离职时间 2026-09-30）。
- **任何改动请改 ai-fxb 的 `apps/resume/`**，不要在这里改：在这里改了既不会上线，也会和主仓库分叉。
- 迁移方式：`git subtree add` 保留了完整提交历史（本仓库最后的提交 `444b807` 在 ai-fxb 里对应 `7e3c3f4`）。

## 项目概述

- **项目名称**：resume-react
- **描述**：陈鸿 - 前端开发工程师个人简历网站
- **技术栈**：React 18 + TypeScript + Vite + ECharts
- **构建工具**：Vite 5.4
- **样式方案**：全局 CSS（CSS Variables + 响应式媒体查询）

> 注：迁移到 ai-fxb 之后，ECharts 看板（`Dashboard.tsx`）已删除——自拟统计图没有可信出处，在简历里属于减分项。当前技术栈是 React 18 + TypeScript + Vite，无图表依赖。

## 简历内容规则（主仓库同样适用，改文案前先读这里）

- **数据位置**：全部在 `src/App.tsx` 顶部的 `projects` 与 `workExperience` 常量里，组件只负责渲染；改内容不动组件。
- **卡片顺序**：①《别点那只》微信小游戏 ② AI 窗口（唯一能直接打开验证的线上作品，只有它有 `liveUrl`）③ 千牛平台 · 金融阵地 ④ Harness Engineering ⑤ 招财猫 ⑥ 催收平台 ⑦ Pre-Release Check。
- **一条 bullet 只留两种东西**：能落到数字或范围的结论，或者能看出取舍的决策。工具名复读（"统一 ESLint 规则""集成评分系统提升体验"这类任何 5 年前端都能签的字）一律删。
- **难点写到「约束 + 我决定了什么」就停**，不写实现细节。细节是留给面试官开口的问题钩子，写在纸面上就没了。
- **「踩过的坑」这类机制细节不进简历**，一律挪到本仓库 [面试知识点.md](面试知识点.md)：简历只留结论与可核数字，口述内容另存一份提纲并按代码指认出处。
- **数字必须可核**：只允许来自代码、构建产物或实测（例：控制台首屏 91 KB gzip = index 39.70 + react 45.21 + css 6.48；three.js 172 KB gzip 走空闲队列；每日 6 次 flash 调用产出 4 个看板；快照保留 21 天历史）。找不到出处的数字要么删，要么换成不带数字的说法，不要为了好看保留它。
- **身份如实**：外包签约主体单独成字段、排版退到最后一条，业务与角色在前；不写"核心商业化模块"这类自我定性，也不把甲方写成雇主。
- **禁止**：卖萌感叹号式命名、"Demo"字样、编造统计数字、把机制术语（快照 / 生成 / 自动更新）写进访客可见文案。
- `sections[].items` 是 HTML 字符串（`<strong>` 用作小标题），只放可信的静态文案，不接外部内容。

## 项目结构

```
resume-react/
├── index.html              # Vite 入口 HTML
├── package.json            # 项目依赖与脚本
├── tsconfig.json           # TypeScript 配置
├── vite.config.ts          # Vite 构建配置
├── public/
│   └── avatar.png          # 静态资源（证件照）
── src/
│   ├── main.tsx            # React 入口
│   ├── App.tsx             # 根组件（页面布局 + 数据）
│   ├── index.css           # 全局样式（含响应式）
│   ├── vite-env.d.ts       # Vite 类型声明
│   ── components/
│       ├── Sidebar.tsx      # 侧边栏（头像/联系方式/技能/教育）
│       ├── ProjectCard.tsx  # 项目卡片（可复用）
│       └── Dashboard.tsx    # ECharts 数据可视化看板
├── scripts/
│   └── harness-check.js    # Harness 约束检查脚本
└── .qoder/
    └── rules/              # Qoder AI 规则配置
```

## 分层架构

| 层级 | 目录/文件 | 说明 |
|------|----------|------|
| Layer 4 - 页面 | `src/App.tsx` | 根组件，组合所有子组件 |
| Layer 3 - 组件 | `src/components/` | 可复用 UI 组件 |
| Layer 2 - 样式 | `src/index.css` | 全局样式 + 响应式 |
| Layer 1 - 配置 | `vite.config.ts`, `tsconfig.json` | 构建与类型配置 |

## 组件契约

### Sidebar
- **职责**：展示个人信息、联系方式、技能清单、教育背景
- **Props**：无（静态数据内嵌）
- **依赖**：`/avatar.png` 静态资源

### ProjectCard
- **职责**：展示单个项目的完整信息
- **Props**：
  ```typescript
  interface ProjectCardProps {
    title: string
    role: string
    desc: string
    sections: { title: string; items: string[] }[]
    valueTags?: string[]
    githubUrl?: string
    liveUrl?: string   // 主仓库新增：存在时渲染「在线地址」+「代码仓库」链接行
  }
  ```
- **注意**：主仓库里 GitHub 入口统一用右上角 `.gh-badge` 角标（2026-10-29 他把 AI 窗口也改成和 Pre-Release 一样）；`liveUrl` 存在时链接行只留「在线地址」一个胶囊，不再放「代码仓库」。

### Dashboard
- **职责**：ECharts 数据可视化看板（技能雷达/项目分布/工作Timeline）
- **Props**：无
- **依赖**：`echarts` npm 包
- **注意**：使用 `useRef` + `useEffect` 初始化图表，组件卸载时 `dispose`

## 开发规范

1. **组件命名**：PascalCase，文件名与组件名一致
2. **样式方案**：全局 CSS Variables，不使用 CSS Modules
3. **响应式断点**：1024px（平板）、768px（手机横屏）、480px（手机竖屏）
4. **TypeScript**：strict 模式，禁止 `any`
5. **ESLint**：遵循 `eslint.config.js` 规则

## 常用命令

```bash
npm run dev          # 启动开发服务器（port 3000）
npm run build        # 生产构建
npm run preview      # 预览生产构建
npm run lint         # ESLint 检查
npm run harness:check  # Harness 约束检查
```
