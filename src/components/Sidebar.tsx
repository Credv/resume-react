export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="avatar" src="https://img.alicdn.com/imgextra/i4/O1CN011D4H3IIuAAE18Ung_!!6000000000943-0-tps-560-800.jpg" alt="陈鸿" />
      <h1>陈鸿</h1>
      <p className="subtitle">前端开发工程师</p>

      <div className="summary">
        5 年前端开发经验，先后参与大厂核心业务线，具备大型 Monorepo 工程架构实践与 AI 工程化落地能力。
      </div>

      {/* 联系方式 */}
      <div className="sidebar-section">
        <h3>联系方式</h3>
        <div className="contact-item">
          <span className="contact-icon">📧</span>
          <span>credv@example.com</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">📱</span>
          <span>138-xxxx-xxxx</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">💼</span>
          <span>GitHub: Credv</span>
        </div>
      </div>

      {/* 技能清单 */}
      <div className="sidebar-section">
        <h3>技能清单</h3>

        <div className="skill-group">
          <div className="skill-group-title">前端框架</div>
          <div className="skill-tags">
            <span className="skill-tag">React 16/17/18</span>
            <span className="skill-tag">Umi</span>
            <span className="skill-tag">Ice</span>
          </div>
        </div>

        <div className="skill-group">
          <div className="skill-group-title">工程化</div>
          <div className="skill-tags">
            <span className="skill-tag">Webpack</span>
            <span className="skill-tag">Vite</span>
            <span className="skill-tag">Monorepo</span>
          </div>
        </div>

        <div className="skill-group">
          <div className="skill-group-title">语言</div>
          <div className="skill-tags">
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">TypeScript</span>
          </div>
        </div>

        <div className="skill-group">
          <div className="skill-group-title">服务端</div>
          <div className="skill-tags">
            <span className="skill-tag">Node.js</span>
          </div>
        </div>

        <div className="skill-group">
          <div className="skill-group-title">AI 工程化</div>
          <div className="skill-tags">
            <span className="skill-tag">Harness Engineering</span>
            <span className="skill-tag">AST 代码扫描</span>
            <span className="skill-tag">AI Agent Workflow</span>
          </div>
        </div>

        <div className="skill-group">
          <div className="skill-group-title">其他</div>
          <div className="skill-tags">
            <span className="skill-tag">埋点治理</span>
            <span className="skill-tag">浏览器插件</span>
            <span className="skill-tag">ECharts 大屏</span>
          </div>
        </div>
      </div>

      {/* 教育背景 */}
      <div className="sidebar-section">
        <h3>教育背景</h3>
        <div className="edu-item">
          <div className="school">闽江学院</div>
          <div className="detail">本科 · 2017 — 2021</div>
        </div>
      </div>
    </aside>
  )
}
