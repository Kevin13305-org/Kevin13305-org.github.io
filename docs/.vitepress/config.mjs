import { defineConfig } from 'vitepress'
import headConfig from './config/head'
import zhCNThemeConfig from './config/theme/zh_CN'
import enUSThemeConfig from './config/theme/en_US'
import markdownItContainer from 'markdown-it-container'
import path from 'path'
import { fileURLToPath } from 'url' // 新增

// 获取 __dirname 的正确值
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kevin13305's Website",
  description: "A place where Kevin13305 used to write articles.",
  head: headConfig,
  themeConfig: enUSThemeConfig,
  base: '/',
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/',
      themeConfig: zhCNThemeConfig
    }
  },
  sitemap: {
    hostname: 'https://kevin13305-org.github.io/'
  },
  lastUpdated: true,
  
  // 修正后的 Markdown 配置
  markdown: {
    config: (md) => {
      md.use(markdownItContainer, 'note', {
        validate: (params) => params.trim().match(/^note\s+(.*)$/),
        render: (tokens, idx) => {
          const m = tokens[idx].info.trim().match(/^note\s+(.*)$/)
          return tokens[idx].nesting === 1 ? 
            `<div class="fluent-note">
               <span class="icon">💡</span>
               <div class="content">${md.utils.escapeHtml(m[1])}</div>
             </div>` : 
            '</div>'
        }
      })
    }
  },
  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            // 更精确的匹配逻辑
            return [
              'fluent-button',
              'fluent-text-field',
              'fluent-card',
              'fluent-dialog'
              // 添加其他使用的组件
            ].includes(tag) || tag.startsWith('fluent-')
          }
        }
      }
    }
  },

  // 构建配置
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          fluent: ['@fluentui/web-components']
        }
      }
    }
  }
})
