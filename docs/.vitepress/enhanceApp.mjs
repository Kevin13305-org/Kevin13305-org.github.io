import { 
  provideFluentDesignSystem,
  allComponents // 全量引入组件
} from '@fluentui/web-components'

export default ({ app }) => {
  // 创建设计系统实例
  const designSystem = provideFluentDesignSystem()
  
  // 注册所有组件
  designSystem.register(
    allComponents // 自动注册所有官方组件
  )

  // 修正后的全局方法
  app.config.globalProperties.$showDialog = (options) => {
    const dialog = document.createElement('fluent-dialog')
    dialog.innerHTML = `
      <h2 slot="title">${options.title}</h2>
      <p>${options.content}</p>
      <fluent-button 
        slot="footer" 
        @click="${() => dialog.hide()}" 
        appearance="primary"
      >
        关闭
      </fluent-button>
    `
    document.body.appendChild(dialog)
    dialog.show()
  }
}