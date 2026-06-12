<template>
  <div>
    <header class="site-header">
      <NuxtLink class="brand" to="/">
        <span class="brand-mark">SJ</span>
        <span>税嘉</span>
      </NuxtLink>

      <nav class="site-nav" aria-label="主导航">
        <NuxtLink to="/">首页</NuxtLink>
        <NuxtLink to="/blog">博客</NuxtLink>
        <a href="#projects">项目</a>
      </nav>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>
