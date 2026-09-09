import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// 隐藏 Netlify 角标
if (typeof window !== 'undefined') {
  localStorage.setItem('nl-hud:public:v1', 'hidden')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
