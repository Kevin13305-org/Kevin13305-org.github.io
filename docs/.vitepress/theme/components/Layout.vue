<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout: DefaultLayout } = DefaultTheme
</script>

<template>
  <DefaultLayout>
    <!-- 自定义导航栏 -->
    <template #nav-bar>
      <nav class="fluent-nav">
        <div class="logo">
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div class="nav-links">
          <a href="/">首页</a>
          <a href="/guide">文档</a>
        </div>
      </nav>
    </template>

    <!-- 自定义侧边栏 -->
    <template #sidebar>
      <div class="fluent-sidebar">
        <slot name="sidebar"/>
      </div>
    </template>
  </DefaultLayout>
</template>

<style scoped>
.fluent-nav {
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}

.nav-links a {
  margin-right: 20px;
  color: var(--vp-c-text);
  text-decoration: none;
  padding: 8px 12px;
  border-radius: var(--vp-border-radius);
  transition: background 0.2s;
}

.nav-links a:hover {
  background: rgba(0, 120, 212, 0.1);
}
</style>