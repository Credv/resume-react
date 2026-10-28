# 陈鸿 - 前端开发工程师简历

> ⚠️ **本仓库已不是简历的主仓库（2026-10-29 起）。**
>
> 源码已并入 **[Credv/ai-fxb](https://github.com/Credv/ai-fxb) 的 `apps/resume/`**，作为 npm workspaces monorepo 里的一个应用，与「AI 窗口」控制台共用构建与部署。
>
> - 简历线上地址：<https://3ecat.me/>（根路由）
> - AI 窗口控制台：<https://3ecat.me/ai-fxb/>
> - 这里的内容停留在迁移前，其中「2024.05—至今」等时间口径已过期，**改简历请去主仓库**，详见 [AGENTS.md](./AGENTS.md)。

> React + TypeScript + Vite + ECharts 构建的现代化个人简历网站（迁移前状态；主仓库已移除 ECharts 看板）

## 技术栈

- **框架**：React 18 + TypeScript
- **构建**：Vite 5.4
- **可视化**：ECharts 5.5
- **工程化**：Harness Engineering（AST 扫描 + 机械化约束 + 自动化反馈）
- **代码规范**：ESLint 9 + TypeScript strict 模式

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# ESLint 检查
npm run lint

# Harness 约束检查
npm run harness:check
```

## 项目结构

```
src/
├── main.tsx              # React 入口
├── App.tsx               # 根组件
├── index.css             # 全局样式
└── components/
    ├── Sidebar.tsx        # 侧边栏
    ├── ProjectCard.tsx    # 项目卡片
    └── Dashboard.tsx      # ECharts 数据看板
```

## Harness Engineering

本项目已初始化 Harness Engineering 范式：

- **AGENTS.md**：AI Agent 入口导航，提供项目结构化知识
- **机械化约束**：`scripts/harness-check.js` 自动检查代码规范
- **Qoder 规则**：`.qoder/rules/` 定义 AI 辅助开发规则

## License

MIT
